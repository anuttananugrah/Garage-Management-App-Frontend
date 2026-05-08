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

export const getCustomersByIdApi=async(id)=>{
    const headers={
        "Autherization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/customers/${id}/`,"GET",{},headers)
}



export const addCustomerServicesApi=async(id,data)=>{
    const headers={
        "Autherization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/customers/${id}/addservice/`,"POST",data,headers)
}

export const getCustomerServicesApi=async(id)=>{
    const headers={
        "Autherization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/customers/${id}/servicelist/`,"GET",{},headers)
}

// service status updation

export const serviceStatusUpdateApi=async(id,data)=>{
    const headers={
        "Autherization":`Token ${sessionStorage.getItem('token')}`
    }
    return await commonApi(`${base_url}/service/${id}/`,"PATCH",data,headers)

}