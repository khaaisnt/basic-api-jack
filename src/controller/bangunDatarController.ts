import { Request, Response } from "express";

// create a function to count area of circle
const circleArea = (req: Request, res: Response) => {
  try {
    // assume that data sent at query URL
    const r: number = Number(req.query.r);
    // Number for convert to numeric value
    const luas = Math.PI * r * r;
    // 200 = success
    res.status(200).json({
      message: `Area of circle has counted`,
      luas: luas,
    });
  } catch (error) {
    // 500 = Internal Server Error
    return res.status(500).json(error);
  }
};

// create a function to count area of triangle
const triangleArea = (req: Request, res: Response) => {
  try {
    // assume that data sent at query URL
    const alas: number = Number(req.query.alas);
    const tinggi: number = Number(req.query.tinggi);
    // Number for convert to numeric value
    const luas = 0.5 * alas * tinggi;
    // 200 = success
    res.status(200).json({
      message: `Area of triangle has counted`,
      luas: luas,
    });
  } catch (error) {
    // 500 = Internal Server Error
    return res.status(500).json(error);
  }
};

// hitung luas persegi panjang
const rectangleArea = (req: Request, res: Response) => {
  try {
    // using params for get data from URL
    const panjang: number = Number(req.params.panjang);
    const lebar: number = Number(req.params.lebar);
    // Number for convert to numeric value
    const luas = panjang * lebar;
    // 200 = success
    res.status(200).json({
      message: `Area of rectangle has counted`,
      luas: luas,
    });
  } catch (error) {
    // 500 = Internal Server Error
    return res.status(500).json(error);
  }
};

export { circleArea, triangleArea, rectangleArea };
