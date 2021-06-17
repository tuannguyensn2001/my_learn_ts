import React, {useEffect} from 'react';
import {Router, Switch, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {useAppDispatch} from "./apps/store";
import {dispatchMe} from "./features/Auth/slice";
import routes from "./routes";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(dispatchMe());
    }, [dispatch])

    return (
        <ChakraProvider>
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
