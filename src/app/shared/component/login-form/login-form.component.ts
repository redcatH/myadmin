import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserLoginInputDto } from './UserDto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() userdto:UserLoginInputDto;
  @ViewChild("v",{static:true}) validateForm : FormGroup;
  @ViewChild("load") isLoad:boolean; 
  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      userName:[null,[Validators.required]],
      password:[null,[Validators.required]],
      remember:[true]
    })
  }

 // @Output() valid:boolean=this.validateForm.valid;

  submitForm(): void{
    
  }
}
