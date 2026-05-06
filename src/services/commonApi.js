import axios from "axios"


const commonApi=async(reqUrl,reqMethod,reqBody,reqHeaders)=>{
    const config={
    url:reqUrl,
    method:reqMethod,
    data:reqBody,
    headers:reqHeaders?reqHeaders:{"Content-type":"Application/json"}
    }
    try{
        return await axios(config)
    }
    catch(err){
        return err;

    }
    }

export default commonApi