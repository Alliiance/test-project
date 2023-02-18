import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePageComponent } from './inline-page.component';

describe('InlinePageComponent', () => {
  let component: InlinePageComponent;
  let fixture: ComponentFixture<InlinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
