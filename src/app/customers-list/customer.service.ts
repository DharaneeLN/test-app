import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Name {
  id: number;
  name: string;
}

export const NAMES: Name[] = [
  { id: 100, name: 'Andy Allen' },
  { id: 151, name: 'Ganesh' },
  { id: 2, name: 'Rio' },
  { id: 215, name: 'Mohammed Sheikh' },
  { id: 403, name: 'Santhosh Palani' },
  { id: 5, name: 'Kalyani Pramod' },
  { id: 46, name: 'Alicia Dsouza' },
  { id: 72, name: 'Gopinath' },
  { id: 88, name: 'Padma Rajesh' },
  { id: 19, name: 'White' },
  { id: 170, name: 'Jake' },
  { id: 11, name: 'Kimberely' },
  { id: 122, name: 'Eric' },
  { id: 183, name: 'Scott' },
  { id: 174, name: 'Kylie' },
  { id: 51, name: 'Sam Vishal' }
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
