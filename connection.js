const mongoose=require('mongoose');
const dbName='musicapp';
const url=`mongodb+srv://Ibrahim9517:ibrahim876@cluster0.v6ribfu.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
 module.exports=mongoose
