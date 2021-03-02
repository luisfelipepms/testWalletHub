/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `<div class="col-lg-12">
                    <form #signupForm="ngForm" (ngSubmit)="onSubmit(signupForm.value)">
                        <h2>Login</h2>
                        <br/>
                        <input class="form-control" type="email" value="{{email}}" [(ngModel)]="email" name="email" />
                        <div style="color: red;" name="errorEmail" *ngIf="errorEmail" [(ngModel)]="errorEmail" ngDefaultControl>{{errorEmail}}</div>
                        <br/>
                        <input class="form-control" type="password" value="{{password}}" [(ngModel)]="password" name="password" />
                        <div style="color: red;" name="errorPassword" *ngIf="errorPassword" [(ngModel)]="errorPassword" ngDefaultControl>{{errorPassword}}</div>
                        <button type="submit">Submit</button>
                        <br/><br/>
                        <div name="logged_in" *ngIf="logged_in" [(ngModel)]="logged_in" ngDefaultControl>Logged In!</div>
                    </form>
                </div>
                `
})
export class Test03Component {

    // email:string = "";
    // password:string = "";

    logged_in = false;
    errorEmail = "";
    errorPassword = "";
    onSubmit(data){
        if(!data.email){
            //alert("Digite o email");
            this.errorEmail = "Inform an e-mail address";
            this.logged_in = false;
        }else if(!data.password){
            this.errorPassword = "Inform a password";
            this.logged_in = false;
        }else if(!data.email.endsWith("@a.com")){
            this.errorEmail = "Inform a valid e-mail address";
            this.logged_in = false;
        }else if(!this.checkPassword(data.password)){
            this.errorPassword = "Inform a valid password";
            this.logged_in = false;
        }else{
            this.errorEmail = "";
            this.errorPassword = "";
            this.logged_in = true;
        }

        
    }

    checkPassword(str){
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ]),
        FormsModule
    ],
    declarations : [Test03Component]
})
export class Test03Module {};