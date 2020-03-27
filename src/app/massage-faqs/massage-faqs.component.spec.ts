import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageFaqsComponent } from './massage-faqs.component';

describe('MassageFaqsComponent', () => {
  let component: MassageFaqsComponent;
  let fixture: ComponentFixture<MassageFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
