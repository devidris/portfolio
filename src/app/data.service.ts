import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject<string>('close');
  private backgroundSource = new BehaviorSubject<string>('#fff');

  currentMessage = this.messageSource.asObservable();
  currentBackground = this.backgroundSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeBackground(background: string) {
    this.backgroundSource.next(background);
  }
}
