import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'real-state-list',
  templateUrl: './real-state-list.page.html',
  styleUrls: ['./real-state-list.page.scss'],
})
export class RealStateListPage implements OnInit {
  public posts = [];
  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        description: '3 BHK well furnished',
        location: 'Platinium Heights,Block-B ,301 3rd Floor',
        image: 'assets/img/realstatehome.jpg',
        booked: false,
        id: 1
      },
      {
        description: '3 BHK well furnished',
        location: 'Platinium Heights,Block-B ,302 3rd Floor',
        image: 'assets/img/homeimage1.png',
        booked: true,
        id: 2
      },
      {
        description: 'Look at this amazing 3 BHK well furnished',
        location: 'Platinium Heights,Block-B ,303 3rd Floor',
        image: 'assets/img/realstatehome.jpg',
        booked: false,
        id: 3
      },
      {
        description: '4 BHK well furnished amazing flat',
        location: 'Platinium Heights,Block-B ,201 2nd Floor',
        image: 'assets/img/homeimage1.png',
        booked: false,
        id: 4
      },
      {
        description: '3 BHK well furnished with a amazing location nearby',
        location: 'Platinium Heights,Block-B ,202 2nd Floor',
        image: 'assets/img/realstatehome.jpg',
        booked: false,
        id: 5
      },
      {
        description: '3 BHK not furnished',
        location: 'Platinium Heights,Block-B ,203 2nd Floor',
        image: 'assets/img/homeimage1.png',
        booked: true,
        id: 6
      },
      {
        description: '1 BHK full furnished',
        location: 'Platinium Heights,Block-B ,103 1st Floor',
        image: 'assets/img/realstatehome.jpg',
        booked: false,
        id: 7
      },
      {
        description: '3 BHK not furnished',
        location: 'Platinium Heights,Block-B ,103 1st Floor',
        image: 'assets/img/homeimage1.png',
        booked: true,
        id: 8
      },
      {
        description: '3 BHK not furnished',
        location: 'Platinium Heights,Block-B ,103 1st Floor',
        image: 'assets/img/realstatehome.jpg',
        booked: false,
        id: 9
      }
    ];
  }
}
