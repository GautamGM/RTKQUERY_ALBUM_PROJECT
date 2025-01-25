import axios from "axios";

const apiInstace=axios.create({
    baseURL:"http://localhost:3001"
})
export default apiInstace