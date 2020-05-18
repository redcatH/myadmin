import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TenantUpdateDto, TenantCreateDto } from '../../Model/tenantModel';

@Component({
  selector: 'app-tenant-edit-or-update',
  templateUrl: './tenant-edit-or-update.component.html',
  styleUrls: ['./tenant-edit-or-update.component.scss']
})
export class TenantEditOrUpdateComponent implements OnInit {
  options:string="update";
  tenantDto: TenantUpdateDto = {};
  tenantCreateDto: TenantCreateDto = {};
  @ViewChild('vf', { static: true }) validateForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {


    if (this.tenantDto.name) {
      this.validateForm = this.fb.group({
        name: [null, [Validators.required]]
      });
      this.validateForm.setValue({
        name: this.tenantDto.name
      });
    } else {
      this.validateForm = this.fb.group({
        name: [null, [Validators.required]],
        adminEmailAddress:[null, [Validators.required]],
        adminPassword:[null, [Validators.required]]
      });
  
    }
  }
}
