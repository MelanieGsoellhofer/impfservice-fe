import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfDetailsComponent } from './impf-details.component';

describe('ImpfDetailsComponent', () => {
  let component: ImpfDetailsComponent;
  let fixture: ComponentFixture<ImpfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
