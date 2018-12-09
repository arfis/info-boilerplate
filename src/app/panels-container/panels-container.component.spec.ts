import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsContainerComponent } from './panels-container.component';

describe('PanelsContainerComponent', () => {
  let component: PanelsContainerComponent;
  let fixture: ComponentFixture<PanelsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
