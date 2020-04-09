import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricecard';
  card1 = {
    plan:"Free",
    price:0,
    avlfeatures:[{name:"Single User",mute:false},
    {name:"5GB Storage",mute:false},
    {name:"Unlimited Public Projects",mute:false},
    {name:"Community Access",mute:false},{name:"Unlimited Private Projects",mute:true},
    {name:"Dedicated Phone Support",mute:true},
    {name:"Free Subdomain",mute:true},
    {name:"Monthly Status Reports",mute:true}]


  }

  card2 = {
    plan:"Plus",
    price:9,
    avlfeatures:[{name:"5 Users",mute:false,bold:true},
      {name:"50GB Storage",mute:false},
      {name:"Unlimited Public Projects",mute:false},
      {name:"Community Access",mute:false},{name:"Unlimited Private Projects",mute:false},
      {name:"Dedicated Phone Support",mute:false},
      {name:"Free Subdomain",mute:false},
      {name:"Monthly Status Reports",mute:true}],
     


  }

  card3 = {
    plan:"Pro",
    price:49,
    avlfeatures:[{name:"Unlimited Users",mute:false,bold:true},
    {name:"150GB Storage",mute:false},
    {name:"Unlimited Public Projects",mute:false},
    {name:"Community Access",mute:false},{name:"Unlimited Private Projects",mute:false},
    {name:"Dedicated Phone Support",mute:false},
    {name:"Unlimited Free Subdomains",mute:false,bold:true},
    {name:"Monthly Status Reports",mute:false}]
    

  }
}
