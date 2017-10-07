import Rebase from "re-base"
import firebase from "firebase"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDeFKRj78lB01KX1yGMsOtSR_shbBtQzGM",
  authDomain: "menu-f48cc.firebaseapp.com",
  databaseURL: "https://menu-f48cc.firebaseio.com",
});

const base = Rebase.createClass(app.database());

export default base;
