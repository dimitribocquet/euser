const express = require('express');
const router = express.Router();

const findAllUsersController = require('../controllers/findAllUsers');
const getUserController = require('../controllers/getUser');
const createNewUserController = require('../controllers/createNewUser');
const updateUserController = require('../controllers/updateUser');
const deleteUserController = require('../controllers/deleteUser');

/* GET users. */
router.get('/', findAllUsersController);

/* GET specific user by its ID. */
router.get('/:id', getUserController);

/* POST create a new user. */
router.post('/', createNewUserController);

/* PATCH update the user. */
router.patch('/:id', updateUserController);

/* PATCH delete the user. */
router.delete('/:id', deleteUserController);

module.exports = router;
