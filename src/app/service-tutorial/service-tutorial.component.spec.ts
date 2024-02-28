import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTutorialComponent } from './service-tutorial.component';

describe('ServiceTutorialComponent', () => {
  let component: ServiceTutorialComponent;
  let fixture: ComponentFixture<ServiceTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceTutorialComponent]
    });
    fixture = TestBed.createComponent(ServiceTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
