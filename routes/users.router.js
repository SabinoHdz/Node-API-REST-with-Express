const express=require('express');
const usersService=require('../services/user.service.js');
const validatorHadler=require('../middlewares/validator.hadler');
const{createUsersSchema,updateUsersSchema,getUserSchema}=require('../schemas/users.schema');
const router=express.Router();
const service=new usersService();
//query parameters
router.get('/',

  async(req,res,next)=>{
    try {
      const users=await service.find();
      res.json(users);
    } catch (error) {
      next(error);
      // res.status(404).json({
      //   message:error.message
      // });
    }

});
router.get('/:id',
  validatorHadler(getUserSchema,'params'),
  async(req,res,next)=>{
    try {
      const {id}=req.params;
      const user=await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
      // res.status(404).json({
      //   message:error.message
      // });

    }

});
router.post('/',
  validatorHadler(createUsersSchema,'body'),
  async (req,res,next)=>{
    try {
      const body=req.body;
      const newUser=await service.create(body);
      res.json({newUser});
    } catch (error) {
      next(error);
      // res.status(404).json({
      //   message:error.message
      // });
    }

});
router.patch('/:id',
  validatorHadler(getUserSchema,'params'),
  validatorHadler(updateUsersSchema,'body'),
  async (req,res)=>{
    try {
      const body=req.body;
      const {id}=req.params;
      const updUser=await service.update(id,body);
      res.json({
        updUser
      });
    } catch (error) {
      next(error);
      // res.status(404).json({
      //   message:error.message
      // });
    }
});

router.delete('/:id',
  validatorHadler(getUserSchema,'params'),
  async(req,res)=>{
    try {
      const {id}=req.params;
      const delUser=await service.delete(id)
      res.json(delUser)
    } catch (error) {
      next(error);
      // res.status(404).json({
      //   message:error.message
      // });
    }
});
module.exports=router;
