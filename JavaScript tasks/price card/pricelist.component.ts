import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent implements OnInit {
@Input() cardDetails ;
  constructor() { }

  ngOnInit(): void {
  }

}
