import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FletchingComponent } from './fletching.component';

describe('FletchingComponent', () => {
  let component: FletchingComponent;
  let fixture: ComponentFixture<FletchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FletchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FletchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
