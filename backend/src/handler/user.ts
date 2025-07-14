import { Router } from "express";
import getUser from "../routes/getUser";
import addUser from "../routes/addUser";

const router = Router();

router.get('/get', getUser);
router.post('/add', addUser);

export default router;