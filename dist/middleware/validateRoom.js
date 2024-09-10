"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBall = exports.validateCube = exports.validateCone = exports.validateTube = void 0;
const joi_1 = __importDefault(require("joi"));
// create a schema for validate for tube
const tubeSchema = joi_1.default.object({
    r: joi_1.default.number().min(1).required(),
    t: joi_1.default.number().min(1).required(),
});
// create a schema for validate for cone
const coneSchema = joi_1.default.object({
    r: joi_1.default.number().min(1).required(),
    t: joi_1.default.number().min(1).required(),
});
// create a schema for validate for cube
const cubeSchema = joi_1.default.object({
    s: joi_1.default.number().min(1).required(),
});
// create a schema for validate for ball
const ballSchema = joi_1.default.object({
    r: joi_1.default.number().min(1).required(),
});
// create function to validate request tube
const validateTube = (req, res, next) => {
    const validation = tubeSchema.validate(req.body);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};
exports.validateTube = validateTube;
// create function to validate request cone
const validateCone = (req, res, next) => {
    const validation = coneSchema.validate(req.body);
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
};
exports.validateCone = validateCone;
// create function to validate request cube
const validateCube = (req, res, next) => {
    const validation = cubeSchema.validate(req.body);
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
};
exports.validateCube = validateCube;
// create function to validate request ball
const validateBall = (req, res, next) => {
    const validation = ballSchema.validate(req.body);
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
};
exports.validateBall = validateBall;
