import { createSlice } from '@reduxjs/toolkit';

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState: {
    isModalOpen: false,
    isModalClosed: false,
    isLoginIn: false,
  },
  reducers: {
    handleOpenModal: (state) => {
      state.isModalOpen = true;
    },
    handleCloseModal: (state) => {
      state.isModalOpen = false;
      state.isModalClosed = true;
    },
    setLogin: (state) => {
      state.isLoginIn = true;
    },
  },
});

export const { handleOpenModal, handleCloseModal, setLogin } =
  loginModalSlice.actions;

export default loginModalSlice.reducer;
