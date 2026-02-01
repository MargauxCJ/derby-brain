import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontLib } from './front-lib';

describe('FrontLib', () => {
  let component: FrontLib;
  let fixture: ComponentFixture<FrontLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontLib],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
