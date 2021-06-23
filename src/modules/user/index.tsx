import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../apps/store";
import {dispatchMe} from "./features/Auth/slice";
import {dispatchCart} from "./features/Cart/slice";
import routesUserModule from "./routes";

function UserModule() {
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
        <Switch>
            {routesUserModule.map(route => (
                <Route
                    // @ts-ignore
                    key={route.path}
                    {...route} />
            ))}
        </Switch>
    )
}

export default UserModule;