import { Component } from '@angular/core';
import {MemoryServiceService} from './services/memory-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the eValentine website';
  public memories = [];
  constructor(
    private memoryService: MemoryServiceService
  ) { }

  ngOnInit(): void {
    this.memories = this.memoryService.getMemories();
  }
}
