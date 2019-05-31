import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage implements OnInit {
  cardImage = 'assets/img/credit-card.png';
  inventoryDetail
  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      text: `Diliver to appollo hospital`,
      date: 'March 5, 2019',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/img/background/background-3.jpg',
      text: 'Dilivery to Rajasthan hospital',
      date: 'April 17, 2019',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/img/background/background-4.jpg',
      date: 'January 27, 2019',
      likes: 46,
      text: `Diliver to Shalby hospital`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  
  user = {
    name: 'Hardik Kothari',
    twitter: '@virtualCard',
    profileImage: '../assets/img/avatar/cosima-avatar.jpg',
    followers: 2132,
    following: 1080,
    tweets: 1052
  };

  constructor(public confData: ConferenceData,private route: ActivatedRoute) { 

  }

  ngOnInit()
  {
    const sessionId = this.route.snapshot.paramMap.get('speakerId')
    this.confData.getSpeakers().subscribe((speakers: any[]) => {     
      console.log(sessionId)
      let index = speakers.findIndex((speaker) => speaker.id == sessionId)
      console.log("index",index)
      if(index !== -1)
      {
        this.inventoryDetail = speakers[index]
        console.log(this.inventoryDetail)
      }
    });
  }

  ionViewDidLoad() {

  }

  imageTapped(post) {

  }

  comment(post) {

  }

  like(post) {

  }
}
