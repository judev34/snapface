import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Face Snap', 
        description: 'Face Snap is a web application that allows users to take pictures of their face and upload them to a server. The pictures are then analyzed and the user is given a score based on the amount of facial features they have.', 
        imageUrl: 'https://i.imgur.com/qkdpN.png', 
        createdDate: new Date(), 
        snaps: 0,
        isLiked: false,
        location: 'Paris'
      },
      {
        title: 'Face Snap 2',
        description: 'Face Snap is a web basic app.',
        imageUrl: 'https://i.imgur.com/qkdpN.png',
        createdDate: new Date(),
        snaps: 0,
        isLiked: false,
        location: 'Montpellier'
      },
      {
        title: 'Face Snap 3',
        description: 'Face Snap is just a dog on a bridge.',
        imageUrl: 'https://i.imgur.com/qkdpN.png',
        createdDate: new Date(),
        snaps: 0,
        isLiked: false
      }
    ];
  }

}
