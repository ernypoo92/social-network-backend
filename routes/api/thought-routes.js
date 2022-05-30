const router = require('express').Router();
const { 
    getAllThought, 
    getThoughtById, 
    updateThought, 
    createThought, 
    deleteThought,
    createReaction,
    removeReaction 
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThought)

router.route('/:userId').post(createThought)

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

router.route('/:thoughtId/reactions').put(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;