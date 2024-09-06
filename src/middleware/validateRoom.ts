import { NextFunction, Request, Response } from "express";
import Joi from "joi";

// create a schema for validate for tube
const tubeSchema = Joi.object({
    r: Joi.number().min(1).required(),
    t: Joi.number().min(1).required(),
});

// create a schema for validate for cone
const coneSchema = Joi.object({
    r: Joi.number().min(1).required(),
    t: Joi.number().min(1).required(),
});

// create a schema for validate for cube
const cubeSchema = Joi.object({
    s: Joi.number().min(1).required(),
});

// create a schema for validate for ball
const ballSchema = Joi.object({
    r: Joi.number().min(1).required(),
});

// create function to validate request tube
const validateTube = (req: Request, res: Response, next: NextFunction) => {
    const validation = tubeSchema.validate(req.body);
    if (validation.error) {
        // 400 = Bad Request
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
    return next();
}; 

// create function to validate request cone
const validateCone = (req: Request, res: Response, next: NextFunction) => {
    const validation = coneSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
}

// create function to validate request cube
const validateCube = (req: Request, res: Response, next: NextFunction) => {
    const validation = cubeSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
}

// create function to validate request ball
const validateBall = (req: Request, res: Response, next: NextFunction) => {
    const validation = ballSchema.validate(req.body)
    if (validation.error) {
        return res.status(400).json({
            message: validation.error.details.map(item => item.message).join(),
        });
    }
}

export { validateTube, validateCone, validateCube, validateBall };
