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
        description: 'This is a dogshit.', 
        imageUrl: 'https://i.imgur.com/qkdpN.png', 
        createdDate: new Date(), 
        snaps: 150,
        isLiked: false,
        location: 'Paris'
      },
      {
        title: 'Face Snap 2',
        description: 'This is the same dogshit.',
        imageUrl: 'https://i.imgur.com/qkdpN.png',
        createdDate: new Date(),
        snaps: 200,
        isLiked: false,
        location: 'Montpellier'
      },
      {
        title: 'Face Snap 3',
        description: 'Face Snap is just a dog on a bridge.',
        imageUrl: 'https://i.imgur.com/qkdpN.png',
        createdDate: new Date(),
        snaps: 90,
        isLiked: false
      }
    ];
  }

}
