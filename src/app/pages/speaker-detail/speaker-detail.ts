import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
  cardImage = 'assets/img/credit-card.png';
  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      text: `Shpping of Shirt and Jeans`,
      date: 'March 5, 2019',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/img/background/background-3.jpg',
      text: 'Wathed movie of Kalank',
      date: 'April 17, 2019',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/img/background/background-4.jpg',
      date: 'January 27, 2019',
      likes: 46,
      text: `Birthday celebrated in restuarents`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  user = {
    name: 'Hardik Kothari',
    twitter: '@virtualCard',
    profileImage: '../assets/img/avatar/cosima-avatar.jpg',
    followers: 456,
    following: 1052,
    tweets: 35
  };

  constructor() { }

  ionViewDidLoad() {

  }

  imageTapped(post) {

  }

  comment(post) {

  }

  like(post) {

  }
}
