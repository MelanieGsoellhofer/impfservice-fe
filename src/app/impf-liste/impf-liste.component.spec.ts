import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfListeComponent } from './impf-liste.component';

describe('ImpfListeComponent', () => {
  let component: ImpfListeComponent;
  let fixture: ComponentFixture<ImpfListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
