import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantEditOrUpdateComponent } from './tenant-edit-or-update.component';

describe('TenantEditOrUpdateComponent', () => {
  let component: TenantEditOrUpdateComponent;
  let fixture: ComponentFixture<TenantEditOrUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantEditOrUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantEditOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
