import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.bravery_access_token;
  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ success: false, messsage: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

export default verifyToken;
