import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Injector,
  ViewChildren
} from '@angular/core';
// import {  RoleCreateOrUpdateDto } from 'src/api/appService';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IdentityRoleUpdateDto } from '../Model/identityModel';
import { NzFormControlComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-role-edit',
  template: `
    <form
      nz-form
      #f="ngForm"
      [formGroup]="validateForm"
      (ngSubmit)="onSubmit()"
    >
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Role Name</nz-form-label>
        <nz-form-control
          #nfc
          nzHasFeedback
          [nzSpan]="12"
          nzErrorTip="RoleName is Required"
          nzWarningTip="please input Role Name"
        >
          <input
            nz-input
            [(ngModel)]="roleDto.name"
            formControlName="name"
            required
            autofocus
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">isDefault</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12">
          <label
            nz-checkbox
            [(ngModel)]="roleDto.isDefault"
            formControlName="isDefault"
            >isDefault</label
          >
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label [nzSpan]="5">isPublic</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12">
          <label
            nz-checkbox
            [(ngModel)]="roleDto.isPublic"
            formControlName="isPublic"
            >isPublic</label
          >
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class RoleEditComponent implements OnInit {
  @ViewChild('v', { static: true }) f: NgForm;
  @ViewChild('vf', { static: true }) validateForm: FormGroup;
  @ViewChild('nfc', { static: true }) nfc: NzFormControlComponent;
  // @Input() title: string;

  @Input() roleDto: IdentityRoleUpdateDto = {};

  i: any = {};

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      isDefault: [],
      isPublic: []
    });
    //It looks like you're using ngModel on the same form field as formControlName.
    // Support for using the ngModel input property and ngModelChange event with
    // reactive form directives has been deprecated in Angular v6 and will be removed
    // in Angular v7.

    // For more information on this, see our API docs here:
    // https://angular.io/api/forms/FormControlName#use-with-ngmodel

    /// https://stackoverflow.com/questions/49918503/angular-6-warning-for-using-formcontrolname-and-ngmodel 解决办法
    //this.validateForm.get('name').value;
    //this.validateForm.get('name').setValue("321");

    // if(!this.validateForm.valid)
    //     this.nfc.nzValidateStatus="warning";
    
  }

  // onSubmit(f: NgForm) {

  //     console.log(f);
  // }
  onSubmit() {}
  ngOnDestroy(): void {}

  updateSingleChecked(event) {
    console.log(event);
  }
}
