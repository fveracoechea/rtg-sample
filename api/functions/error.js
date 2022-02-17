export const catchError = (res) => (error) => {
  console.error(error);
  res.status(501).json({ error: error.message });
};
