import React from "react"
import { AuthProps, privateRoute } from "../components/private_route";
import { AuthToken } from "../services/auth_token";

type Props = AuthProps;

function Dashboard({ auth }: Props) {
  return (
    <div>
    <p><strong>user</strong>: {auth.decodedToken.email}</p>
    <p><strong>isValid</strong>: {auth.isValid.toString()}</p>
    <p><strong>isExpired</strong>: {auth.isExpired.toString()}</p>
    <p><strong>authorizationString</strong>: {auth.authorizationString}</p>
    <p><strong>expiresAt</strong>: {auth.expiresAt.toString()}</p>
    </div>
  );
}

export default privateRoute(Dashboard);