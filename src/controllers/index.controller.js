const show = (req, res) => {
    const request = {
      "seler": "Camila",
      "evaluation": [
        {
          "name": "João",
          "tel": "21999558844",
          "note": 5,
          "comment": "gostei!",
        }
      ]
    }
    return res.status(200).json(request);
}

const create = (req, res ) => {
    const {seler, name, tel, note, comment } = req.body;
    

    if(!seler || !name || !tel || !note) {
      return res.status(400).json('seler, name, tel and note is required!');
    }
    
    if(typeof note !== 'number'){
      return res.status(400).json('note must be of the type number!');
    }
    
    return res.status(200).json(req.body);
}

module.exports = { show, create };