import React from 'react';
import {Router} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import AdminModule from "./modules/admin";
import UserModule from "./modules/user";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {


    return (
        <ChakraProvider>
            {/*<Router history={history}>*/}
            {/*    <UserModule/>*/}
            {/*    <AdminModule/>*/}
            {/*</Router>*/}

        </ChakraProvider>
    );
}

export default App;
