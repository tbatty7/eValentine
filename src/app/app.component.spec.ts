import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MemoryServiceService} from './services/memory-service.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let memoryService: MemoryServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
      memoryService = TestBed.get(MemoryServiceService);
    }
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'eValentine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('the eValentine website');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Welcome to the eValentine website!');
  });

  it('should display quotes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    spyOn(memoryService, 'getMemories').and.returnValue(['First', 'Second', 'Third'])
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.quote').length).toBe(3);
  });

  it('should submit quotes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.task = 'thought';
    app.onClick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.memory').length).toBe(1);
  });
});
