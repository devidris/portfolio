import { Component, OnInit } from '@angular/core';
import {
  state,
  style,
  transition,
  trigger,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('move', [
      state(
        'start',
        style({
          transform: 'translate({{xi}}%,{{yi}}%)',
        }),
        { params: { xi: 0, yi: 0 } }
      ),
      state(
        'end',
        style({
          transform: 'translate({{xi}}%,{{yi}}%)',
        }),
        { params: { xi: 0, yi: 0 } }
      ),
      transition('end<=>start', [animate('500ms')]),
    ]),
  ],
})
export class AboutMeComponent implements OnInit {
  constructor() {}
  x: number = 0;
  y: number = 0;
  i: number = 0;
  xi: number = 0;
  yi: number = 0;
  move: string = '';

  // Generates numbers depending on how you move your mouse
  hovered(e: any) {
    if (this.x > e.screenX) this.xi += 2;
    if (this.x < e.screenX) this.xi -= 2;
    if (this.y > e.screenY) this.yi += 2;
    if (this.y < e.screenY) this.yi -= 2;

    this.x = e.screenX;
    this.y = e.screenY;

    this.move = 'start';
  }

  // Reset the xi and yi
  unHovered() {
    this.xi = 0;
    this.yi = 0;
    this.move = 'end';
  }

  ngOnInit(): void {}
}
