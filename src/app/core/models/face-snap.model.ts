// export class FaceSnap { CECI EST LA MEME CHOSE QUE PLUS BAS 
//     title: string;
//     description: string;
//     imageUrl: string;
//     createdDate: Date;
//     snaps: number;

//     constructor(
//         title: string,
//         description: string,
//         imageUrl: string,
//         createdDate: Date,
//         snaps: number
//     ) 
//     {
//         this.title = title;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.createdDate = createdDate;
//         this.snaps = snaps;
//     }
// }

// export class FaceSnap {
// // BCP PLUS RAPIDE QUE LE CODE CI-DESSUS

//     constructor(
//         public title: string,
//         public description: string,
//         public imageUrl: string,
//         public createdDate: Date,
//         public snaps: number,
//         public isLiked: boolean,
//         public location?: string
//     ) {}
// }

export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string;
}