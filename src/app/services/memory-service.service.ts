import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryServiceService {

  constructor() { }
  getMemories() {
    return [];
  }
}
