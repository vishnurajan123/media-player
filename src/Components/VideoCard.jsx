import React, { useState } from 'react'
import {  Card,Modal } from 'react-bootstrap'
import { addHistory, deleteAVideo } from '../services/allAPI';



function VideoCard({displayData,setDeleteSpecificVideo,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{
    setShow(true);
   //get caption and and link
   const {caption,embedlink}=displayData 
   // generate timestamp
   let today=new Date()
   const timeStamp= new Intl.DateTimeFormat("en-US",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
   // watch video to add json server
   let reqBody={
     caption,embedlink,timeStamp
   }
   // make api call
   await addHistory(reqBody)
   }
  // delete a video 
const removeVedio= async (id)=>{
  // make api call
  const response=await deleteAVideo(id)
  setDeleteSpecificVideo(true)

}

const dragStarted=(e,id)=>{
  console.log("Drag started");
  e.dataTransfer.setData("CardId",id)
}

  return (
    <>
    {
      displayData &&
      <Card className='mb-4' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img style={{height:"180px"}} onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>

{        insideCategory?"":  <button onClick={()=>removeVedio(displayData?.id)} className='btn'><div className="fa-solid fa-trash text-danger"></div></button>
}        
        </Card.Title>
        
      </Card.Body>
    </Card>
    }
   

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption} frameborder="0" allowFullScreen></iframe>

        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard