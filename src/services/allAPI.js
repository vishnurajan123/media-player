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

// get video watching history 
export const getHistory= async ()=>{
    // call get http request to http://localhost:4000/history to get all video history in json server return response to videocard component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete video watching history
export const deleteHistory= async (id)=>{
    // call delete http request to http://localhost:4000/history to delete a video history in json server return response to watchhistory component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}


// add category to json server
export const saveCategory= async (body)=>{
   // call post http request to http://localhost:4000/category to add category in json server return response to category component
    return await commonAPI("POST",`${serverURL}/categories`,body)
}

// get category from json server
export const getCategory= async ()=>{
    // call get http request to http://localhost:4000/category to get category from json server return response to category component
     return await commonAPI("GET",`${serverURL}/categories`,"")
 }

 // get category from json server
export const deleteCategory= async (id)=>{
    // call delete http request to http://localhost:4000/category to delete a category from json server return response to category component
     return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
 }

 // update category from json server
export const updateCategory= async (id,body)=>{
    // call put http request to http://localhost:4000/category/id to update a category from json server return response to category component
     return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
 }
 

