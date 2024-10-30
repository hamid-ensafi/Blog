import axiosConfig from "@/lib/axiosConfig";

export async function fetchPosts() {
  try {
    const response = await axiosConfig.get("/api/blog", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch posts");
  }
}
