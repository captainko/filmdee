import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
// import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BoxCard } from '@shared/components/cards/box-card/box-card';

// const listFilms = [
//   { id: 1, total: 20, now: 12, quality: 'HD', name: 'Đảo Hải Tặc', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F1.jpg?alt=media&token=87559340-07a7-4bb3-ac77-0cb10ca36c8c' },
//   { id: 2, total: 30, now: 16, quality: '2K', name: 'Vụ Nổ Lớn: Phần 12', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F2.jpg?alt=media&token=71b9de19-4c3a-42c3-a270-6c486b38263e' },
//   { id: 3, total: 20, now: 20, quality: 'HD', name: 'Người Hùng Tia Chớp Phần 5', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F3.jpg?alt=media&token=0de9f7e3-f491-4f5b-9e49-d0ea4d160f25' },
//   { id: 4, total: 35, now: 24, quality: 'HD+', name: 'Hỏa Vương Phần 2 Chi Thiên Lý Đồng Phong', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F4.jpg?alt=media&token=f4aa9f01-972a-4332-8382-8d219c2c4d9b' },
//   { id: 5, total: 37, now: 32, quality: 'HD+', name: 'Manh Thê Thực Thần Bản Hoạt Hình', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F5.jpg?alt=media&token=1c3c6496-3539-45b3-8923-1984f07c408a' },
//   { id: 6, total: 16, now: 11, quality: 'HD', name: 'Star Twinkle Precure', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F6.jpg?alt=media&token=74c8d232-1fd5-4411-959e-0b55ccf37b59' },
//   { id: 7, total: 25, now: 17, quality: '2K', name: 'Nhóc Trùm: Đi Làm Lại Phần 2', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F7.jpg?alt=media&token=1dcabbc7-5b06-4600-96da-df3a494a6e1b' },
//   { id: 8, total: 1, now: 1, quality: '4K', name: 'Aquaman: Đế Vương Atlantis', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F8.jpg?alt=media&token=b7323023-b448-4ed2-b5b0-b008deb480a1' },
//   { id: 9, total: 22, now: 20, quality: 'HD', name: 'Dị Nhân Legion: Phần 1', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F9.jpg?alt=media&token=943a04fc-07d3-47de-80fb-756e9d016d34' },
//   { id: 10, total: 1, now: 1, quality: '4K', name: 'Chiến Binh Báo Đen', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F10.jpg?alt=media&token=c3a0e51f-2e64-4372-9d26-6e04a04ff592' },
//   { id: 11, total: 20, now: 12, quality: 'HD', name: 'Từ Khi Em Đến', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F11.jpg?alt=media&token=b0645a99-083d-4309-9927-f9b975bda752' },
//   { id: 12, total: 30, now: 16, quality: '2K', name: 'Lách Luật: Phần 5', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F12.jpg?alt=media&token=10ad00f4-63aa-4d0a-88c5-9082e3fad35e' },
//   { id: 13, total: 20, now: 20, quality: 'HD', name: 'Bốt Hôn', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F13.jpg?alt=media&token=ded01ae6-3a7b-4acd-8433-5f58dabd7b35' },
//   { id: 14, total: 35, now: 24, quality: 'HD+', name: 'Chuyến Đi Của Tình Yêu', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F14.jpg?alt=media&token=4b24d628-57e8-4cce-a8fb-eb655c0fc841' },
//   { id: 15, total: 37, now: 32, quality: 'HD+', name: 'Tiểu Nữ Hoa Bất Khí', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F15.jpg?alt=media&token=74e65106-7b6b-46fc-a11b-50a050d272af' },
//   { id: 16, total: 16, now: 11, quality: 'HD', name: 'Bản Danh Sách Đen: Phần 6', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F16.jpg?alt=media&token=9f6053bb-5b98-4176-bfba-9b5dddddbcee' },
//   { id: 17, total: 25, now: 17, quality: '2K', name: 'I Can See Your Voice Mùa 6 ', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F17.jpg?alt=media&token=abfe485a-7c04-435a-8d64-23d082146d3e' },
//   { id: 18, total: 1, now: 1, quality: '4K', name: 'Đôi Mắt Rực Rỡ', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F18.jpg?alt=media&token=e441c58a-28b8-41ca-9146-eab88e286c26' },
//   { id: 19, total: 22, now: 20, quality: 'HD', name: 'Diệp Vấn Ngoại Truyện: Trương Thiên Chí', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F19.jpg?alt=media&token=2fbf1741-c2a6-4ba1-8126-853a7fc1bf2e' },
//   { id: 20, total: 1, now: 1, quality: '4K', name: 'Hội Pháp Sư: Phần 3', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F20.jpg?alt=media&token=66842068-56a8-4518-a0b1-dc132e4053af' },
//   { id: 21, total: 20, now: 12, quality: 'HD', name: 'Quốc Bảo Kỳ Lữ', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F21.jpg?alt=media&token=04c582ca-cba9-40c1-8e5d-300a59bf7f10' },
//   { id: 22, total: 30, now: 16, quality: '2K', name: 'Bạn Gái Thiên Kiếp Của Tôi', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F22.jpg?alt=media&token=b55df672-c4d0-4a1b-a92d-d92a0cd66e86' },
//   { id: 23, total: 20, now: 20, quality: 'HD', name: 'Tình Yêu Tội Lỗi', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F23.jpg?alt=media&token=f616f59c-cd86-42a1-a397-db7c2781f189' },
//   { id: 24, total: 35, now: 24, quality: 'HD+', name: 'Chiêu Dao', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F24.jpg?alt=media&token=607a7715-687c-4f90-a729-fdb1cae908b2' },
//   { id: 25, total: 37, now: 32, quality: 'HD+', name: 'Người Duy Nhất Bên Em', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F25.jpg?alt=media&token=1e583a22-ec49-4852-9f7d-bd0a77c19917' },
//   { id: 26, total: 16, now: 11, quality: 'HD', name: 'Luật Sư Nhà Bên 2: Tội Ác Và Trừng Phạt', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F26.jpg?alt=media&token=26906550-fed4-4d44-b140-d305e5c0f559' },
//   { id: 27, total: 25, now: 17, quality: '2K', name: 'Chàng Hề Thế Thân', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F27.jpg?alt=media&token=a31780e1-98cd-4235-ac8d-a4589fe52c21' },
//   { id: 28, total: 1, now: 1, quality: '4K', name: 'Lời Hứa Với Các Vị Thần', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F28.jpg?alt=media&token=4cf5f632-80e6-4c71-b193-279c4c193622' },
//   { id: 29, total: 22, now: 20, quality: 'HD', name: 'Luật Sư Bất Bại', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F29.jpg?alt=media&token=d652f3b3-ea20-4021-bf5f-511686405a2b' },
//   { id: 30, total: 1, now: 1, quality: '4K', name: 'Huyền Thoại Robin Hood', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F30.jpg?alt=media&token=65445cd0-3a3e-4016-a819-0df6c086ee9d' },
//   { id: 31, total: 20, now: 12, quality: 'HD', name: 'Kẹp Hạt Dẻ và Bốn Vương Quốc', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F31.jpg?alt=media&token=d0b93ef2-8854-405c-9514-f07e5c55f67a' },
//   { id: 32, total: 30, now: 16, quality: '2K', name: 'Khi Các Góa Phụ Hành Động', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F32.jpg?alt=media&token=0a740826-a504-4402-bb46-4e659f1dae5d' },
//   { id: 33, total: 20, now: 20, quality: 'HD', name: 'Cỗ Máy Tử Thần', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F33.jpg?alt=media&token=361e9419-1c3e-4cc8-82b9-3dea9a7957a8' },
//   { id: 34, total: 35, now: 24, quality: 'HD+', name: 'Bảy Viên Ngọc Rồng Siêu Cấp: Broly', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F34.jpg?alt=media&token=12cb73ad-edad-4d06-a5c7-39eedf728ec2' },
//   { id: 35, total: 37, now: 32, quality: 'HD+', name: 'Kẻ Cướp Vùng Hindostan', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F35.jpg?alt=media&token=306304ee-651b-4a0a-9bdc-fe27eb9630c5' },
//   { id: 36, total: 16, now: 11, quality: 'HD', name: 'Bumblebee', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F36.jpg?alt=media&token=f59eaf19-75e7-4b86-a104-8142bc27e555' },
//   { id: 37, total: 25, now: 17, quality: '2K', name: 'Bước Chân Đầu Tiên', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F37.jpg?alt=media&token=3a0c122b-16aa-4c3d-b9ec-3973a100dc55' },
//   { id: 38, total: 1, now: 1, quality: '4K', name: 'Vũ Điệu Tử Thần', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F38.jpg?alt=media&token=1110a54a-6773-486c-abb7-0215caab5989' },
//   { id: 39, total: 22, now: 20, quality: 'HD', name: 'Thực Thể Đen Tối', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F39.jpg?alt=media&token=39445ae4-8bbd-49e1-94d9-ce1bfcbdb872' },
//   { id: 40, total: 1, now: 1, quality: '4K', name: 'Triều Đại Của Siêu Nhân', image: 'https://firebasestorage.googleapis.com/v0/b/phimdee-image.appspot.com/o/image-thumb%2F40.jpg?alt=media&token=f575dd43-47ef-4700-8369-e1b6f292603a' }
// ]


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // private env = environment;
  movieStream: Subject<BoxCard[]>;
  listFilms: BoxCard[];
  lists: Observable<BoxCard[]>;

  constructor(private http: HttpClient, public afs: AngularFirestore) {
    this.movieStream = new BehaviorSubject([]);
    this.movieStream.next(this.listFilms);
  }

  getLists() {
    this.lists = this.afs.collection('film-slide').snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
            const data = a.payload.doc.data() as BoxCard;
            data.id = a.payload.doc.id;
            return data;
        });
    }));

    return this.lists;
}

  // getMovies(query: string): Observable<BoxCard[]> {
  //   this.getUser().subscribe(lists => {
  //     this.listFilms = lists;
  //   })
  //   query.trim();
  //   // query = query.split(' ').join('+');
  //   var temp = of(this.listFilms.filter((x: BoxCard) => {
  //     return x.name.toLowerCase().includes(query.toLowerCase())
  //   })
  //   );
  //   return temp;
  //   // return this.http.get<SearchResult>(this.env.movieApiUrl + `s=${query}`)
  //   //   .pipe(
  //   //     map(res => {
  //   //       if (res.Response === "False") {
  //   //         // found not thing
  //   //         return [];
  //   //       }
  //   //       let search = res.Search.filter(x => x.Poster !== "N/A" ? true : false)
  //   //       return search;
  //   //     })
  //   //   );
  // }
  // getPoster(title: string): Observable<string> {
  //   return this.http.get<string>(this.env.posterApiUrl + '');
  // }

}
