import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) { }

  getAllFaceSnaps() : Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number) : Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'unlike'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (likeType === 'like' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`, 
        updatedFaceSnap
      ))
    );
  }

  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location: string}) : void {
    // const newFaceSnap: FaceSnap = {
    //   ...formValue,
    //   snaps: 0,
    //   createdDate: new Date(),
    //   id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
    // };
    // this.faceSnaps.push(newFaceSnap);
  }

}

  // likeFaceSnapById(faceSnapId: number) : void { // methode qui se repete dans le code alors on retire
  //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  //   if(faceSnap) {
  //     faceSnap.snaps++;
  //   } else {
  //     throw new Error('FaceSnap not found');
  //   }
  // }

  // unLikeFaceSnapById(faceSnapId: number) : void { // methode qui se repete dans le code alors on retire
  //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  //   if(faceSnap) {
  //     faceSnap.snaps--;
  //   } else {
  //     throw new Error('FaceSnap not found');
  //   }
  // }

