import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider , useLocation} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Terms from './screens/Terms/Terms';
import Disclaimer from './screens/Disclaimer/Disclaimer';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';


const Home = React.lazy(() => import('./screens/Home/Home'));

const MissionScreen = React.lazy(() =>
  import('./screens/Mission/Mission')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'mission-statement',
        element: <MissionScreen />,
      },
      {
        path: 'terms-of-service',
        element: <Terms />,
      },
      {
        path: 'disclaimer',
        element: <Disclaimer />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
