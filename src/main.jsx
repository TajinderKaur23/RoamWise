import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "leaflet/dist/leaflet.css";
// import { loginSlice } from './store/loginslice.js';

// import { Provider } from 'react-redux';
import App from './App.jsx'
// import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
// const store=configureStore({      //when slicer value want on screen,we take keyname
//   reducer:{
//     loginReducer:loginSlice.reducer         //name:actual slicer ui never call by name,configure tells app(connectwithredux)
//   }                                         //app wants u to use loginslice by name identify
// })

// const store=configureStore({
//   reducer:{
//     loginReducer:loginslice.reducer
//   }
// })


createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
    // <App /> 
//  </Provider>
<BrowserRouter>
<App/>
</BrowserRouter>
)