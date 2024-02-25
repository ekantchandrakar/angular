import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTutorialComponent } from './directive-tutorial.component';

describe('DirectiveTutorialComponent', () => {
  let component: DirectiveTutorialComponent;
  let fixture: ComponentFixture<DirectiveTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveTutorialComponent]
    });
    fixture = TestBed.createComponent(DirectiveTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
