"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAge = void 0;
const joi_1 = __importDefault(require("joi"));
// add schema for person
const personSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    dob: joi_1.default.date().required().max(new Date()),
});
// schema for age comparation
const ageSchema = joi_1.default.object({
    firstPerson: personSchema,
    secondPerson: personSchema,
});
const validateAge = (req, res, next) => {
    const validation = ageSchema.validate(req.body);
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};
exports.validateAge = validateAge;
