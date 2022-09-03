function logErrors(err,req,res,next){
  console.log('logErrors: ');
  console.error(err);
  next(err);
}

function errorHadler(err,req,res,next){
  console.log('errorHadler: ');
  console.error(err);
  res.status(500).json({
    message:err.message,
    stack:err.stack
  });
}
function boomErrorHadler(err,req,res,next){
  if(err.isBoom){
    const {output}=err;
    res.status(output.statusCode).json(output.payload);
  }
  console.error(err);
  // res.status(500).json({
  //   message:err.message,
  //   stack:err.stack
  // });
  next(err);
}
module.exports={logErrors,errorHadler,boomErrorHadler};

