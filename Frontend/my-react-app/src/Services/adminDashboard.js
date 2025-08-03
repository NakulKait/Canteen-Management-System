export async function fetchTotalUsers() {
  try {
    const response = await fetch("http://localhost:8080/admin/users");
    if (!response.ok) {
      throw new Error("Failed to fetch total users");
    }
    const data = await response.json();

    console.log("user count",data);
    //return data;
    return data.totalUsers; // expects key: totalUsers
  } catch (error) {
    console.error("Error in fetchTotalUsers:", error);
    return 0;
  }
}



