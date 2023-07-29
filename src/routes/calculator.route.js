const express = require("express");
const router = express.Router();
const {
    Penjumlahan,
    Pengurangan,
    Pembagian,
    Perkalian,
    Calculator
} = require("../controllers/calculator.controller");

/**
 * LOGIN API
 */
router.post("/add", Penjumlahan);
router.post("/red", Pengurangan);
router.post("/div", Pembagian);
router.post("/mul", Perkalian);
router.post("/cul", Calculator);
module.exports = router;
