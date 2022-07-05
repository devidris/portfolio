import { DataService } from './../data.service';
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
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('g_0101', [
      state('hero_01', style({ opacity: 1 })),
      transition(
        ':enter',
        animate(
          '2s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0102', [
      state('hero_01', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        ':enter',
        animate(
          '3s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0103', [
      state('hero_01', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        ':enter',
        animate(
          '3s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(50%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0104', [
      state('hero_01', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        ':enter',
        animate(
          '3s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-50%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0105', [
      state('hero_01', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        ':enter',
        animate(
          '3s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 0.7, transform: 'translateX(10%)', offset: 0.7 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0106', [
      state('hero_01', style({ opacity: 1 })),
      transition(
        ':enter',
        animate(
          '3s 5s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0107', [
      state('hero_01', style({ opacity: 1 })),
      transition(
        ':enter',
        animate(
          '4s 3s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0108', [
      state('hero_01', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        ':enter',
        animate(
          '3s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: 0, transform: 'translateY(-20.5%)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateY(-5%)', offset: 0.9 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0109', [
      state('hero_01', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        ':enter',
        animate(
          '3s 1.1s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-150%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_01010', [
      state('hero_01', style({ opacity: 1, transform: 'scaleX(1)' })),
      transition(
        ':enter',
        animate(
          '2s 6.5s',
          keyframes([
            style({ opacity: 0, transform: 'scaleX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'scaleX(1)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_01011', [
      state('hero_01', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        ':enter',
        animate(
          '2s 4s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(10%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_01012', [
      state('hero_01', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        ':enter',
        animate(
          '2s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(50%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_01013', [
      state('hero_01', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        ':enter',
        animate(
          '3s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(150%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
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
    trigger('g_0201', [
      state('hero_02', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        '*=>hero_02',
        animate(
          '.7s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0202', [
      state('hero_02', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        '*=>hero_02',
        animate(
          '.5s .8s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-200%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0203', [
      state('hero_02', style({ opacity: 1 })),
      transition(
        '*=>hero_02',
        animate(
          '4s 1.5s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0204', [
      state('hero_02', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        '*=>hero_02',
        animate(
          '.5s 1.5s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0205', [
      state('hero_02', style({ opacity: 1 })),
      transition(
        '*=>hero_02',
        animate(
          '1s 2s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0206', [
      state('hero_02', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        '*=>hero_02',
        animate(
          '1s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
     trigger('g_0207', [
      state('hero_02', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(
        '*=>hero_02',
        animate(
          '1s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0208', [
      state('hero_02', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        '*=>hero_02',
        animate(
          '1s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0209', [
      state('hero_02', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition(
        '*=>hero_02',
        animate(
          '1s 2s',
          keyframes([
            style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ])
        )
      ),
    ]),
    trigger('g_0210', [
      state('hero_02', style({ opacity: 1 })),
      transition(
        '*=>hero_02',
        animate(
          '2s 3s',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class HeroComponent implements OnInit {
  x: number = 0;
  y: number = 0;
  i: number = 0;
  xi: number = 0;
  yi: number = 0;
  move: string = 'end';
  hero: string = 'hero_02';

  constructor() {}

  // Gernate positive and negative number
  generate(sign: number) {
    return `${100 * sign}`;
  }
  // Generates numbers depending on how you move your mouse
  hovered(e: any) {
    if (this.i === 0) {
      this.x = e.screenX;
      this.y = e.screenY;
      this.i++;
      return;
    }

    if (this.x > e.screenX) this.xi += 1.1;
    if (this.x < e.screenX) this.xi -= 1.1;
    if (this.y > e.screenY) this.yi += 1.1;
    if (this.y < e.screenY) this.yi -= 1.1;

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

  // Toggling from one hero to another
  changeHero(heroPosition: string, calc: string | null = null) {
    if (calc === 'add') {
      let heroNumber = this.hero[this.hero.length - 1];
      if (heroNumber === '1') {
        heroNumber = '2';
        this.hero = `hero_0${heroNumber}`;

        return;
      }
      if (heroNumber === '2') {
        heroNumber = '3';
        this.hero = `hero_0${heroNumber}`;

        return;
      }
      if (heroNumber === '3') {
        heroNumber = '1';
        this.hero = `hero_0${heroNumber}`;

        return;
      }
    }

    if (calc === 'sub') {
      let heroNumber = this.hero[this.hero.length - 1];
      if (heroNumber === '1') {
        heroNumber = '3';
        this.hero = `hero_0${heroNumber}`;

        return;
      }
      if (heroNumber === '2') {
        heroNumber = '1';
        this.hero = `hero_0${heroNumber}`;

        return;
      }
      if (heroNumber === '3') {
        heroNumber = '2';
        this.hero = `hero_0${heroNumber}`;

        return;
      }
    }
    this.hero = heroPosition;
  }

  ngOnInit(): void {}
}
