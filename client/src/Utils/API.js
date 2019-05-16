import axios from "axios";

const apiCall = {
    // Register User
    registerUser: (body)=>{
       return axios.post("/api/users/", body)
    }, 
    // Register Promoter
    registerPromoter: (body)=>{
        return axios.post("/api/promoters/", body)
     },
    
    // Find User By Id
    getUserById : (id)=>{
        return axios.get(`/api/users/${id}`)
    },
    // Find Promoter By Id
    getPromoterById : (id)=>{
        return axios.get(`/api/promoters/${id}`)
    },

    // Update User by Id
    UpdateUser:(id,body)=>{
        return axios.put(`/api/users/${id}`, body)
    },

    Updatepromoter:(id,body)=>{
        return axios.put(`/api/promoters/${id}`, body)
    },

    // List of Promoter per City
    getListPromoter : (city)=>{
        return axios.get(`/api/promoters/city/${city}`) 
    },
    // Login User
    loginUser : (body)=>{
        return axios.post(`/api/users/login`,body) 
    },
    // Login User
    loginPromoter : (body)=>{
        return axios.post(`/api/promoters/login`,body) 
    },

    // create Message
    createMessage: (body)=>{
        return axios.post("/api/messages/", body)
     },

     // Get Message By Id
     getMessageById : (id)=>{
        return axios.get(`/api/messages/${id}`)
    },

    // Put Message By Id
    putMessageById : (id, body)=>{
        return axios.put(`/api/messages/${id}`, body)
    },
}
export default apiCall;