import { Component, OnInit } from '@angular/core';
import { BoxCard } from '@shared/components/cards/box-card/box-card';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss']
})
export class SlideListComponent implements OnInit {
  

  total: number = 40; // Số lượng item

  customOptions: any = {
    margin: 10,
    loop: true,
    dots: false,
    center: false,
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      322: {
        items: 2,
        slideBy: 2
      },
      483: {
        items: 3,
        slideBy: 3
      },
      644: {
        items: 4,
        slideBy: 4
      },
      805: {
        items: 5,
        slideBy: 5
      },
      966: {
        items: 6,
        slideBy: 6
      },
      1127: {
        items: 7,
        slideBy: 7
      },
      1288: {
        items: 8,
        slideBy: 8
      },
      1449: {
        items: 9,
        slideBy: 9
      },
      1610: {
        items: 10,
        slideBy: 10
      }
    },
    nav: false
  }

  activeSlides: any;
  activeDot: number = 1;
  total_dots = new Array<any>();

  active(data: any) {
    this.activeDot = Math.floor((data.startPosition + 1)/data.slides.length) + 1;
  }

  getData(data: any) {

    this.activeSlides = Math.ceil(this.total / data.slides.length);
    for (let i = 0; i < this.activeSlides; i++) {
      var temp = new Object();
      temp["id"] = (i + 1);
      temp["dot"] = (i * data.slides.length) + '';
      this.total_dots.push(temp);
    }
  }

  listFilms: BoxCard[] = [
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
  ]

  constructor() {

      this.listFilms.forEach((x: any)=> {
        x.link = `assets/images/thumb-film/${x.id}.jpg`
      })
   }

  ngOnInit() {
  }

}
