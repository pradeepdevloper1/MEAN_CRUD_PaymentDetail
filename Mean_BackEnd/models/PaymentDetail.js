var mongoose =require('mongoose');
var PaymentDetail=mongoose.model('PaymentDetails',{
    //PMId :{type:Number},
    CardOwnerName :{type:String},
    CardNumber :{type:String},
    ExpirationDate :{type:String},
    CVV :{type:String}
});
module.exports={PaymentDetail};