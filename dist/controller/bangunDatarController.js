"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangleArea = exports.triangleArea = exports.circleArea = void 0;
// create a function to count area of circle
const circleArea = (req, res) => {
    try {
        // assume that data sent at query URL
        const r = Number(req.query.r);
        // Number for convert to numeric value
        const luas = Math.PI * r * r;
        // 200 = success
        res.status(200).json({
            message: `Area of circle has counted`,
            luas: luas,
        });
    }
    catch (error) {
        // 500 = Internal Server Error
        return res.status(500).json(error);
    }
};
exports.circleArea = circleArea;
// create a function to count area of triangle
const triangleArea = (req, res) => {
    try {
        // assume that data sent at query URL
        const alas = Number(req.query.alas);
        const tinggi = Number(req.query.tinggi);
        // Number for convert to numeric value
        const luas = 0.5 * alas * tinggi;
        // 200 = success
        res.status(200).json({
            message: `Area of triangle has counted`,
            luas: luas,
        });
    }
    catch (error) {
        // 500 = Internal Server Error
        return res.status(500).json(error);
    }
};
exports.triangleArea = triangleArea;
// hitung luas persegi panjang
const rectangleArea = (req, res) => {
    try {
        // using params for get data from URL
        const panjang = Number(req.params.panjang);
        const lebar = Number(req.params.lebar);
        // Number for convert to numeric value
        const luas = panjang * lebar;
        // 200 = success
        res.status(200).json({
            message: `Area of rectangle has counted`,
            luas: luas,
        });
    }
    catch (error) {
        // 500 = Internal Server Error
        return res.status(500).json(error);
    }
};
exports.rectangleArea = rectangleArea;
