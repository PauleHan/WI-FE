import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdAddComponent } from './crowd-add.component';

describe('CrowdAddComponent', () => {
  let component: CrowdAddComponent;
  let fixture: ComponentFixture<CrowdAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
