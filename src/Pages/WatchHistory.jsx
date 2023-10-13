import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'
function WatchHistory() {
  const [deleteSpecificistory,setDeleteSpecificHistory]=useState(false)
  const [history,setHistory]=useState([])
  const getAllwatchHistory=async ()=>{
    // make api call
    const {data}=await getHistory()
    setHistory(data)
    console.log(data);
  }

  useEffect(()=>{
    setDeleteSpecificHistory(false)
    getAllwatchHistory()
  },[deleteSpecificistory])
  console.log(history);

  const removeHistory= async (id)=>{
    // make api call
    const response=await deleteHistory(id)
    setDeleteSpecificHistory(true)
    
  
  }

  return (
   <p>
      <div className='d-flex justify-content-between container mt-5'>
        <h1>Watch history</h1>
        <Link to={'./home'} style={{textDecoration:"none"}}>Back to home</Link>
      </div>
      <div className='mt-5 container'>
        <table style={{width:"100%",margin:"20px"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time stamp</th>
            </tr>
          </thead>
          <tbody>
            {
              history?.length>0?
              history?.map((item,index)=>(
                <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><Link to={item?.embedlink} target='_blank'>{item?.embedlink}</Link></td>
              <td>{item?.timeStamp}</td>
              <td><button onClick={()=>removeHistory(item?.id)} className='btn'><div className="fa-solid fa-trash text-danger"></div></button>
        </td>
            </tr>
              ))
              :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p>

            }
          </tbody>
          
        </table>
      </div>
   </p>
  )
}

export default WatchHistory