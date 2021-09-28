import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalProps: number;
  @Input() limitProps: number;
  @Input() urlProps: string;
  @Input() currentPageProps: number;
  public pagesCount: number;
  public pages: number[];
  constructor(private utilsService: UtilsService, private router: Router) { }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, 50); //this.pagesCount
  }
  routerTo(page: number): void {
    this.router.navigate([`/${this.urlProps}`], { queryParams: { page } });
  }

}
