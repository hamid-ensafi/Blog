

export async function login(username, password) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred during login");
    }

    const data = await response.json(); 
    return data; 
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}
