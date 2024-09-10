"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bangunDatarController_1 = require("../controller/bangunDatarController");
const validateShape_1 = require("../middleware/validateShape");
const route = (0, express_1.Router)();
// Define routes for luas lingkaran
route.get(`/circle/`, [validateShape_1.validateCircle], bangunDatarController_1.circleArea);
// Define routes for luas segitiga
route.get(`/triangle`, [validateShape_1.validateTriangle], bangunDatarController_1.triangleArea);
// Define routes for luas persegi panjang
route.get(`/rectangle/:panjang/:lebar`, [validateShape_1.validateRectangle], bangunDatarController_1.rectangleArea);
exports.default = route;
