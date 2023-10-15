import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.servicer.js";

const login = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await loginService(email)

      if (!user) {
         return res.status(400).send({ message: "User or Password not found" });
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
         return res.status(400).send({ message: "User or Password not found" });
      }

      const token = await generateToken(user.id)

      res.status(200).send({ token });
   } catch (error) {
      res.status(500).send(error.message);
   }
};

export { login };