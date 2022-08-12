import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor() { }

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Face Snap', 
      description: 'This is a dogshit.', 
      imageUrl: 'https://i.imgur.com/qkdpN.png', 
      createdDate: new Date(), 
      snaps: 150,
      isLiked: false,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Face Snap 2',
      description: 'This is the same dogshit.',
      imageUrl: 'https://i.imgur.com/qkdpN.png',
      createdDate: new Date(),
      snaps: 200,
      isLiked: false,
      location: 'Montpellier'
    },
    {
      id: 3,
      title: 'Face Snap 3',
      description: 'Face Snap is just a dog on a bridge.',
      imageUrl: 'https://i.imgur.com/qkdpN.png',
      createdDate: new Date(),
      snaps: 90,
      isLiked: false
    }
  ];

  getAllFaceSnaps() : FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number) : FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'unlike'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    likeType === 'like' ? faceSnap.snaps++ : faceSnap.snaps--;
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



}
