import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the search logic
    console.log("Searching for:", username);
    // You might want to pass the username to a parent component
    // or fetch data from an API here
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
      </form>
    </>
  );
}

export default Search;
