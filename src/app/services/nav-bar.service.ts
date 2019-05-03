import { Injectable, EventEmitter } from '@angular/core';
import { ToolbarItem } from '../components/nav/toolbar-item';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private title: string;
  public titleChange: EventEmitter<string> = new EventEmitter<string>();

  private isSideMenuHidden = false;
  public isSideMenuHiddenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private isBackButtonHidden = false;
  public isBackButtonHiddenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private isProgressBarHidden = true;
  public isProgressBarHiddenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private toolbarItems: ToolbarItem[] = [];
  public toolbarItemsChange: EventEmitter<ToolbarItem[]> = new EventEmitter<ToolbarItem[]>();


  constructor() { }

  initRootComponent (title: string) {
    this.setTitle(title);
    this.setBackButtonHidden(true);
    this.setToolbarItems([]);
  }

  initComponent (title: string) {
    this.setTitle(title);
    this.setBackButtonHidden(false);
    this.setToolbarItems([]);
  }

  setTitle(title: string) {
    this.title = title;
    this.titleChange.emit(this.title);
  }

  setToolbarItems(toolbarItems: ToolbarItem[]) {
    this.toolbarItems = toolbarItems;
    this.toolbarItemsChange.emit(this.toolbarItems);
  }

  setSideMenuHidden(hide: boolean) {
    this.isSideMenuHidden = hide;
    this.isSideMenuHiddenChange.emit(this.isSideMenuHidden);
  }

  setBackButtonHidden(hide: boolean) {
    this.isBackButtonHidden = hide;
    this.isBackButtonHiddenChange.emit(this.isBackButtonHidden);
  }

  setProgressBarHidden(hide: boolean) {
    this.isProgressBarHidden = hide;
    this.isProgressBarHiddenChange.emit(this.isProgressBarHidden);
  }
}
