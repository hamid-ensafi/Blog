import axiosConfig from './axiosConfig'; // اطمینان حاصل کنید که مسیر درست است

export async function fetchPosts() {
  try {
    const response = await axiosConfig.get("/api/BlogRoutes", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error(error.message || "Failed to fetch posts");
  }
}