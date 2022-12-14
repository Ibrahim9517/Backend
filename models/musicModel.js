const {Schema, model}=require('../connection');

const mySchema= new Schema({
   title : String,
   description : String,
   genre : String,
   artist : String,
   lyrics : String,
   album : String,
   year : Number,
   thumbnail:String,
   file:String,
   createdAt : Date
})

  module.exports= model('music', mySchema);