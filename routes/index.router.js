const express=require('express');
const productsRouter =require('./products.router');
const categoriesRouter=require('./categories.router');
const usersRouter=require('./users.router');

function routerApi(app) {
  const route=express.Router();
  app.use('/api/v1',route);
  route.use('/products',productsRouter);
  route.use('/users',usersRouter);
  route.use('/categories',categoriesRouter);
  //forma sencialla de hacer versiones
  // app.use('/api/v1/products',productsRouter);
  // app.use('/api/v1//users',usersRouter);
  // app.use('/api/v1//categories',categoriesRouter);
}

module.exports=routerApi;
