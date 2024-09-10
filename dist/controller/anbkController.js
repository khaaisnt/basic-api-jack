"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countAverage = void 0;
const countAverage = (req, res) => {
    try {
        // read request data
        const nilai = req.body.nilai;
        // count average
        for (let index = 0; index < nilai.length; index++) {
            nilai[index].nilaiRerata = (nilai[index].nilaiLiterasi + nilai[index].nilaiNumerasi) / 2;
        }
        // mapping array for select nama and nilaiRerata
        const result = nilai.map((item) => {
            let { nama, nilaiRerata } = item;
            return { nama, nilaiRerata };
        });
        return res.status(200)
            .json(result);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
};
exports.countAverage = countAverage;
