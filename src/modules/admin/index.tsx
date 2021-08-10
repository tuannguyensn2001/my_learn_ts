import React from "react";
import {Switch, Route} from "react-router-dom";

import routesAdminModule from "./routes";

function AdminModule() {


    return (
        <Switch>

            {routesAdminModule.map(route => (
                <Route
                    // @ts-ignore
                    key={route.path}
                    {...route} />
            ))}
        </Switch>
    )
}

export default AdminModule;