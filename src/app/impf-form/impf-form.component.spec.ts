import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfFormComponent } from './impf-form.component';

describe('ImpfFormComponent', () => {
  let component: ImpfFormComponent;
  let fixture: ComponentFixture<ImpfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
