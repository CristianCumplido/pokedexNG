import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOthersComponent } from './pokemon-others.component';

describe('PokemonOthersComponent', () => {
  let component: PokemonOthersComponent;
  let fixture: ComponentFixture<PokemonOthersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonOthersComponent]
    });
    fixture = TestBed.createComponent(PokemonOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
