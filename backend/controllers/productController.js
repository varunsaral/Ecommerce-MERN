const Product = require("../models/productModel")


exports.createProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(200).json({
         "success":true,
         product    
    })
}

exports.getAllproducts = async (req,res,next)=>{
    const product = await Product.find();
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
}

exports.getProductDetails = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(200).json({
         "success":true,
         product    
    })
}

exports.updateProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

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

exports.deleteProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }


   await product.deleteOne();
   
   res.status(200).json({
    success:true,
    message:"Product deleted succesfully"
    })

}