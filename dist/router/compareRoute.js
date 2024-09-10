"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compareController_1 = require("../controller/compareController");
const validateCompare_1 = require("../middleware/validateCompare");
const route = (0, express_1.Router)();
route.post(`/age`, [validateCompare_1.validateAge], compareController_1.ageComparation);
exports.default = route;
