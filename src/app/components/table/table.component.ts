import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { ToolbarItem } from '../nav/toolbar-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  toolbarItems: ToolbarItem[] = [
    { action: () => this.add(), icon: 'add'}
  ]

  constructor(private navBarService: NavBarService,
    private router: Router) {
    this.navBarService.initRootComponent('Table');
    this.navBarService.setToolbarItems(this.toolbarItems);
  }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort);
  }

  add() {
    this.router.navigate(['table', 'add']);
  }
}
