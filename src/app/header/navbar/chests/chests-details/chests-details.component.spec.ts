import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestsDetailsComponent } from './chests-details.component';

describe('ChestsDetailsComponent', () => {
  let component: ChestsDetailsComponent;
  let fixture: ComponentFixture<ChestsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
