import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../ui/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    const token = await createUser(email, password);
    authCtx.authenticate(token);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='User being created...'/>
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
