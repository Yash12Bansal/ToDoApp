// ROUTER FOR DETAILS PAGE

const express=require('express');

const router=express.Router();

const detailsController=require('../controller/details_controller');

router.get('/',detailsController.d);

router.post('/create-todo',detailsController.createtodo);

module.exports=router; 





