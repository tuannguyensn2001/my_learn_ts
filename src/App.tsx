import React, {Suspense} from 'react';
import {Router} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import AdminModule from "./modules/admin";
import UserModule from "./modules/user";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {


    return (
        <ChakraProvider>
            <Router history={history}>
                <Suspense fallback={<div>Loading</div>}>
                    <UserModule/>
                    <AdminModule/>
                </Suspense>
            </Router>

        </ChakraProvider>
    );
}

export default App;
