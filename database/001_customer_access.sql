-- Netlo portal design migration. NOT applied to any environment.
-- Only minimum internal mappings belong here; billing and authentication records
-- stay with their respective systems. Use parameterised queries and a DB role
-- without DDL rights when implementing a server-side repository.
CREATE TABLE IF NOT EXISTS netlo_accounts (
    id uuid PRIMARY KEY,
    account_type text NOT NULL CHECK (account_type IN ('home', 'business')),
    clerk_organization_id text UNIQUE,
    billing_customer_ref text UNIQUE,
    created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS netlo_account_members (
    account_id uuid NOT NULL REFERENCES netlo_accounts(id),
    clerk_user_id text NOT NULL,
    member_role text NOT NULL CHECK (member_role IN ('owner', 'billing', 'technical', 'viewer')),
    verified_at timestamptz NOT NULL,
    PRIMARY KEY (account_id, clerk_user_id)
);
CREATE INDEX IF NOT EXISTS netlo_member_lookup ON netlo_account_members(clerk_user_id);
CREATE TABLE IF NOT EXISTS netlo_services (
    id uuid PRIMARY KEY,
    account_id uuid NOT NULL REFERENCES netlo_accounts(id),
    provider text NOT NULL CHECK (provider IN ('icuk')),
    provider_service_ref text NOT NULL,
    display_name text NOT NULL CHECK (char_length(display_name) BETWEEN 1 AND 120),
    service_category text NOT NULL CHECK (service_category IN ('home', 'business')),
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (provider, provider_service_ref)
);
CREATE INDEX IF NOT EXISTS netlo_services_account ON netlo_services(account_id);
CREATE TABLE IF NOT EXISTS netlo_audit_events (
    id uuid PRIMARY KEY,
    account_id uuid NOT NULL REFERENCES netlo_accounts(id),
    clerk_actor_id text NOT NULL,
    event_type text NOT NULL,
    service_id uuid REFERENCES netlo_services(id),
    created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS netlo_audit_account_created ON netlo_audit_events(account_id, created_at);
-- The server must use clerk_user_id and verified account membership as the
-- scope of EVERY query. Clerk orgId by itself is never proof of circuit ownership.
-- Insert service mapping ONLY after verifying ownership through onboarding.
-- Never return provider_service_ref to browsers; do not persist diagnostics.
