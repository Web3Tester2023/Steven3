import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        isModalWasClosed: false,
    },
    reducers: {
        handleOpenModal: (state) => {
            state.isModalOpen = true
        },
        handleCloseModal: (state) => {
            state.isModalOpen = false
            state.isModalWasClosed = true
        },
    },
})

export const { handleOpenModal, handleCloseModal } = modalSlice.actions

export default modalSlice.reducer
