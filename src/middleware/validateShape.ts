import { NextFunction, Request, Response } from "express";
import Joi from "joi";

// create a schema for validate for circle
const circleSchema = Joi.object({
    r: Joi.number().min(1).required(),
});

// create a schema for validate for triangle
const triangleSchema = Joi.object({
    alas: Joi.number().min(1).required(),
    tinggi: Joi.number().min(1).required(),
});

// create a schema for validate for rectangle
const rectangleSchema = Joi.object({
    panjang: Joi.number().min(1).required(),
    lebar: Joi.number().min(1).required(),
});

// create function to validate request circle
const validateCircle = (req: Request, res: Response, next: NextFunction) => {
    const validation = circleSchema.validate(req.query);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};

// create function to validate request triangle
const validateTriangle = (req: Request, res: Response, next: NextFunction) => {
    const validation = triangleSchema.validate(req.query);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};

// create function to validate request rectangle
const validateRectangle = (req: Request, res: Response, next: NextFunction) => {
    const validation = rectangleSchema.validate(req.params);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
};

export { validateTriangle, validateRectangle, validateCircle };