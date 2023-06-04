export function getCountsMap(s: string): Map<string, number> {
  const counts = new Map();

  let i;
  for (i = 0; i < s.length; i++) {
    const char = s[i];

    if (counts.has(char)) counts.set(char, counts.get(char) + 1);
    else counts.set(char, 1);
  }

  return counts;
}
