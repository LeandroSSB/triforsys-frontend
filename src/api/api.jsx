import axios from "axios";

export default axios.create({
  baseURL: "",
  transformRequest: [(data, headers) => {
    const token = JSON.parse(localStorage.getItem("@triforsys:token")) || ""
    // headers["Content-Type"] = "application/json"
    if(token){
      headers.Authorization = `Bearer ${token}`
    }
    return data
  },...axios.defaults.transformRequest]
})