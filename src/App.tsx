import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {PathRouter} from "./types/route";
import {isAuth} from "./api/network";
import ContactsPage from "./pages/ContactsPage";
import PrivateRoute from './utils/PrivateRoute';
import ContactForm from "./components/Forms/ContactForm/ContactForm";
import AddEditContact from "./pages/AddEditContact";

const App = () => {
    return (
        <Router>
            <Routes>
                {!isAuth && <Route path={PathRouter.home} element={<LoginPage/>}/>}

                <Route path={PathRouter.home} element={<PrivateRoute outlet={<ContactsPage/>}/>}/>
                <Route path={PathRouter.addContact} element={<PrivateRoute outlet={<AddEditContact/>}/>}/>
                <Route path={PathRouter.editContact + "/:id"} element={<PrivateRoute outlet={<AddEditContact/>}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
