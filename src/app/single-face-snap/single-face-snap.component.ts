import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText = 'Like';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }

  onLike() {
    if (this.buttonText === 'Like') {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, 'like');
      this.buttonText = 'Liked';
    } else {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, 'unlike');
      this.buttonText = 'Like';
    }
  }
}
