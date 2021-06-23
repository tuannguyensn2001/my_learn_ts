import React, {useEffect} from 'react';
import {Router, Switch, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "./apps/store";
import AdminModule from "./modules/admin";
import UserModule from "./modules/user";
import {dispatchMe, dispatchLogin} from "./modules/user/features/Auth/slice";
import {dispatchCart} from "./modules/user/features/Cart/slice";
import routes from "./routes";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {


    return (
        <ChakraProvider>
            <Router history={history}>
                <UserModule/>
                <AdminModule/>
            </Router>
        </ChakraProvider>
    );
}

export default App;
