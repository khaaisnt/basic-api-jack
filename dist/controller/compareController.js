"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ageComparation = void 0;
// membandingkan 2 umur berdasarkan tanggal lahir
const ageComparation = (req, res) => {
    try {
        const firstPerson = req.body.firstPerson;
        const secondPerson = req.body.secondPerson;
        const firstDob = new Date(firstPerson.dob);
        const secondDob = new Date(secondPerson.dob);
        let message = ``;
        if (firstDob.getTime() > secondDob.getTime()) {
            message = `${secondPerson.name} lebih tua dari ${firstPerson.name}`;
        }
        else if (firstDob.getTime() < secondDob.getTime()) {
            message = `${firstPerson.name} lebih tua dari ${secondPerson.name}`;
        }
        else {
            message = `${firstPerson.name} dan ${secondPerson.name} memiliki umur yang sama`;
        }
        return res.status(200)
            .json({ message });
    }
    catch (error) {
        return res.status(500)
            .json({ message: error });
    }
};
exports.ageComparation = ageComparation;
