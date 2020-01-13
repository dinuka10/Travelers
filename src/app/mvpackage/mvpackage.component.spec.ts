import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MVPackageComponent } from './mvpackage.component';

describe('MVPackageComponent', () => {
  let component: MVPackageComponent;
  let fixture: ComponentFixture<MVPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MVPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MVPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
