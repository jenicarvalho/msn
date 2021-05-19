import axios from "axios"

const baseApiURL = "/"

const api = axios.create({
  baseURL: baseApiURL
})

export default api
