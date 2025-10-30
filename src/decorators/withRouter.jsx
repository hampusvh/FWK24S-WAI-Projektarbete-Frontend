import React from "react";
import { MemoryRouter } from "react-router-dom";

const withRouter = (Story, context) => {
    const initialEntries = context.parameters?.router?.initialEntries ?? ["/"];

    return (
        <MemoryRouter initialEntries={initialEntries}>
            <Story {...context} />
        </MemoryRouter>
    );
}

export default withRouter;