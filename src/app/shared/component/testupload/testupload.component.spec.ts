import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestuploadComponent } from './testupload.component';

describe('TestuploadComponent', () => {
  let component: TestuploadComponent;
  let fixture: ComponentFixture<TestuploadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
