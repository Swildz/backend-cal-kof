require("dotenv").config();

exports.Penjumlahan = async (req, res) => {
  const n1 = parseInt(req.body.numberOne);
  const n2 = parseInt(req.body.numberTwo);
  const cal = n1 + n2;
  return res.send(JSON.stringify({ cal: cal }));
};

exports.Pengurangan = async (req, res) => {
  const n1 = parseInt(req.body.numberOne);
  const n2 = parseInt(req.body.numberTwo);
  const cal = n1 - n2;
  return res.send(JSON.stringify({ cal: cal }));
};

exports.Perkalian = async (req, res) => {
  const n1 = parseInt(req.body.numberOne);
  const n2 = parseInt(req.body.numberTwo);
  const cal = n1 * n2;
  return res.send(JSON.stringify({ cal: cal }));
};

exports.Pembagian = async (req, res) => {
  const n1 = parseInt(req.body.numberOne);
  const n2 = parseInt(req.body.numberTwo);
  const cal = n1 / n2;
  return res.send(JSON.stringify({ cal: cal }));
};

exports.Calculator = async (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      result = Number(num1) / Number(num2);
      break;
    default:
      result = "Operator tidak valid";
  }
  res.json({ result });
};
