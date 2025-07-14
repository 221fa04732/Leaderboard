import { Router } from "express";
import getClaimHistory from "../routes/getClaimHistory";
import registerClaim from "../routes/registerClaim";

const router= Router();

router.get('/history', getClaimHistory)
router.post('/register' ,registerClaim)

export default router;