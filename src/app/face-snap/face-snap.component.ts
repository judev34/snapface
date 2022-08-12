import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.buttonText = 'Like';
  }

  onLike() {
    if (this.buttonText === 'Like') {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Liked';
      this.faceSnap.isLiked = true;
      console.log(this.faceSnap.title + ' - ' + this.faceSnap.isLiked);
      
    } else {
      this.faceSnapsService.unLikeFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Like';
      this.faceSnap.isLiked = false;
      console.log(this.faceSnap.title + ' - ' + this.faceSnap.isLiked);
    }
  }
}
