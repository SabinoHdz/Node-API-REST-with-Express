const Joi=require('joi');
const id=Joi.string().uuid();
const name=Joi.string();
const userName=Joi.string().min(6);
const email=Joi.string().email();
const image=Joi.string().uri();

const createUsersSchema=Joi.object({
  name:name.required(),
  userName:userName.required(),
  email:email.required(),
  image
});
const updateUsersSchema=Joi.object({
  name,
  userName,
  email,
  image
});

const getUserSchema=Joi.object({
  id:id.required()
});

module.exports={
  createUsersSchema,
  updateUsersSchema,
  getUserSchema
}
