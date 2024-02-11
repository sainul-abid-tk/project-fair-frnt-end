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
export const getAllProjectAPI =async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/allprojects?search=${searchKey}`,"",reqHeader)
}
// userprojects API
export const getUserProjectAPI =async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/userprojects`,"",reqHeader)
}
// editproject API
export const editProjectAPI =async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/project/edit/${id}`,reqBody,reqHeader)
}
// deleteproject API
export const deleteProjectAPI =async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/project/remove/${id}`,{},reqHeader)
}
// edituser API
export const updateProfileAPI =async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/user/edit`,reqBody,reqHeader)
}

