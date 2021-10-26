import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Sauron' },
      { id: 12, name: 'Walter White' },
      { id: 13, name: 'Joker' },
      { id: 14, name: 'Hans Landa' },
      { id: 15, name: 'Freddy Krueger' },
      { id: 16, name: 'Majin Bu' },
      { id: 17, name: 'Scar' },
      { id: 18, name: 'Anton Chigurh' },
      { id: 19, name: 'Lex Luthor' },
      { id: 20, name: 'Myotismon' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
