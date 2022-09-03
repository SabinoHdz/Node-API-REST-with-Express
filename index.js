const express=require('express');
const { faker }=require('@faker-js/faker');
const routerApi=require('./routes/index.router');
const {logErrors,errorHadler,boomErrorHadler}=require('./middlewares/error.hadler');
const cors=require('cors');
const app=express();
const port=process.env.PORT|| 4000;
//middleware para aceptar respuestas en formato json
app.use(express.json());
const whileList=['http://localhost:8080','https://myapp.com'];
const options={
    origin:(origin,callback)=>{
      if(whileList.includes(origin)||!origin){
        callback(null,true);
      }else{
        callback(new Error('direccion no permitida'));
      }
    }
}
app.use(cors(options));

    //Respues
app.get('/',(req,res)=>{
    res.send('Hola my server en express');
});
app.get('/nueva-ruta',(req,res)=>{
  res.send('soy una nueva ruta');
});
  //aplicar routing
  routerApi(app);
  // Los middlewares de tipo error siempre deben ir después de definir el routing.
  app.use(logErrors);
  app.use(boomErrorHadler);
  app.use(errorHadler);
app.listen(port,()=>{
    console.log('my port'+port);
});
