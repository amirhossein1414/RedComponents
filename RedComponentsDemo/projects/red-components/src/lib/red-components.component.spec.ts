import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedComponentsComponent } from './red-components.component';

describe('RedComponentsComponent', () => {
  let component: RedComponentsComponent;
  let fixture: ComponentFixture<RedComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
