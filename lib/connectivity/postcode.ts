/** Basic UK postcode format check, not a guarantee that an address exists. */
export function normaliseUKPostcode(value: string): string | null {
  const compact = value.trim().toUpperCase().replace(/\s+/g, "");
  if (compact === "GIR0AA") return "GIR 0AA";
  if (!/^(?:[A-Z]{1,2}[0-9][A-Z0-9]?)[0-9][A-Z]{2}$/.test(compact)) return null;
  return compact.slice(0, -3) + " " + compact.slice(-3);
}
