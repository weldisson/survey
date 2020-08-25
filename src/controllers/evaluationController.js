const evaluationModel = require('../models/evaluationModel');

const show = async (req, res) => {
  const evaluations = await evaluationModel.find();
  return res.status(200).json(evaluations);
}

const create = async (req, res ) => {
  const {seller, name, phone, note, comment } = req.body;

  if(!seller || !name || !phone || !note) {
    return res.status(400).json('seller, name, phone and note is required!');
  }

  if(typeof note !== 'number'){
    return res.status(400).json('note must be of the type number!');
  }

  await evaluationModel.create({
    "seller": seller,
    "evaluation": [
      {
        "name": name,
        "phone": phone,
        "note": note,
        "comment": comment,
      }
    ]
  });

  return res.status(200).json("Criado com sucesso!");   

}

module.exports = { show, create }