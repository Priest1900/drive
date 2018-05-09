import * as firebase from 'firebase';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
export class AuthService {

  canAccess: BehaviorSubject<any>;
  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        res => {
          firebase.auth().onAuthStateChanged(function(user) {
           if (user) {
                this.token = user.uid;
           }
          }
          )}
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.token = user.uid;
      }
    });
    return this.token;
    }

  tokenExist() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.token = user.uid;
      }
    });
  }
}
