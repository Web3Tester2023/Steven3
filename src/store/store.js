import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import modalReducer from './modalSlice'
import loginModalReducer from './loginModalSlice'
import calculatorReducer from './calculatorSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    loginModal: loginModalReducer,
    calculator: calculatorReducer,
  },
})
