import React, { useEffect, useState } from 'react'
import { Modal,Button,Form, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { deleteCategory, getAVedio, getCategory, saveCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [allCategory,setAllCategory]=useState([])
  const [categoryName,setCategoryName]=useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory= async ()=>{
    if(categoryName){
      const body={
        categoryName,allCideos:[]
      }
      // make api call
      const response=await saveCategory(body)
      if(response.status>=200 && response.status<300){
        handleClose()
        setCategoryName("")
        // call handleGetCategory
        handleGetCategory()
      }
      else{
        toast.error("uploading error perform the operation after some time")
      }

    }
    else{
      toast.info("Please fill the form ")
    }
  }
  const handleGetCategory= async ()=>{
    // make api call
    const {data}=await getCategory()
    setAllCategory(data)
    
  }
const handleDeleteCategory=async (id)=>{
  // make api call
  await deleteCategory(id)
  // get all category
  handleGetCategory()
}
  useEffect(()=>{
    handleGetCategory()
  },[])

  const dragOver =(e)=>{
    console.log("Draging over the Category");
    e.preventDefault()
  }
  const videoDropped=async (e,categoryId)=>{
    console.log("Inside category id: "+categoryId);
    const videocardId=e.dataTransfer.getData("cardId")
    console.log("Videi card id:"+videocardId);
    // get details of to be dropped
    const {data}=await getAVedio(videocardId)
    const selectedCategory=allCategory.find(item=>item.id===categoryId)
    selectedCategory.allCideos.push(data)
    // console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    handleGetCategory()
  }

  return (
    <div>
<div className='d-grid mt-4'>
  
        <button onClick={handleShow} className='btn btn-dark'>Add new Ctegory</button>
        
</div>
      {
        allCategory?.length>0?allCategory?.map(item=>(
          <div className="border mt-3 mb-3 p-3 rounded" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDropped(e,item?.id)}>
            <div className="d-flex justify-content-between align-items center">
              <h6>{item?.categoryName}</h6>
              <button onClick={()=>handleDeleteCategory(item?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            {
              item?.allCideos&&
              <Row>
                {
                  item?.allCideos?.map(card=>(
                    <Col sm={12}>
                      <VideoCard displayData={card} insideCategory={true}/>
                    </Col>
                  ))
                }
              </Row>
            }
          </div>
        )):<p className='fw-bolder mt-3 fs-5 text-danger'>No Category Added</p>

        
      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form/>
        <Form.Label>Enter Category name</Form.Label>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Enter Category name"
            onChange={(e)=>setCategoryName(e.target.value)}
           
          />

          
        </Form.Group>
        <Form/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      
      />


    </div>
  )
}

export default Category