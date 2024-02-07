import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


// register API
export const registerAPI =async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}
// login API
export const loginAPI =async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}
// addProjectAPI
export const addProjectAPI =async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addproject`,reqBody,reqHeader)
}
// homeprojects API
export const getHomeProjectAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/homeprojects`,"","")
}
// allprojects API
export const getAllProjectAPI =async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/allprojects`,"",reqHeader)
}
// userprojects API
export const getUserProjectAPI =async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/userprojects`,"",reqHeader)
}
