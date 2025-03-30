// EmailUs Controller (controllers/emailUsController.js)
const sendEmail = require("../config/sendEmail");

// Sent an enquiry mail
exports.sentAnEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    if (!to) {
      return res
        .status(400)
        .json({ message: "to: email address is not present" });
    }

    try {
      await sendEmail({
        to: to,
        subject: subject,
        html: message,
      });

      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      await user.save();

      return res.status(500).json({ message: "Email could not be sent" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
