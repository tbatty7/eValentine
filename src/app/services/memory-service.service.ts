import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MemoryServiceService {
  constructor() { }
  getMemories() {
    const quote3 = 'I enjoy spending time with you physically touching and relaxing with you';
    const quote2 = 'I love how excited you get about the things of God';
    const quote1 = 'I love how affectionate you are';
    const memories = [quote1, quote2, quote3];
    return memories;
  }
}
