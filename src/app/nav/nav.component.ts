import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() background = '';
  logo = 'assets/my-logo.svg';

  navigationLinks: any[] = [
    { name: 'Home', link: '/', active: false },
    { name: 'About Me', link: 'about-me', active: false },
    { name: 'Blog', link: 'blog', active: false },
    { name: 'Portfolio', link: 'portfolio', active: false },
  ];

  constructor(private router: Router, private data: DataService) {}

  open() {
    this.data.changeMessage('open');
  }
  ngOnInit(): void {
    this.background === 'hero_02'
      ? (this.logo = 'assets/my-logo-white.svg')
      : (this.logo = 'assets/my-logo.svg');

    this.navigationLinks.forEach((navigationLink) => {
      if (navigationLink.link === this.router.url) {
        navigationLink.active = true;
      }
    });
  }
}
