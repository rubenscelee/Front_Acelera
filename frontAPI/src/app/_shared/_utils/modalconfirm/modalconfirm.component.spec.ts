import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalconfirmComponent } from './modalconfirm.component';

describe('ModalconfirmComponent', () => {
  let component: ModalconfirmComponent;
  let fixture: ComponentFixture<ModalconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalconfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
