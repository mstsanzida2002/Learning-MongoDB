export function errorHandler(err, req, res, next) {
  console.error(err.message);

  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(400).json({ message: err.message });
  }

  res.status(500).json({ message: 'Server error' });
}
