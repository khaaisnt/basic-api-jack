"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bangunDatarRoute_1 = __importDefault(require("./router/bangunDatarRoute"));
const bangunRuangRoute_1 = __importDefault(require("./router/bangunRuangRoute"));
const compareRoute_1 = __importDefault(require("./router/compareRoute"));
const anbkRoute_1 = __importDefault(require("./router/anbkRoute"));
const app = (0, express_1.default)();
// allow read data from body request
app.use(express_1.default.json());
// Define addres route of bangun datar
app.use(`/shape`, bangunDatarRoute_1.default);
// use diatas digunakan untuk menambahkan prefix pada url yang mengarah ke route bangu datar
app.use(`/room`, bangunRuangRoute_1.default);
// Define addres route of compare
app.use(`/compare`, compareRoute_1.default);
// Defiene addres route of anbk
app.use(`/anbk`, anbkRoute_1.default);
// Define RUNNING port
const PORT = 8000;
// Define START the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
