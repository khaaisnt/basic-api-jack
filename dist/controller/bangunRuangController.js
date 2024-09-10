"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ballVolume = exports.cubeVolume = exports.coneVolume = exports.tubeVolume = void 0;
// fungsi volume bangun ruang tabung
const tubeVolume = (req, res) => {
    try {
        const r = Number(req.body.r);
        const t = Number(req.body.t);
        const volume = Math.PI * r * r * t;
        return res.status(200).json({
            message: `Volume of tube has counted`,
            volume: volume,
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.tubeVolume = tubeVolume;
// fungsi volume bangun ruang kerucut
const coneVolume = (req, res) => {
    try {
        const r = Number(req.body.r);
        const t = Number(req.body.t);
        const volume = (1 / 3) * Math.PI * r * r * t;
        return res.status(200).json({
            message: `Volume of cone has counted`,
            volume: volume,
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.coneVolume = coneVolume;
// fungsi volume bangun ruang kubus
const cubeVolume = (req, res) => {
    try {
        const s = Number(req.body.s);
        const volume = s * s * s;
        return res.status(200).json({
            message: `Volume of cube has counted`,
            volume: volume,
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.cubeVolume = cubeVolume;
// fungsi volume bangun ruang bola
const ballVolume = (req, res) => {
    try {
        const r = Number(req.body.r);
        const volume = (4 / 3) * Math.PI * r * r * r;
        return res.status(200).json({
            message: `Volume of ball has counted`,
            volume: volume,
        });
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.ballVolume = ballVolume;
