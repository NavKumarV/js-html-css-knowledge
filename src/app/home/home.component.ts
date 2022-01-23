import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryList } from 'src/assets/data/category-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryList = CategoryList;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openCategory(type){
    this.router.navigate(['category-details',type]);
  }

}
