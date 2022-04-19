const router = require("express").Router();
const Schema = require("./model");

router.post('/', async (req, res) => {
    const { title } = req.body;

    const data = await Schema.create({
        title
    })
    if (data) {
        res.status(201).json({
            success: true,
            message: "Board sucessfully created",
            data
        })
    } else {
        res.status(404).json({
            success: false,
            message: "Failed to add"
        })
    }
})

router.put('/:id', async (req, res) => {
    const { stage } = req.body;
    const board = await Schema.findById(req.params.id);
    if (board) {
        if (stage <= 3) {
            board.stage = stage || board.stage;
            const update = await board.save();
            res.status(200).json({
                success: true,
                message: "updated sucssfully",
                update
            })
        }
    } else {
        res.status(400).json({
            success: false
        })
    }
})

router.get('/', async(req,res) => {
    const data = await Schema.find()
    res.status(200).json({
        data
    })
})

module.exports = router;