import axios from "axios";
import base_url from "./base_url";
import commonApi from "./commonApi";

export const userSignUpApi=async(data)=>{
    return await commonApi(`${base_url}/signup/`,"POST",data,"")
}
export const userSignInApi=async(data)=>{
    return await commonApi(`${base_url}/token/`,"POST",data,"")
}