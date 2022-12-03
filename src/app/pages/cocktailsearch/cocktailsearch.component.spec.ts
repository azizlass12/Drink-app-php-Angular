import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsearchComponent } from './cocktailsearch.component';

describe('CocktailsearchComponent', () => {
  let component: CocktailsearchComponent;
  let fixture: ComponentFixture<CocktailsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
