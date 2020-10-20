import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtarjetaCreditoComponent } from './listtarjeta-credito.component';

describe('ListtarjetaCreditoComponent', () => {
  let component: ListtarjetaCreditoComponent;
  let fixture: ComponentFixture<ListtarjetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtarjetaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
