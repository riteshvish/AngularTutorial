import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceworkerComponent } from './serviceworker.component';

describe('ServiceworkerComponent', () => {
  let component: ServiceworkerComponent;
  let fixture: ComponentFixture<ServiceworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
