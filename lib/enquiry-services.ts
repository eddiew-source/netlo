/** Public enquiry categories, independently allowlisted on the server. */
export const enquiryServices = [
  "Business broadband",
  "Home broadband",
  "Broadband availability",
  "Leased lines & Ethernet",
  "VoIP & business phones",
  "SIP trunks",
  "Resilient networks & failover",
  "Managed IT",
  "Cybersecurity",
  "IT consultancy",
  "SMS & fax-to-email",
  "Something else",
] as const;

export type EnquiryService = (typeof enquiryServices)[number];
export function isEnquiryService(value: unknown): value is EnquiryService {
  return typeof value === "string" && enquiryServices.some(option => option === value);
}
