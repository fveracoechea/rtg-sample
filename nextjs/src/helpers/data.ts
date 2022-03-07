export const filterBy = <T extends unknown[]>(
  data: T,
  input: Record<string, string> = {}
) => {
  const filters = Object.entries(input);
  return data.filter((item) =>
    filters.every(
      ([key, value]) => String(item[key]).toLowerCase() === String(value).toLowerCase()
    )
  );
};
