/* eslint-disable no-unused-vars */
import { UserList } from "@components";
import { useDispatch } from "react-redux";
import { getallUser } from "@store/slices/userSlice";
import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallUser());
  }, [dispatch]);
  return (
    <>
      <div className=" w-[100%] h-[100vh]  bg-red-500">
        <UserList />
      </div>
      <div className="h-[100vh] bg-green-500">
        <UserList />
      </div>
      <div className="h-[100vh]">
        <UserList />
      </div>
      <div className=" w-[100%] h-[100vh]  bg-red-500">
        <UserList />
      </div>
      <div className="h-[100vh] bg-green-500">
        <UserList />
      </div>
      <div className="h-[100vh]">
        <UserList />
      </div>
    </>
  );
}

export default App;
