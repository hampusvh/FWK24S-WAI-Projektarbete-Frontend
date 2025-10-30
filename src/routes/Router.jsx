import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthGate from "./AuthGate";

export const buildRouter = (routesConfig) => {
    return createBrowserRouter(
        routesConfig.map(({ path, element, layout, needLogin }) => ({
            path,
            element: (
                <AuthGate needLogin={needLogin}>
                    {layout ? React.cloneElement(layout, {}, element) : element}
                </AuthGate>
            ),
        }))
    );
}