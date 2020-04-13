import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
  
})
export class CategoryComponent implements OnInit {
name ;

  constructor(/*private activatedroute:ActivatedRoute*/) {
    //alert(this.activatedroute.snapshot.params.id)
    //this.category = this.activatedroute.snapshot.params.id
   }

  ngOnInit(): void {
   /* this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.category = this.activatedroute.snapshot.params.id
      console.log(this.activatedroute.snapshot.params.id)
      if(this.category == "mobiles")
    this.name = "samsung";
    else if(this.category == "fashion")
    this.name ="Shirt";
      //business logic what changes you want on the page with this new data.
  });*/
  }
 
  
  proddetails=[
    
    {
      id:"mobile1",
      category:"mobiles",
      name:"samsung s8",
      price : "INR 60,000",
      imgsrc : "https://png2.cleanpng.com/sh/ccbad6766f4bad85ffb40cd6a692a90b/L0KzQYm3V8E3N5p0gZH0aYP2gLBuTgNidaR6htk2Z3HvccnCTgM6NaRmheVAbnewd7Lzggh6NaQ9Rd94YnnvdX7AjCJtbF54UZ95bIX2PYbpVPQ2a5NofNQDYUa1PoS6VMgzPWg8Sac8MUe8Roe9WMg6QWQziNDw/kisspng-samsung-galaxy-s9-samsung-galaxy-s8-mobile-world-s9-plus-5b4d5cbcdb8a62.3348257715317966688993.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id:"mobile2",
      name:"Iphone 10",
      category:"mobiles",
      price : "INR 110,000",
      imgsrc : "https://www.appsquadz.com/blog/wp-content/uploads/2016/12/iPhone-Apps.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id:"mobile3",
      name:"One plus 7T",
      category:"mobiles",
     price : "INR 45,000",
     imgsrc:"https://png2.cleanpng.com/sh/b6435a83afd420de561b99358db10107/L0KzQYm3WMI2N5RskpH0aYP2gLBuTgNidaR6htk2Z3HvccnCTgM4NZZpf9c2c3Hwg8b1h71oaZ1mkOs2c0iwg7L0kCVvb15sReVqbYP4fri0hBFtaalAReUCLXXnd7a0kvV3cZZ8Retucz3lgrFohPJidpUyTdQDMUC1dYq3VcU0P2UzSaQAN0O1RIO4VcM2OWk2TaYAMEK0SHB3jvc=/kisspng-samsung-galaxy-s7-edge-samsung-galaxy-s8-samsung-g-samsung-galaxy-s7-edge-review-yes-broadband-5b8102e9055374.1257324215351815450218.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
   
    {
      id:"fashion1",
      name:"T-Shirt",
      category:"fashion",
      price : "INR 600",
      imgsrc:"http://placehold.it/700x400",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id:"fashion2",
      name:"Pants",
      category:"fashion",
      price : "INR 1200",
      imgsrc:"http://placehold.it/700x400",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      id:"fashion3",
      name:"Suits",
      category:"fashion",
      price : "INR 13,500",
      imgsrc:"http://placehold.it/700x400",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }
  ]

}
