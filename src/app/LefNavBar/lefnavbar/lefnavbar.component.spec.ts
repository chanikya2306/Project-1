import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LefnavbarComponent } from './lefnavbar.component';

describe('LefnavbarComponent', () => {
  let component: LefnavbarComponent;
  let fixture: ComponentFixture<LefnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LefnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LefnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
