import axios from "axios";

const apiCall = {
    registerUser: (body)=>{
       return axios.post("/api/users/", body)
    }, 
    getUserById : (id)=>{
        return axios.get(`/api/users/${id}`)
    }
}
export default apiCall;