export const handleError = (err: Error, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
};
