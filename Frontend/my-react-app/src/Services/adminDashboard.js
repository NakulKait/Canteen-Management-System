import axios from "axios"

const BASE_URL = "http://localhost:8080/admin";

export async function fetchTotalUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    
    //return data;
    return response.data.totalUsers; // expects key: totalUsers
  } catch (error) {
    console.error("Error in fetchTotalUsers:", error);
    return 0;
  }
}

export async function fetchTotalOrders()
{

  try {
        const response=await axios.get(`${BASE_URL}/orders`);
        return response.data.totalOrders;
  }
  catch(error)
  {
    console.error("error in fetchToatalOrders",error)
    return 0;
  }



}



