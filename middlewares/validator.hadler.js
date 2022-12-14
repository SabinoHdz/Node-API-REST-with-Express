const boom=require('@hapi/boom');
function validatorHadler(schema,property){
  console.log('validator: ');
  return(req,res,next)=>{
    const data=req[property];
    const {error}=schema.validate(data,{abortEarly:false});
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}
module.exports=validatorHadler;
