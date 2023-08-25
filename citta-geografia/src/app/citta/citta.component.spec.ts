import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CittaComponent } from './citta.component';

describe('CittaComponent', () => {
  let component: CittaComponent;
  let fixture: ComponentFixture<CittaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CittaComponent]
    });
    fixture = TestBed.createComponent(CittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
