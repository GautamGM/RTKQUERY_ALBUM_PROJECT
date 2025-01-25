import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "@/ApiInstance/apiInstace";


export const getallUser=createAsyncThunk("user/fetch",async(data,thunkApi)=>{
    try{
        const res= await apiInstance.get("/user")
    return res.data
    }catch(err){
        throw  thunkApi.rejectWithValue(err)
    }
})

const userSlice=createSlice({
    name:"user",
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
   extraReducers(builder){
    builder
    .addCase(getallUser.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(getallUser.fulfilled,(state,action)=>{
        state.data=action.payload,
        state.isLoading=false
    })
    .addCase(getallUser.rejected,(state,action)=>{
        state.error=action.payload
    })
   }
})
export const userReducer=userSlice.reducer;