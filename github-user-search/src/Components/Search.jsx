function Search() {
  return (
    <>
      <form className="whitespace-nowrap">
        <input
          type="text"
          className=" r-0 lg:w-full bg-sky-200 w-screen h-14 rounded-l-2xl   text-center text-black "
          placeholder="Enter user name"
        />
        <button className="bg-sky-400 h-14 -ml-1 rounded-r-2xl w-16 cursor-pointer ">
          search
        </button>
      </form>
    </>
  );
}
export default Search;
