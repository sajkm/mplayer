import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//uploading video
export const uploadVideo = async (body)=>{
    //call post http request to http://localhost:4000/videos to add video in json server return response to Add Component
    return await commonAPI("POST",`${serverURL}/video`,body)
}

//get all videos
export const getAllVideos = async ()=>{
    //call get http request to http://localhost:4000/videos to get videos response to View Component
    return await commonAPI("GET",`${serverURL}/video`,"")

}

//get a single video 
export const getAVideo=async (id)=>{
   //call get http request to http://localhost:4000/videos/id to get video from json server return response to View component
   return   await commonAPI("GET", `${serverURL}/video/${id}`,"")
}

//delete a single video 
export const deleteAVideo=async (id)=>{
    //call delete http request to http://localhost:4000/videos/id to remove video from json server return response to VideoCard component
    return   await commonAPI("DELETE", `${serverURL}/video/${id}`,{})
}

//store video Watching history to json server
export const addHistory = async (videoHistory)=>{
    //call post http request to http://localhost:4000/history to get all video history in json server return response to videoCard Component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

//store video Watching history to json server
export const getHistory = async ()=>{
    //call get http request to http://localhost:4000/history to get all video history from json server return response to History Component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

//delete video Watching history to json server
export const deleteHistory = async (id)=>{
    //call delete http request to http://localhost:4000/history/id to delete a video history from json server return response to hostory Component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

//add category to json server
export const addCategory = async(body)=>{
//call post http request to http://localhost:4000/categories to add category in json server return response to Category component
return await commonAPI("POST",`${serverURL}/categories`, body )
}

//get category from json server
export const getAllCategory = async()=>{
    //call get http request to http://localhost:4000/categories to get all category from json server return response to Category component
    return await commonAPI("GET",`${serverURL}/categories`, "" )
}

//delete category from json server
export const deleteCategory = async(id)=>{
    //call delete http request to http://localhost:4000/categories/id to remove catgory from json server return response to Category component
    return   await commonAPI("DELETE", `${serverURL}/categories/${id}`,{})
}

//update category from json server
export const updateCategory = async(id,body)=>{
    //call put http request to http://localhost:4000/categories/id to update catgory from json server return response to Category component
    return   await commonAPI("PUT", `${serverURL}/categories/${id}`,body)
}
    