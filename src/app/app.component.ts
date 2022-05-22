import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  mobile: boolean = false;
  closeIcon: boolean = true;

  closeLeftBar() {
    this.sidenav.mode = 'over';
    this.sidenav.close();
    setTimeout(() => {
      this.closeIcon = !this.closeIcon;
    }, 800);
  }

  openLeftBar() {
    this.sidenav.mode = 'side';
    this.sidenav.open();
    this.closeIcon = !this.closeIcon;
  }

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.mobile = true;
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.mobile = false;
        }
      });

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}