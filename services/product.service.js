const { faker }=require('@faker-js/faker');
const boom=require('@hapi/boom');
class ProductsService{
  constructor(){
    this.products=[];
    this.generate();
  }
  generate(){

    const limit =10;
    for (let i = 0; i < limit; i++) {
       this.products.push({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:parseInt(faker.commerce.price(),10),
        image:faker.image.imageUrl(),
        isBlock:faker.datatype.boolean(),
      });
    }

  }

  async create(data){
    const {name,price,image}=data
    const newProduct={
     id:faker.datatype.uuid(),
     name,
     price,
     image
    }
    this.products.push(newProduct);
    return newProduct;

  }
  async find(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.products);
      },5000);
    });

  }
  async findOne(id){

    const  findproduct= this.products.find(product=>product.id===id);
    if(!findproduct){
      throw boom.notFound('product not found');
    }else if(findproduct.isBlock){
      throw boom.conflict('product is block');
    }
    return findproduct;
  }
  async update(id,changes){
    const index=this.products.findIndex(product=>product.id===id);
    if(index===-1){
      // throw new Error ('product no found-update');
      throw boom.notFound('product not found');
    }
      const dataProduct=this.products[index];
        this.products[index]={
          ...dataProduct,
          ...changes
        };
        return this.products[index];

  }
  async delete(id){
    const index=this.products.findIndex(product=>product.id===id);
    if(index===-1){
      throw boom.notFound('product not found');
    }else{
        this.products.splice(index,1);
        return {id,message:"item deleted",status:true}
    }
  }
}
module.exports=ProductsService;
