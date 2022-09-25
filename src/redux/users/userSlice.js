import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload);
    },
    toogleStatus: (state, { payload }) => {
      const userIndex = state.users.findIndex(user => user.id === payload);
      const status = state.users[userIndex].status === 'yes' ? 'no' : 'yes';
      state.users[userIndex] = {
        ...state.users[userIndex],
        status,
      };
    },
  },
});

export const { addUser, deleteUser, toogleStatus } = usersSlice.actions;
export default usersSlice.reducer;
