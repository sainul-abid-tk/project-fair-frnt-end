import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from "../Services/allAPIs";
function Auth({ insideRegister }) {
  const navigate=useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister=async(e)=>{
    e.preventDefault()
    const {username,email,password}=userData
    if(!username || !email || !password){
      toast.warning("Please fill the form completely!")
    }
    else{
      const result=await registerAPI(userData)
      if(result.status===200){
        toast.success(`${result.data.username} has registered successfully!!!`)
        setUserData({
          username: "",
          email: "",
          password: "",
        })
        setTimeout(() => {
          navigate('/login')
        }, 3000);
      }else{
        toast.warning(result.response.data)
      }
    }
  }
  
  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userData
    if(!email || !password){
      toast.info("Please fill the form completely!!!")
    }
    else{
      try{
        const result=await loginAPI({email,password})
        console.log(result);
        if(result.status===200){
          sessionStorage.setItem("username",result.data.existingUser.username)
          sessionStorage.setItem("token",result.data.token)
          setUserData({email:"",password:""})
          navigate('/')
        }
        else{
          toast.warning(result.response.data)
          setUserData({email:"",password:""})
        }
      }catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <ToastContainer autoClose={3000} theme="colored" position="top-center"/>
      <div className="container w-75">
        <Link to={"/"}>
          <i class="fa-solid fa-arrow-left"></i> Back to Home
        </Link>
        <div className="card shadow p-5 bg-success">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/application-login-4438907-3726717.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-bolder text-white mt-2">
                  <i class="fa-brands fa-stack-overflow fa-bounce overflow-hidden "></i>
                  Project Fair
                </h1>
                <h4 className="fw-bolder mt-2 pb-3 text-white">
                  {insideRegister
                    ? "Sign up to your Account"
                    : "Sign In to your Account"}
                </h4>
                <Form className="w-75">
                  {insideRegister && (
                    <Form.Group className="mb-3" controlId="formBasicUser">
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                        value={userData.username}
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      value={userData.email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                      value={userData.password}
                    />
                  </Form.Group>
                  {insideRegister ? (
                    <div>
                      <button onClick={e=>handleRegister(e)} className="btn btn-info mb-2">Register</button>
                      <p>
                        Already have an account? Click here to{" "}
                        <Link className="text-warning fw-bolder" to={"/login"}>
                          Login
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <button onClick={e=>handleLogin(e)} className="btn btn-info mb-2">Login</button>
                      <p>
                        New User? Click here to{" "}
                        <Link
                          className="text-warning fw-bolder"
                          to={"/register"}
                        >
                          Register
                        </Link>
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
