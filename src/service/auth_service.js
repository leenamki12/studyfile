import firebase from "firebase";
import fierbaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return fierbaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
