import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Name {
  id: number;
  name: string;
}

export const NAMES: Name[] = [
  { id: 0, name: 'Andy Allen' },
  { id: 1, name: 'Ganesh' },
  { id: 2, name: 'Rio' },
  { id: 3, name: 'Mohammed Sheikh' },
  { id: 4, name: 'Santhosh Palani' },
  { id: 5, name: 'Kalyani Pramod' },
  { id: 6, name: 'Alicia Dsouza' },
  { id: 7, name: 'Gopinath' },
  { id: 8, name: 'Padma Rajesh' }
];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getDummyNamesList(): Observable<Name[]> {
    const heroes = of(NAMES);
    return heroes;
  }
}
