import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  titlePage: string;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let obj = this;
    this.route
      .queryParams
      .subscribe(params => {
        obj.titlePage = params['p'] || '';
      });

       

  }

}
