import {
  state,
  style,
  transition,
  trigger,
  animate,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('open', [
      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(100%)' })),
      transition('show<=>hide', animate('1s ease-in-out')),
    ]),
  ],
})
export class HomepageComponent implements OnInit {
  opened = 'close';

  @HostListener('window:scroll')
  onScroll() {
    if (this.opened === 'close') return;
    this.opened = 'close';
  }

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.opened = message));
  }
}
