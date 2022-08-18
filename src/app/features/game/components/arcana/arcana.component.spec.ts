import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcanaComponent } from './arcana.component';

describe('ArcanaComponent', () => {
  let component: ArcanaComponent;
  let fixture: ComponentFixture<ArcanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
