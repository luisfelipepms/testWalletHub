/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div class="col-lg-12">
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{monthly_payment}} <br/>
                    <b>Late Payment Fee : {{late_payment}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount:number = 526;
    monthly_payment;
    late_payment;

    constructor(){
        if(this.loan_amount == 0 || !this.loan_amount){
            this.monthly_payment = "N/A";
            this.late_payment = "N/A";
        }else{
            this.monthly_payment = "$" + (this.loan_amount * 0.02).toFixed(2).replace(".", ",");
            this.late_payment = "$" + ((this.loan_amount * 0.02) * 0.05).toFixed(2).replace(".", ",");
        }
    }
}

@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}