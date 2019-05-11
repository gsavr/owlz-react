import axios from "axios";

const apiCall = {
    registerUser: (body)=>{
       return axios.post("/api/users/", body)
    }, 
    getUserById : (id)=>{
        return axios.get(`/api/users/${id}`)
    },
    // List of Promoter per City
    getListPromoter : (city)=>{
        return axios.get(`/api/promoters/city/${city}`) 
    },
    // Login User
    loginUser : (body)=>{
        return axios.post(`/api/users/login`,body) 
    }
}
export default apiCall;