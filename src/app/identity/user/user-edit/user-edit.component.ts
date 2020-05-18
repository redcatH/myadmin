import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdentityUserDto } from '../../Model/userModel';
import { UserService } from '../../store/user.service';
import { RolePrivateProxyService } from '../../identityApi';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  position: NzTabPosition = 'top';
  @ViewChild('useredit', { static: true }) validateForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private userService: UserService,
    // private roleService:RolePrivateProxyService
    ) {}
  // @Input() id?: string;
  passwordVisible = false;

  checkOptionsOne:any[];

  @Input() rolesCheckboxData:any[]=[];
  // @Input() rolesChecked:string[]=[];
  @Input() userDto?: IdentityUserDto = {};

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null],//[/*Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$")]],
      email: [null, [Validators.required]]
    });
    if(this.userDto.userName)
      this.initUser();
  }

  initUser(){
      this.validateForm.setValue({
        userName: this.userDto.userName,
        email: this.userDto.email,
        password: ''
      });
  }

  log(e){

  }

  
}
