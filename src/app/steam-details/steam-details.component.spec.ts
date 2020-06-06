import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamDetailsComponent } from './steam-details.component';

describe('SteamDetailsComponent', () => {
  let component: SteamDetailsComponent;
  let fixture: ComponentFixture<SteamDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
