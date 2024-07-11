import app from "@/lib/firebase/firebaseConfig";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";

export interface AppsState {
  apps: object[];
  appByID: {
    data?: DocumentData;
    id?: string;
  };
  loading: boolean;
  result: object[];
}

const initialState: AppsState = {
  apps: [],
  appByID: {},
  loading: true,
  result: [],
};

interface AppData {
  data: DocumentData;
  id: string;
}
export const fetchAppById = createAsyncThunk<AppData, string>(
  "apps/fetchAppById",
  async (id: string) => {
    const db = getFirestore(app);
    const docRef = doc(db, "apps", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        data: docSnap.data(),
        id: docSnap.id,
      };
    } else {
      throw new Error("No such document!");
    }
  }
);

// Asynchronous thunk to fetch apps from Firestore

export const fetchApps = createAsyncThunk<DocumentData[], void, {}>(
  "apps/fetchApps",
  async () => {
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
  }
);

export const appsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    searchByName: (state, action) => {
      state.result = state.apps.filter((app) =>
        app.data.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log(JSON.stringify(state.result));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchApps.fulfilled,
      (state, action: PayloadAction<DocumentData[]>) => {
        state.apps = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(
      fetchAppById.fulfilled,
      (state, action: PayloadAction<{ data: DocumentData; id: string }>) => {
        state.appByID = action.payload;
        state.loading = false;
      }
    );
  },
});
export const { searchByName } = appsSlice.actions;

// Action creators are generated for each case reducer function
// You can export additional actions if needed
export default appsSlice.reducer;
