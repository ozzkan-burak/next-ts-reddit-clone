import {Register, Response} from "express";

import { User } from '../entities/User';

const register = async (req: Register, res: Response) => {
  const {email, username, password } = req.body
  try {
    // TODO Validate data

    // TODO Create user
    const user = new User({email, username, password});
    // TODO Return the user
    
  } catch (error) {
    
  }
};

const router = Router();
router.post('/register', register);

export default register;