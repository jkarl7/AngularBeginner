import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpStatusComponent } from './http-status.component';

describe('HttpstatusComponent', () => {
  let component: HttpStatusComponent;
  let fixture: ComponentFixture<HttpStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
