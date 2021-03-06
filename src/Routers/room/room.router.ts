import * as express from "express";
import { Create, Join, Leave, Start, All } from "./room.controller";

const router = express.Router();

router.post("/create", Create);
router.post("/join", Join);
router.post("/leave", Leave);
router.post("/start", Start);
router.post("/all", All);

export default router;
