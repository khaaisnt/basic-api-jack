import { Router } from "express";
import {
  circleArea,
  triangleArea,
  rectangleArea,
} from "../controller/bangunDatarController";
import { validateCircle, validateRectangle, validateTriangle } from "../middleware/validateShape";

const route = Router();

// Define routes for luas lingkaran
route.get(`/circle/`, [validateCircle],circleArea);

// Define routes for luas segitiga
route.get(`/triangle`, [validateTriangle],triangleArea);

// Define routes for luas persegi panjang
route.get(`/rectangle/:panjang/:lebar`, [validateRectangle],rectangleArea);

export default route;
