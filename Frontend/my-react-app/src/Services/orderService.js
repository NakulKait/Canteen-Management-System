import axios from "axios"

const BASE_URL = "http://localhost:8085/orders";
export const placeOrderAPI=(orderPayload)=>{
    return axios.post(`${BASE_URL}/add`,orderPayload)
}