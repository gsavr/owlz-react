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


    getUserById : (id)=>{
        return axios.get(`/api/users/${id}`)
    },
    getPromoterById : (id)=>{
        return axios.get(`/api/promoters/${id}`)
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
    }
}
export default apiCall;