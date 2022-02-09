class ApiFeatures {
    constructor(query,queryStr){
        this.query = query
        this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.name?{
            name:{
                $regex:this.queryStr.name,
                $options :"i"
            }
        }:{};
        console.log(keyword)
        this.query = this.query.find({...keyword})
        return this;
    }

    filter(){

        const queryCopy  = {...this.query};
        

    }


}   

module.exports = ApiFeatures