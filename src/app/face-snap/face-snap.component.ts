import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  
  buttonText!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = 'Like';
  }

  onLike() {
    if (this.buttonText === 'Like') {
      this.faceSnap.snaps++;
      this.buttonText = 'Liked';
      this.faceSnap.isLiked = true;
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Like';
      this.faceSnap.isLiked = false;
    }
  }
}
