import axios from "axios";

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Looks like we can't find the user");
    }
    throw new Error("Failed to fetch user data");
  }
};

export default { fetchUserData };
