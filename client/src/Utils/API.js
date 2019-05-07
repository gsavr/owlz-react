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
        console.log(city);
        return axios.get(`api/listpromoter/${city}`) 

    }
}
export default apiCall;