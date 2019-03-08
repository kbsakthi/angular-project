import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiptoolComponent } from './tiptool.component';

describe('TiptoolComponent', () => {
  let component: TiptoolComponent;
  let fixture: ComponentFixture<TiptoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiptoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiptoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
