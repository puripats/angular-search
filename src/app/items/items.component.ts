import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs'
import { ItemsService } from '../service/items.service';
import { HttpClient } from '@angular/common/http';
import {Hero} from '../hero'



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent implements OnInit {

  searchText='';

  results:Hero[];
  constructor(private ItemsService: ItemsService) { }

  ngOnInit() {
    this.getResults()

    //alert("Test")
  }

  getResults(): void {
    this.ItemsService.getResults()
    .subscribe(results => this.results = results)


  }
}
