import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth.data.model";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable()

export class AuthService {

    isUserAuthenticated: boolean = false;
    authChange = new Subject<boolean>()

    constructor(private router: Router, private fireauth: AngularFireAuth) { }

    registerUser(authData: AuthData, data:any) {
        this.fireauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(res => {
                console.log(res);
                this.isUserAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/list']);
            }).catch(e => {
                console.log(e);
                alert('Invalid User');
            });
    }

    login(authData: AuthData) {
        this.fireauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(res => {
                console.log(res);
                this.isUserAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/list']);
            }).catch(res => {
                console.log(res);
                alert('Invalid User');
            })
    }

    loginOut() {
        this.isUserAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    isAuth() {
        return this.isUserAuthenticated;
    }
}