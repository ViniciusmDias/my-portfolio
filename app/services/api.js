import axios from "axios"

const api = axios.create({
	baseURL: "https://api.github.com/users/ViniciusmDias",
})
const apiDev = axios.create({
	baseURL: "https://dev.to/api/articles?username=viniciusmdias",
})
export { api, apiDev }
