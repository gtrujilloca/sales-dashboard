import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLoggedComponent } from './base-logged.component';

describe('BaseLoggedComponent', () => {
  let component: BaseLoggedComponent;
  let fixture: ComponentFixture<BaseLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseLoggedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
