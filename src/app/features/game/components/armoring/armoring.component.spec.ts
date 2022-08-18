import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoringComponent } from './armoring.component';

describe('ArmoringComponent', () => {
  let component: ArmoringComponent;
  let fixture: ComponentFixture<ArmoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
