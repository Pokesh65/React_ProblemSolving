import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "mano",
    occupation: "Dev",
    company: "svita",
    age: 0,
}

export const ManoReducer = createSlice({

    name: "Pokesh",
    initialState,

    reducers: {

        add(state) {

            state.name = "Hello Buddy Im mano",
            state.age += 4;


        },
        subb(state) {
            state.company = `svita ${state.age += 5}`

        }
    }


})

export const { add, subb } = ManoReducer.actions
export default ManoReducer.reducer;