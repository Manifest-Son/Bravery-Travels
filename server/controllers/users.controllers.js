const validateInformation = (req, res, next) => {
    const {firstName, lastName, emailAddress, phoneNumber, password } =req.body;
    if(!firstName) return res.status(400).json({success: false, message:"First name is required"})
    if(!lastName) return res.status(400).json({success: false, message:"First name is required"})
    if(!emailAddress) return res.status(400).json({success: false, message:"First name is required"})
    if(!password) return res.status(400).json({success: false, message:"First name is required"})
    next();
}

export default validateInformation;