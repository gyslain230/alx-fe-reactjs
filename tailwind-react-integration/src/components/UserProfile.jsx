function UserProfile() {
  return (
    <div
      className="user-profile"
      class="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8  sm:max-w-xs md:max-w-sm hover:shadow-xl "
    >
      <img
        src="https://picsum.photos/id/237/200/300"
        alt="User"
        class="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 class="text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500">
        John Doe
      </h1>
      <p class="text-gray-600 text-base sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
