import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../ui/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {useContext, useState} from "react";
import {login} from "../ui/auth";
import {AuthContext} from "../store/auth-context";
import {Alert} from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signInHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication error', 'Please check your credentials')
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Data being processed...'/>
  }

  return <AuthContent isLogin onAuthenticate={signInHandler}/>;
}

export default LoginScreen;
