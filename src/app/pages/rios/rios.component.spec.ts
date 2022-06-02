import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiosComponent } from './rios.component';

describe('riosComponent', () => {
  let component: RiosComponent;
  let fixture: ComponentFixture<RiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
