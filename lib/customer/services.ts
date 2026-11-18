/**
 * Fail-closed customer-to-circuit mapping boundary. Never derive ICUK usernames from
 * client-supplied query strings, Clerk email addresses, or unverified organisations.
 * Implement the queries using a server-side datastore once account ownership is verified.
 */
export type CustomerScope = { clerkUserId: string; clerkOrgId: string | null };
export type CustomerService = {
  id: string; displayName: string; category: 'home' | 'business';
  // ICUK username never appears in public API responses.
};
export type InternalServiceLink = CustomerService & { icukUsername: string; customerAccountId: string };

export async function listCustomerServices(_scope: CustomerScope): Promise<CustomerService[]> {
  // No database connected yet: return nothing rather than exposing another account.
  return [];
}
export async function resolveAccessibleService(_scope: CustomerScope, _serviceId: string): Promise<InternalServiceLink | null> {
  // Must validate verified customer membership and an explicitly linked circuit.
  return null;
}
