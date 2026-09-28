export function normalizeNcNumber(value: unknown): string {
  if (value === undefined || value === null) return "";
  const text = String(value).trim(); if (!text) return "";
  const groups = text.match(/\d+/g);
  if (groups?.length) return groups[groups.length - 1]!.replace(/^0+(?=\d)/, "");
  return text.toLocaleUpperCase("tr").replace(/\s+/g, "");
}
export function isSameNcNumber(a: unknown,b: unknown): boolean { const left=normalizeNcNumber(a); return left!=="" && left===normalizeNcNumber(b); }
