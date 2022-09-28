import {Register, Response} from "express";

const register = async (req: Register, res: Response) => {
  const {email, username, password } = req.body
  try {
    // TODO Validate data

    // TODO Create data

    // TODO Return the user
    
  } catch (error) {
    
  }
};

const router = Router();
router.post('/register', register);

export default register;