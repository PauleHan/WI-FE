import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongGridComponent } from './long-grid.component';

describe('LongGridComponent', () => {
  let component: LongGridComponent;
  let fixture: ComponentFixture<LongGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
