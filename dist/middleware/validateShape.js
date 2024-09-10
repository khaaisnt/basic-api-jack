"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCircle = exports.validateRectangle = exports.validateTriangle = void 0;
const joi_1 = __importDefault(require("joi"));
// create a schema for validate for circle
const circleSchema = joi_1.default.object({
    r: joi_1.default.number().min(1).required(),
});
// create a schema for validate for triangle
const triangleSchema = joi_1.default.object({
    alas: joi_1.default.number().min(1).required(),
    tinggi: joi_1.default.number().min(1).required(),
});
// create a schema for validate for rectangle
const rectangleSchema = joi_1.default.object({
    panjang: joi_1.default.number().min(1).required(),
    lebar: joi_1.default.number().min(1).required(),
});
// create function to validate request circle
const validateCircle = (req, res, next) => {
    const validation = circleSchema.validate(req.query);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};
exports.validateCircle = validateCircle;
// create function to validate request triangle
const validateTriangle = (req, res, next) => {
    const validation = triangleSchema.validate(req.query);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};
exports.validateTriangle = validateTriangle;
// create function to validate request rectangle
const validateRectangle = (req, res, next) => {
    const validation = rectangleSchema.validate(req.params);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};
exports.validateRectangle = validateRectangle;
