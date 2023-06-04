import { getCountsMap } from "./getCountsMap.ts";

export function validAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const s_counts = getCountsMap(s);
  const t_counts = getCountsMap(t);

  const s_unique_letters = Array.from(s_counts.keys());
  const t_unique_letters = Array.from(t_counts.keys());

  if (s_unique_letters.length !== t_unique_letters.length) return false;

  let i;
  for (i = 0; i < s_unique_letters.length; i++) {
    const char = s_unique_letters[i];
    if (!t_counts.has(char)) return false;
    if (s_counts.get(char) !== t_counts.get(char)) return false;
  }

  return true;
}
