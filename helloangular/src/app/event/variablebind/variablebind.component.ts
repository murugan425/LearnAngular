import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variablebind',
  template: ` <br/>
    <input #username (keyup.enter) = "onKeyEnterParam(username.value)"/>
    <input [value] = "email" (keyup.enter) = "email =$event.target.value; onKeyEnterBind()"/>
    <input [(ngModel)] = "mobilenum" (keyup.enter) = "onKeyEnterAngBind()"/>
  `,
  styleUrls: ['./variablebind.component.css']
})
export class VariablebindComponent implements OnInit {

  // The three inputs are using different ways of binding mechanism
  // The third input is very simple to implement by using angular forms.
  // Don't forget to import the Forms Module - Refer angular.module.ts

  username = 'defaultuser';
  email = 'defaultval@mail.com';
  mobilenum = 909000000;

  constructor() { }

  ngOnInit() {
  }

  onKeyEnterParam(usernameVal) {
    console.log(this.username  + '   ' + usernameVal);
  }

  onKeyEnterBind() {
    console.log(this.email);
  }

  onKeyEnterAngBind() {
    console.log(this.mobilenum);
  }
}
