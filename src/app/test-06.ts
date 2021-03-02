/**
 * Fix the following component so that it meets the requirements:
 * * The [textarea] becomes a user inputed property.
 * * The content that user inputs will preserve its whitespaces and linebreaks when printed under the [review_content] property
 * * It should not allow rendering of html tags to prevent a security vulnerability (keep the inner text however)
 * * If the user enters a link in the content (ex : https://wallethub.com) it should become an anchor element when printed in the page 
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `
                <div class="col-lg-6">
                <h2>User Review:</h2>
                <textarea (keyup)="onKey($event)" class="textfield form-control" placeholder="Write your Review" [value]="review_input"></textarea>
                <br/><br/>
                <h3>Output:</h3>
                <div class="output" [innerHTML]="review_content"></div>
                </div>
                `,
    styles : [
        `.textfield {
            width: 600px;
            height: 220px;
            padding: 10px;
            box-sizing: border-box;
        }`,
        `.output { 
            max-width: 100%;
            width: 600px;
            border: solid 1px #f9f6f6;
            padding: 5px;
            background: #ecebeb; 
        }`
    ]
})
export class ReviewComponent {
    // sample input
    review_input:string = "";

    review_content = "";

    values = '';

    ngOnInit() {
        this.review_content = this.review_input;
    }

    onKey(event: any) {
        if(event.key == "Enter"){
            let res = event.target.value;
            this.review_input = res + "<br>";
            //this.review_content = event.target.value;
        }else if(event.key == " "){
            let resSp = event.target.value;
            this.review_input = resSp + "&nbsp;";
        }else if(event.key == "<"){
            let resSp = event.target.value.slice(0, -1);
            this.review_input = resSp.slice(0, -1);
            
        }else{
            this.review_content = this.verifyUrl(event.target.value);
        }
        
        
        
        //console.log(event.key);
    }

    verifyUrl(text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function(url) {
          return '<a href="' + url + '">' + url + '</a>';
        })
      }

}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : ReviewComponent
            }
        ])
    ],
    declarations : [ReviewComponent]
})
export class ReviewModule {};