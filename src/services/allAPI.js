import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// uploading video
export const uploadVideo=async (body)=>{
    // call post http request to http://localhost:4000/videos to add video in json server return response to Add Component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}


// get all videos
export const getAllVideos=async ()=>{
    // call get http request to http://localhost:4000/videos to add video in json server return response to Add Component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}


// get a single videos
export const getAVedio=async (id)=>{
    // call get http request to http://localhost:4000/videos to add video in json server return response to Add Component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a video
export const deleteAVideo=async (id)=>{
    // call get http request to http://localhost:4000/videos to add video in json server return response to Add Component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store video watching history to json server 
export const addHistory= async (videoHIstory)=>{
    // call post http request to http://localhost:4000/history to add video history in json server return response to videocard component
    return await commonAPI("POST",`${serverURL}/history`,videoHIstory)
}

// store video watching history to json server 
export const getHistory= async ()=>{
    // call get http request to http://localhost:4000/history to get all video history in json server return response to videocard component
    return await commonAPI("GET",`${serverURL}/history`,"")
}