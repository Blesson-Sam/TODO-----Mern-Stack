


const express = require('express');
const router= express.Router();


const {createTodo}=require('../Controllers/createTodo');
const {getTodo}=require('../Controllers/getTodo');
const {updateTodo}=require('../Controllers/updateTodo');
const {deleteTodo}=require('../Controllers/deleteTodo');
router.post('/create',createTodo);
router.get('/get',getTodo);
router.post('/update/:id',updateTodo);
router.delete('/delete/:id',deleteTodo);

module.exports = router