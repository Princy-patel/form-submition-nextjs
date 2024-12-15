import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const getUsersApi = createAsyncThunk("users/allUsers", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const addUserApi = createAsyncThunk("users/addUser", async (data) => {
  try {
    const generatedId = Date.now();
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: generatedId,
        userId: data.userId,
        title: data.title,
        body: data.body,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});

export const deleteUserApi = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
          body: JSON.stringify({
            id,
          }),
        }
      );
      const result = await response.json();
      return id;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  data: [],
  error: null,
  loading: false,
  deleting: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsersApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsersApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsersApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // add users
    builder.addCase(addUserApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addUserApi.fulfilled, (state, action) => {
      console.log("action playload", action.payload);
      state.data.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addUserApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // delete user
    builder.addCase(deleteUserApi.pending, (state, action) => {
      state.deleting = true;
    });
    builder.addCase(deleteUserApi.fulfilled, (state, action) => {
      state.deleting = false;
      state.data = state.data.filter((data) => data.id !== action.payload);
    });
    builder.addCase(deleteUserApi.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
