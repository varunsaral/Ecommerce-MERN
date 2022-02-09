const Product = require("../models/productModel");
const ErrorHandler = require("../utlis/errorhandler");
const catchAsynError = require("../middleware/catchAsyncError");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utlis/apiFeatures");

exports.createProduct = catchAsynError(async (req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(200).json({
         "success":true,
         product    
    })
})

exports.getAllproducts = catchAsyncError(async (req,res,next)=>{
   const apiFeature = new ApiFeatures(Product.find(),req.query).search()
   const product = await apiFeature.query
  //  const product = await Product.find();
    if(product.length == 0) {
        return res.status(200).json({
            "success":true,
            "message":"No products to show"   
       })
    }
    res.status(200).json({
         "success":true,
         product    
    })
})

exports.getProductDetails = catchAsynError(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("product not found",404));
    }

    res.status(200).json({
         "success":true,
         product    
    })
})

exports.updateProduct = catchAsynError( async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product) return next(new ErrorHandler("product not found",404));

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}
)
exports.deleteProduct = catchAsynError(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product) return next(new ErrorHandler("product not found",404));

   await product.deleteOne();
   
   res.status(200).json({
    success:true,
    message:"Product deleted succesfully"
    })

})