module.exports = (err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(409).json({
      message: `A product with this ${Object.keys(err.keyValue || {}).join(", ")} already exists`
    });
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((item) => item.message);
    return res.status(400).json({ message: "Validation failed", errors });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  console.error(err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal server error"
  });
};
