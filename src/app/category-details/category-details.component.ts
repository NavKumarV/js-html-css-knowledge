import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoryList } from 'src/assets/data/category-data';
import h from '../../assets/mocks/js.json'

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  categoryList = CategoryList;
  categoryDetails;
  questions = [];
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
      if(data && data.type){
        this.categoryDetails = this.categoryList.find(cat=> data.type === cat.type)
        if(this.categoryDetails){
          this.httpClient.get(`assets/mocks/${this.categoryDetails.type}.json`).toPromise().then((res: any[])=>{
            this.questions = res;
          }).catch(e=>{
            console.log(e);
          })
        }
      }
    })
  }

  ngOnInit(): void {

  }

}
