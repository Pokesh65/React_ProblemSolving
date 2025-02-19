import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {ManoReducer} from './ManoReducer.jsx'


const store1=configureStore({
  reducer:{
    "mano":ManoReducer,
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store1}>
    <App/>
    </Provider>
  </StrictMode>,
)
