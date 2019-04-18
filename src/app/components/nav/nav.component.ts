import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from './menu-item';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { Location } from '@angular/common';
import { ToolbarItem } from './toolbar-item';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];

  @ViewChildren('drawer') dc: QueryList<MatSidenav>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  title: string;
  isBackButtonHidden = false;
  isSideMenuHidden = false;
  isProgressBarHidden = true;
  toolbarItems: ToolbarItem[] = [];

  constructor(private breakpointObserver: BreakpointObserver,
    private location: Location,
    private navBarService: NavBarService) {
      this.initNavBar();
  }

  ngOnInit() {
  }

  initNavBar() {
    this.navBarService.titleChange.subscribe(title => {
      this.title = title;
    });

    this.navBarService.isBackButtonHiddenChange.subscribe(isBackButtonHidden => {
      this.isBackButtonHidden = isBackButtonHidden;
    });

    this.navBarService.isProgressBarHiddenChange.subscribe(isProgressBarHidden => {
      this.isProgressBarHidden = isProgressBarHidden;
    });

    this.navBarService.isSideMenuHiddenChange.subscribe(isSideMenuHidden => {
      this.isSideMenuHidden = isSideMenuHidden;
    });

    this.navBarService.toolbarItemsChange.subscribe(toolbarItems => {
      this.toolbarItems = toolbarItems;
    });
  }

  public back() {
    this.location.back();
  }

}
