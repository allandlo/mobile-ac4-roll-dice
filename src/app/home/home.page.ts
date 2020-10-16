import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  image : string;
  images = [
    '../../assets/dados/dado1.png',
    '../../assets/dados/dado2.png',
    '../../assets/dados/dado3.png',
    '../../assets/dados/dado4.png',
    '../../assets/dados/dado5.png',
    '../../assets/dados/dado6.png'
  ]

  constructor() {}

  ngOnInit(){
    this.image = this.images[0];
  }

  clicked(v){
    let valor = Math.floor((Math.random() * 6));
    this.image = this.images[valor]
    v.value = valor+1
  }

}
