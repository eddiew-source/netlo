/**
 * Provider adapter boundary. The ICUK endpoint paths, auth and response schemas
 * must be confirmed against reseller API documentation before implementation.
 * No wholesale credentials or pricing should reach the browser.
 */
export type Premises = { id: string; address: string; postcode: string };
export type Offer = { id: string; name: string; speedDownMbps?: number; retailPricePence?: number; quoteRequired: boolean };
export interface ConnectivityProvider {
  lookupAddresses(postcode: string): Promise<Premises[]>;
  checkAvailability(premisesId: string): Promise<Offer[]>;
}

// Wiring point for an ICUK adapter. Explicitly disabled pending live credentials
// and confirmation of API schemas; never invent availability responses.
export function getConnectivityProvider(): ConnectivityProvider | null { return null; }

