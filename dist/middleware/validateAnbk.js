"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAnbk = void 0;
const joi_1 = __importDefault(require("joi"));
const Nilai = joi_1.default.object({
    nama: joi_1.default.string().required(),
    nilaiLiterasi: joi_1.default.number().min(0).max(100).required(),
    nilaiNumerasi: joi_1.default.number().min(0).max(100).required(),
});
const schema = joi_1.default.object({
    nilai: joi_1.default.array().items(Nilai).min(1).required(),
});
const validateAnbk = (req, res, next) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};
exports.validateAnbk = validateAnbk;
