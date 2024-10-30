import axiosConfig from "@/lib/axiosConfig";

export async function fetchDetail(id) {
  try {
    const response = await axiosConfig.get(`/api/detail?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch posts");
  }
}
