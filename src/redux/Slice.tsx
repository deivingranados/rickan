import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RickanCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

interface stateRickan {
  RickanCharecter?: RickanCharacter[];
  isLoading: boolean;
}

const initialState: stateRickan = {
  isLoading: false,
};

const RikanSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    test: (state) => {
      state.isLoading = false;
    },
    list: (state, action: PayloadAction<RickanCharacter[]>) => {
      state.RickanCharecter = action.payload;
    },
  },
});

export const { list, test } = RikanSlice.actions;

export default RikanSlice.reducer;
