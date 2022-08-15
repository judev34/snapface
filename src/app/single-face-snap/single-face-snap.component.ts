import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  // faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText = 'Like';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }

  onLike(faceSnapId: number) {
    if (this.buttonText === 'Like') {
      this.faceSnap$ = this.faceSnapsService.likeFaceSnapById(faceSnapId, 'like').pipe(
        tap(() => this.buttonText = 'Liked')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.likeFaceSnapById(faceSnapId, 'unlike').pipe(
        tap(() => this.buttonText = 'Like')
      );
    }
  }
}
