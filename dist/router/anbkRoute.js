"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const anbkController_1 = require("../controller/anbkController");
const validateAnbk_1 = require("../middleware/validateAnbk");
const router = (0, express_1.Router)();
router.post(`/average`, [validateAnbk_1.validateAnbk], anbkController_1.countAverage);
exports.default = router;
