import React, {ReactChild, ReactChildren} from 'react';
import {Container} from "@mui/material";
import Header from "../Header/Header";

interface ILayout {
    children: ReactChild | ReactChildren;
}

const Layout = ({children}: ILayout) => {
    return (
        <>
            <Header/>
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout;