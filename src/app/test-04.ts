/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `
                <div class="col-lg-5">
                <h2>Enter your first and last name</h2>
                    <form>
                        <label for="name">Name: </label>
                        <input class="form-control" [(ngModel)]="name" type="text" name="name" id="name"/><br />
                        <label for="lastName">Last Name: </label>
                        <input (focusout)="onFocusOutEvent($event)" [(ngModel)]="lastName" class="form-control" type="text" name="lastName" id="lastName" />
                        <div [(ngModel)]="userName" name="userName" id="userName" ngDefaultControl>{{userName}}</div>
                    </form>
                </div>
                `,
    styles : []
})
export class UserNameComponent {
  
    name: string;
    lastName: string;
    userName: string = 'Test';

    onFocusOutEvent(event: any){

        //console.log(this.name);
        let fName = this.name.toLowerCase();
        let lName = this.lastName.toLowerCase();
        let rdm = Math.floor(Math.random() * 10);

        this.userName = fName + '_' + lName + "_" + rdm;

    }

} 

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ]),
        FormsModule
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};