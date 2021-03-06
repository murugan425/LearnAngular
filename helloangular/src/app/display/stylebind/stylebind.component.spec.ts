import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebindComponent } from './stylebind.component';

describe('StylebindComponent', () => {
  let component: StylebindComponent;
  let fixture: ComponentFixture<StylebindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylebindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylebindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
