import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesComponent } from './entidades.component';

describe('EntidadesComponent', () => {
  let component: EntidadesComponent;
  let fixture: ComponentFixture<EntidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadesComponent]
    });
    fixture = TestBed.createComponent(EntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
