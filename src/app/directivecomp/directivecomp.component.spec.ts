import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivecompComponent } from './directivecomp.component';

describe('DirectivecompComponent', () => {
  let component: DirectivecompComponent;
  let fixture: ComponentFixture<DirectivecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
