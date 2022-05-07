import {Navigate} from "react-router-dom";
import {isAuth} from "../api/network";
import Layout from "../components/Common/Layout/Layout";

type PrivateRouteProps = {
    outlet: JSX.Element;
};

export default function PrivateRoute({outlet}: PrivateRouteProps) {
    return (isAuth) ? (
        <Layout>
            {outlet}
        </Layout>
    ) : (
        <Navigate to={{pathname: '/'}}/>
    );
};