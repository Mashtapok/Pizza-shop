const {Router} = require('express');
const Pizza = require('../models/Pizza');
const router = Router();

// /api/pizzas/
router.get('/', async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.json(pizzas);
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
});

module.exports = router;