import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshiatsuComponent } from './ashiatsu.component';

describe('AshiatsuComponent', () => {
  let component: AshiatsuComponent;
  let fixture: ComponentFixture<AshiatsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshiatsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshiatsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
