export const protectRoute = (req, res, next) => {
  if (!req.auth().isAuthenticated) {
    return res.status(401).json({
      message: "unauthorized - you must be logged in",
    });
  }

  next();
};
