import { UserList } from "@components"
import { useDispatch } from "react-redux"
import { getallUser } from "@store/slices/userSlice"
import { useEffect } from "react"
function App() {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getallUser())
},[dispatch])
  return (
   <>
   <div>
    <UserList/>
   </div>
   </>
  )
}

export default App
