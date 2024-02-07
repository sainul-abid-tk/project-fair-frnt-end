import React,{useEffect, useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import uploadImage from '../assets/images/uploadimage.png'
import { SERVER_URL } from '../Services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProject({project}) {
  console.log(project);
  const [show, setShow] = useState(false);
  const [projectData,setProjectData]=useState({
    id:project._id,
    title:project.title,
    language:project.languages,
    overview:project.overview,
    github:project.github,
    website:project.website,
    projectImage:""
  })
  const [previewImage,setPreviewImage]=useState("")
  useEffect(()=>{
    if(projectData.projectImage){
      setPreviewImage(URL.createObjectURL(projectData.projectImage))
    }else{
      setPreviewImage("")
    }

  },[projectData.projectImage])
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setProjectData({
      id:project._id,
    title:project.title,
    language:project.languages,
    overview:project.overview,
    github:project.github,
    website:project.website,
    projectImage:""
    })
    setPreviewImage("")
  }
  const handleUpdate=()=>{
    const {title,language,overview,github,website,projectImage}=projectData
    if(!title || !language || !overview || !github || !website){
      toast.warning("please fill the form completely!!!")
    }else{
      // Api call
      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",language)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      previewImage?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)
      // api call header
      const token =sessionStorage.getItem("token")
      if(token){
        if(previewImage){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          // api call
        }else{
          const reqHeader={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
          // api call
        }
    }
  }
}
  return (
    <>
    <ToastContainer autoClose={3000} theme="colored" position="top-center"/>
    <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit fa-2x overflow-hidden '></i></button>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
            <label className="text-center">
              <input style={{ display: "none" }} type="file" onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})}/>
              <img
                className='w-100'
                src={previewImage?previewImage:`${SERVER_URL}/uploads/${project.projectImage}`}
                alt="upload image"
              />
            </label>
            </div>
            <div className="col-lg-6">
              <div className='mb-3'>
                  <input value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})} type="text" className='form-control' placeholder='Project Title'/>
              </div>
              <div className='mb-3'>
                  <input value={projectData.language} onChange={e=>setProjectData({...projectData,language:e.target.value})} type="text" className='form-control' placeholder='language Used'/>
              </div>
              <div className='mb-3'>
                  <input value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})} type="text" className='form-control' placeholder='Project Github Link'/>
              </div>
              <div className='mb-3'>
                  <input value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})} type="text" className='form-control' placeholder='Project Website Link'/>
              </div>
              <div className='mb-3'>
                  <input value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})} type="text" className='form-control' placeholder='Project Overview'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default EditProject