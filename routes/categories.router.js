const express=require('express');
const router=express.Router();

//Categories
router.get('/',(req,res)=>{
  res.json([{
    id:123,
    name:"zapatos"
  },{
    id:234,
    name:"tennis"
  }
]);
});
//Category by id
router.get('/:id',(req,res)=>{
  const {id}=req.params;
  res.json({
    id,
    name:"tennis"
  });
});
router.get('/:categoryId/products/:productId',(req,res)=>{
  const {categoryId,productId}=req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.post('/',(req,res)=>{
  const body=req.body;
  res.json({
    message:"created",
    data:body
  });
});
router.patch('/:id',(req,res)=>{
  const {id}=req.params;
  const body=req.body;
  res.json({
    message:"updated",
    data:body,
    id,
  });
});
router.delete('/:id',(req,res)=>{
  const {id}=req.params;
  res.json({
    message:"deleted",
    id,
  });
});
module.exports=router;
