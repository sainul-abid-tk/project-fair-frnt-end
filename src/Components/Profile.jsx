import React, { useEffect } from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import upload from "../assets/images/upload.png";
import { SERVER_URL } from "../Services/serverUrl";
import { toast } from "react-toastify";
import { updateProfileAPI } from "../Services/allAPIs";

function Profile() {
  const [open, setOpen] = useState(false);
  const [userData,setUserData]=useState({
    username:"",password:"",email:"",github:"",linkedin:"",profileImage:""
  })
  const [existingImage,setExistingImage]=useState("")
  const [preview,setPreview]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const userDetails=JSON.parse(sessionStorage.getItem("user"))
      setUserData({...userData,email:userDetails.email,username:userDetails.username,password:userDetails.password,github:userDetails.github,linkedin:userDetails.linkedin})
      setExistingImage(userDetails.profile)
    }
  },[open])
  

  useEffect(()=>{
    if(userData.profileImage){
      setPreview(URL.createObjectURL(userData.profileImage))
    }else{
      setPreview("")
    }
  },[userData.profileImage])
  console.log(userData);
  const handleProfileUpdate= async()=>{
    const {username,email,password,profileImage,linkedin,github}=userData
    if(!linkedin || !github ){
      toast.warning("Please fill the form completely")
    }else{
      // proceed to api call
      const reqBody=new  FormData()
      reqBody.append("username",username)
      reqBody.append("password",password)
      reqBody.append("email",email)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profileImage",profileImage):reqBody.append("profileImage",existingImage)

      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={
          "Content-Type":preview?"multipart/form-data":"application/json",
          "Authorization":`Bearer ${token}`
        }
        // api call
        
        try{
          const result=await updateProfileAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            setOpen(!open)
            sessionStorage.setItem("user",JSON.stringify(result.data))
          }else{
            console.log(result);
          }
        }catch(err){
          console.log(err);
        }
      }

    }
  }
  return (
    <>
    
      <div className="d-flex rounded p-2 justify-content-between">
        <h3>Profile</h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="btn btn-outline-warning"
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div
            className="row shadow p-3 justify-content-center mt-3"
            id="example-collapse-text"
          >
            <label className="text-center">
              <input onChange={e=>setUserData({...userData,profileImage:e.target.files[0]})} style={{ display: "none" }} type="file" />
              {existingImage==""?<img
                className="border-0 rounded-circle"
                width={"200px"}
                height={"200px"}
                src={preview?preview:upload}
                alt="upload image"
              />:
              <img
                className="border-0 rounded-circle"
                width={"200px"}
                height={"200px"}
                src={preview?preview:`${SERVER_URL}/uploads/${existingImage}`}
                alt="upload image"
              />
              }
            </label>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="GitHub"
                value={userData.github}
                onChange={e=>setUserData({...userData,github:e.target.value})}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="LinkedIn"
                value={userData.linkedin}
                onChange={e=>setUserData({...userData,linkedin:e.target.value})}
              />
            </div>
            <div className="mt-3 text-center d-grid">
              <button onClick={handleProfileUpdate} className="btn btn-warning">Update</button>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Profile;