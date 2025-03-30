import { useState } from "react";
import githubService from "../services/githubService";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await githubService.fetchUserData(username);
      onSearch(userData); // Pass data to parent component
      setError("");
    } catch (err) {
      setError(err.message);
      onSearch(null);
    }
  };

  return (
    <>
      <form className="whitespace-nowrap" onSubmit={handleSubmit}>
        <input
          type="text"
          className="r-0 lg:w-full bg-sky-200 w-screen h-14 rounded-l-2xl text-center text-black"
          placeholder="Enter user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-400 h-14 -ml-1 rounded-r-2xl w-16 cursor-pointer"
        >
          search
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </>
  );
}

export default Search;
