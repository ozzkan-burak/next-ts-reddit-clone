import {Register, Response} from "express";

import { User } from '../entities/User';

const register = async (req: Register, res: Response) => {
  const {email, username, password } = req.body
  try {
    // TODO Validate data

    // TODO Create user
    const user = new User({email, username, password});
    await user.save();
    // TODO Return the user
    return res.jsom(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
};

const router = Router();
router.post('/register', register);

export default register;