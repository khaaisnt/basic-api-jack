"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bangunRuangController_1 = require("../controller/bangunRuangController");
const validateRoom_1 = require("../middleware/validateRoom");
const router = (0, express_1.Router)();
// Define routes for volume tabung, kerucut, kubus, bola
router.post(`/tube`, [validateRoom_1.validateTube], bangunRuangController_1.tubeVolume);
router.post(`/cone`, [validateRoom_1.validateCone], bangunRuangController_1.coneVolume);
router.post(`/cube`, [validateRoom_1.validateCube], bangunRuangController_1.cubeVolume);
router.post(`/ball`, [validateRoom_1.validateBall], bangunRuangController_1.ballVolume);
exports.default = router;
