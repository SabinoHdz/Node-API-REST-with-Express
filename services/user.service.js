const { faker }=require('@faker-js/faker');
const boom=require('@hapi/boom');
class usersService
{
  constructor (){
    this.users=[];
    this.generator();
  }
  generator(){
    const limit=10;
    for (let i = 0; i < limit; i++) {
        this.users.push({
          id:faker.datatype.uuid(),
          name:faker.name.fullName(),
          userName:faker.internet.userName(),
          email:faker.internet.email(),
          avatar:faker.image.avatar()
        });
    }
  }
  async find(){
    return this.users;
  }
  async findOne(id){
    const findUser=this.users.find(user=>user.id===id);

      if(!findUser){
        throw boom.notFound('product not found');
      }
      return findproduct;
  }
  async create(data){

    const {name,userName,email,avatar}=data;
    const newUser={
      id:faker.datatype.uuid(),
      name,
      userName,
      email,
      avatar
    }
    this.users.push(newUser);
    return newUser;
  }
  async update(id,changes){
    const index=this.users.findIndex(user=>user.id===id);
    if(index===-1){
      //  throw new Error ('product no found-update in users');
      throw boom.notFound('product not found');
    }
    const user=this.users[index];
    this.users[index] ={
      ...user,
      ...changes
    }
    return  this.users[index];
  }
  async delete(id){
    const index=this.users.findIndex(user=>user.id===id);
    if(index===-1){
      throw boom.notFound('product not found');
      //throw new Error ('product no found-deleted in users');
    }else{
        this.users.splice(index,1);
        return {id,message:"item deleted",status:true}
    }
  }
}
module.exports=usersService;
