import { Router } from "express";
import {
  tubeVolume,
  coneVolume,
  cubeVolume,
  ballVolume,
} from "../controller/bangunRuangController";
import {
  validateBall,
  validateCone,
  validateCube,
  validateTube,
} from "../middleware/validateRoom";

const router = Router();

// Define routes for volume tabung, kerucut, kubus, bola
router.post(`/tube`, [validateTube], tubeVolume);

router.post(`/cone`, [validateCone], coneVolume);

router.post(`/cube`, [validateCube], cubeVolume);

router.post(`/ball`, [validateBall], ballVolume);

export default router;
