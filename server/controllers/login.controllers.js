const validationLoginUser = (req, res, next) => {
  const { emailAddress, password } = req.body;
  if (!emailAddress)
    return res
      .status(400)
      .json({ success: false, message: "Email Address is required" });
  if (!password)
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
  next();
};

export default validationLoginUser;
