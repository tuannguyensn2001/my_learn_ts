import React, {useEffect} from 'react';
import {Router, Switch, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "./apps/store";
import {dispatchMe, dispatchLogin} from "./features/Auth/slice";
import {dispatchCart} from "./features/Cart/slice";
import routes from "./routes";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(state => state.auth.isLoading);

    const handleLogin = async () => {
        const resultAction = await dispatch(dispatchMe());
        if (dispatchMe.fulfilled.match(resultAction)) {
            return resultAction;
        } else {
            throw resultAction;
        }

    }

    useEffect(() => {
        handleLogin()
            .then(() => {
                dispatch(dispatchCart())
            })
    }, []);


    return (
        <ChakraProvider>
            {isLoading && <div>Ngu</div>}
            <Router history={history}>
                <Switch>
                    {routes.map(route => (
                        <Route
                            // @ts-ignore
                            key={route.path}
                            {...route} />
                    ))}
                </Switch>
            </Router>
        </ChakraProvider>
    );
}

export default App;
