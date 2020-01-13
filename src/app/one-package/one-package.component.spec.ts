import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePackageComponent } from './one-package.component';

describe('OnePackageComponent', () => {
  let component: OnePackageComponent;
  let fixture: ComponentFixture<OnePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
