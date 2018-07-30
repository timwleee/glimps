import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoulComponent } from './seoul.component';

describe('SeoulComponent', () => {
  let component: SeoulComponent;
  let fixture: ComponentFixture<SeoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
