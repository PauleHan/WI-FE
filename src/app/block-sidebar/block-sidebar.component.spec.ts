import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSidebarComponent } from './block-sidebar.component';

describe('BlockSidebarComponent', () => {
  let component: BlockSidebarComponent;
  let fixture: ComponentFixture<BlockSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
