import app from "@/lib/firebase/firebaseConfig";
import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppsState {
  apps: object[];
}

const initialState: AppsState = {
  apps: [],
};

// Asynchronous thunk to fetch apps from Firestore
export const fetchApps = createAsyncThunk("apps/fetchApps", async () => {
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "apps"));
  const apps: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    const appData = {
      data: doc.data(),
      id: doc.id,
    };
    apps.push(appData);
    // console.log(doc.id, " => ", doc.data());
  });
  return apps;
});

export const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchApps.fulfilled,
      (state, action: PayloadAction<DocumentData[]>) => {
        state.apps = action.payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
// You can export additional actions if needed

export default appsSlice.reducer;
