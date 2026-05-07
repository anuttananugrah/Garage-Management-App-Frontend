import axios from "axios";
import base_url from "./base_url";
import commonApi from "./commonApi";

export const userSignUpApi=async(data)=>{
    return await commonApi(`${base_url}/signup/`,"POST",data,"")
}
export const userSignInApi=async(data)=>{
    return await commonApi(`${base_url}/token`,"POST",data,"")
}

export const addCustomerApi=async(data)=>{
    const headers={
        "content-type":"multipart/form-data",
        "Authorization":`token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/customers/`,"POST",data,headers)
}

export const getCustomers=async()=>{
    const headers={
        "Authorization":`token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}`,"GET",{},headers)
}