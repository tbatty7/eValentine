import { Component } from '@angular/core';
import {MemoryServiceService} from './services/memory-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: string;
  tasks = [];
  title = 'the eValentine website';
  public memories = [];
  constructor(
    private memoryService: MemoryServiceService
  ) { }

  onClick() {
    this.tasks.push({name: this.task});
    this.task = '';
  }

  ngOnInit(): void {
    this.memories = this.memoryService.getMemories();
  }
}
