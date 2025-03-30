import { useState } from "react";
import githubService from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
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
      </form>

      {isLoading && (
        <p className="mt-4 text-center text-gray-600">Loading...</p>
      )}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {userData && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {userData.name || userData.login}
            </h2>
            {userData.bio && (
              <p className="mt-2 text-gray-600 text-center">{userData.bio}</p>
            )}
            <a
              href={userData.html_url}
              className="mt-4 px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
            <div className="mt-4 flex gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Followers</p>
                <p className="font-bold text-black">{userData.followers}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Following</p>
                <p className="font-bold text-black">{userData.following}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Repositories</p>
                <p className="font-bold text-black">{userData.public_repos}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
