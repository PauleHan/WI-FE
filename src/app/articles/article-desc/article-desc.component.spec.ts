import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDescComponent } from './article-desc.component';

describe('ArticleDescComponent', () => {
  let component: ArticleDescComponent;
  let fixture: ComponentFixture<ArticleDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
