const validationSignupUser = (req, res, next) => {
  const { firstname, lastname, emailAddress, password } = req.body;
  if (!firstname)
    return res
      .status(400)
      .json({ success: false, message: "First name is required" });
  if (!lastname)
    return res
      .status(400)
      .json({ success: false, message: "Last name is required" });
  if (!emailAddress) 
    return res
      .status(400)
      .json({ success: false, message: "Email address is required" });
  if (!password)
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
      next();
}; 

export default validationSignupUser;
