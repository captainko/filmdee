import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
// import { environment } from '@env/environment';
import { BoxCard } from '@shared/components/cards/box-card/box-card';

const listFilms = [
  { id: 1, total: 20, now: 12, quality: 'HD', name: 'Đảo Hải Tặc' },
  { id: 2, total: 30, now: 16, quality: '2K', name: 'Vụ Nổ Lớn: Phần 12' },
  { id: 3, total: 20, now: 20, quality: 'HD', name: 'Người Hùng Tia Chớp Phần 5' },
  { id: 4, total: 35, now: 24, quality: 'HD+', name: 'Hỏa Vương Phần 2 Chi Thiên Lý Đồng Phong' },
  { id: 5, total: 37, now: 32, quality: 'HD+', name: 'Manh Thê Thực Thần Bản Hoạt Hình' },
  { id: 6, total: 16, now: 11, quality: 'HD', name: 'Star Twinkle Precure' },
  { id: 7, total: 25, now: 17, quality: '2K', name: 'Nhóc Trùm: Đi Làm Lại Phần 2' },
  { id: 8, total: 1, now: 1, quality: '4K', name: 'Aquaman: Đế Vương Atlantis' },
  { id: 9, total: 22, now: 20, quality: 'HD', name: 'Dị Nhân Legion: Phần 1' },
  { id: 10, total: 1, now: 1, quality: '4K', name: 'Chiến Binh Báo Đen' },
  { id: 11, total: 20, now: 12, quality: 'HD', name: 'Từ Khi Em Đến' },
  { id: 12, total: 30, now: 16, quality: '2K', name: 'Lách Luật: Phần 5' },
  { id: 13, total: 20, now: 20, quality: 'HD', name: 'Bốt Hôn' },
  { id: 14, total: 35, now: 24, quality: 'HD+', name: 'Chuyến Đi Của Tình Yêu' },
  { id: 15, total: 37, now: 32, quality: 'HD+', name: 'Tiểu Nữ Hoa Bất Khí' },
  { id: 16, total: 16, now: 11, quality: 'HD', name: 'Bản Danh Sách Đen: Phần 6' },
  { id: 17, total: 25, now: 17, quality: '2K', name: 'I Can See Your Voice Mùa 6 ' },
  { id: 18, total: 1, now: 1, quality: '4K', name: 'Đôi Mắt Rực Rỡ' },
  { id: 19, total: 22, now: 20, quality: 'HD', name: 'Diệp Vấn Ngoại Truyện: Trương Thiên Chí' },
  { id: 20, total: 1, now: 1, quality: '4K', name: 'Hội Pháp Sư: Phần 3' },
  { id: 21, total: 20, now: 12, quality: 'HD', name: 'Quốc Bảo Kỳ Lữ' },
  { id: 22, total: 30, now: 16, quality: '2K', name: 'Bạn Gái Thiên Kiếp Của Tôi' },
  { id: 23, total: 20, now: 20, quality: 'HD', name: 'Tình Yêu Tội Lỗi' },
  { id: 24, total: 35, now: 24, quality: 'HD+', name: 'Chiêu Dao' },
  { id: 25, total: 37, now: 32, quality: 'HD+', name: 'Người Duy Nhất Bên Em' },
  { id: 26, total: 16, now: 11, quality: 'HD', name: 'Luật Sư Nhà Bên 2: Tội Ác Và Trừng Phạt' },
  { id: 27, total: 25, now: 17, quality: '2K', name: 'Chàng Hề Thế Thân' },
  { id: 28, total: 1, now: 1, quality: '4K', name: 'Lời Hứa Với Các Vị Thần' },
  { id: 29, total: 22, now: 20, quality: 'HD', name: 'Luật Sư Bất Bại' },
  { id: 30, total: 1, now: 1, quality: '4K', name: 'Huyền Thoại Robin Hood' },
  { id: 31, total: 20, now: 12, quality: 'HD', name: 'Kẹp Hạt Dẻ và Bốn Vương Quốc' },
  { id: 32, total: 30, now: 16, quality: '2K', name: 'Khi Các Góa Phụ Hành Động' },
  { id: 33, total: 20, now: 20, quality: 'HD', name: 'Cỗ Máy Tử Thần' },
  { id: 34, total: 35, now: 24, quality: 'HD+', name: 'Bảy Viên Ngọc Rồng Siêu Cấp: Broly' },
  { id: 35, total: 37, now: 32, quality: 'HD+', name: 'Kẻ Cướp Vùng Hindostan' },
  { id: 36, total: 16, now: 11, quality: 'HD', name: 'Bumblebee' },
  { id: 37, total: 25, now: 17, quality: '2K', name: 'Bước Chân Đầu Tiên' },
  { id: 38, total: 1, now: 1, quality: '4K', name: 'Vũ Điệu Tử Thần' },
  { id: 39, total: 22, now: 20, quality: 'HD', name: 'Thực Thể Đen Tối' },
  { id: 40, total: 1, now: 1, quality: '4K', name: 'Triều Đại Của Siêu Nhân' }
];

(() => {
  listFilms.forEach((x: any)=> {
    x.link = `assets/images/thumb-film/${x.id}.jpg`
  })
})();

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // private env = environment;
  movieStream: BehaviorSubject<BoxCard[]>;

  constructor(private http: HttpClient) {
    this.movieStream = new BehaviorSubject([]);
    this.movieStream.next(listFilms);
  }
  getMovies(query: string): Observable<BoxCard[]> {
    query.trim();
    // query = query.split(' ').join('+');
    var temp = of(listFilms.filter((x: BoxCard) => {
      return x.name.toLowerCase().includes(query.toLowerCase())
    })
    );
    return temp;
    // return this.http.get<SearchResult>(this.env.movieApiUrl + `s=${query}`)
    //   .pipe(
    //     map(res => {
    //       if (res.Response === "False") {
    //         // found not thing
    //         return [];
    //       }
    //       let search = res.Search.filter(x => x.Poster !== "N/A" ? true : false)
    //       return search;
    //     })
    //   );
  }
  // getPoster(title: string): Observable<string> {
  //   return this.http.get<string>(this.env.posterApiUrl + '');
  // }

  addLinks() {
    listFilms.forEach((x: any)=> {
      x.link = `assets/images/thumb-film/${x.id}.jpg`
    })
  }
}
