import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherServiceTutorialComponent } from './another-service-tutorial.component';

describe('AnotherServiceTutorialComponent', () => {
  let component: AnotherServiceTutorialComponent;
  let fixture: ComponentFixture<AnotherServiceTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherServiceTutorialComponent]
    });
    fixture = TestBed.createComponent(AnotherServiceTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
