import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfListeItemComponent } from './impf-liste-item.component';

describe('ImpfListeItemComponent', () => {
  let component: ImpfListeItemComponent;
  let fixture: ComponentFixture<ImpfListeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfListeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfListeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
