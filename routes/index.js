const express=require('express');

const router=express.Router();

const indexController=require('../controller/index_controller');

router.get('/',indexController.home);



router.use('/details',require('./details'));
router.use('/delete',require('./delete'));

//router.use('/routerName',require('./routerFile'));


module.exports=router; 





