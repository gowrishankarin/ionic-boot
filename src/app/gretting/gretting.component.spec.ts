import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrettingComponent } from './gretting.component';

describe('GrettingComponent', () => {
  let component: GrettingComponent;
  let fixture: ComponentFixture<GrettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
