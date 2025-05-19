const db=require("../config/db")
const User=db.User
const jwt = require("jsonwebtoken");

const bcrypt=require("bcrypt")
module.exports={
  login: async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ message: "email or password is not found" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).send({ message: "email or password is not found" });
    }

    const token = jwt.sign({ id: user.id }, "1234", { expiresIn: "24h" });

    return res.status(201).send({ message: "Login success", user, token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({ message: "Server error" });
  }
}
,
 register : async (req, res) => {
  try {
    const { email, password } = req.body;


    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send({ message: "Email already exists" });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).send({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send({ message: "Server error" });
  }

}
}