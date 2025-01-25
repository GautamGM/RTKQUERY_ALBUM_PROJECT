import { useSelector } from "react-redux";
const UserList = () => {
  // Access the user data from the Redux store
  const { data } = useSelector((state) => state.user);

  // Handle Add Album button click
  const handleAddAlbum = (userId) => {
    console.log(`Add album for user ID: ${userId}`);
    // Add your album logic here
  };
console.log(data,"data of theiser")
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User List</h1>
      <div className="space-y-4">
        {data && data.length > 0 ? (
          data.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-md"
            >
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => handleAddAlbum(user.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add Album
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users available.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;