import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuppingComponent } from './cupping.component';

describe('CuppingComponent', () => {
  let component: CuppingComponent;
  let fixture: ComponentFixture<CuppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
