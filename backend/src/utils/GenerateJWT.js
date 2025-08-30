import jwt from "jsonwebtoken";
const generateJWTToken = (_id) => {
  // Sign the JWT token with the user ID and secret, setting expiration to 30 days
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Export the function for use in other modules
export { generateJWTToken };
