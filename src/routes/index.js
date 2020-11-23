const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    // en vez de decirle send (el cual responde con string), vamos a responder con json
    // res.json({
    //     "Title": "Respuesta en formato JSON"
    // });
    const data = {
        "name": "Parqvet",
        "mood": "Training code"
    }

    res.json(data);
})

module.exports = router;