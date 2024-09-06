import { Router } from "express";
import { ageComparation } from "../controller/compareController";
import { validateAge } from "../middleware/validateCompare";

const route = Router();
route.post(`/age`, [validateAge],ageComparation);

export default route;