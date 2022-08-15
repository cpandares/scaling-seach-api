

import { Route, Navigate,Routes } from 'react-router-dom';
import App from '../App';
import UserPage from '../layouts/UserPage';

const Router = () => {
    return (
        <Routes>    
            <Route  path="/" element={<App />}></Route>
            <Route  path = "/user/:login" element = { <UserPage /> } ></Route>
            <Route  path='/*' element={ <Navigate to="/" />}></Route>
           
         </Routes>
    );
};

export default Router;