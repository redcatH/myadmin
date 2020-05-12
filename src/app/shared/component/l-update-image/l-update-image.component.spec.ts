import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LUpdateImageComponent } from './l-update-image.component';

describe('LUpdateImageComponent', () => {
  let component: LUpdateImageComponent;
  let fixture: ComponentFixture<LUpdateImageComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LUpdateImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LUpdateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
