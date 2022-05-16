import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Đây là nơi định nghĩa component và logic
export class AppComponent {
  // Định nghĩa các biến 
  // Các biến này có thể nhận được giá trị ở file html
  title = 'WEB16301 - demo';

  // Khai báo thêm 1 số biến để html sử dụng
  name = 'quynhlnph13872';
  class = 'web16301';

  students = [
    {
      name: 'quynhlnph13872',
      id: 1,
      status: 0
    },
    {
      name: 'quynhlnph13872',
      id: 2,
      status: 1
    },
    {
      name: 'quynhlnph13872',
      id: 3,
      status: 1
    }
  ];
  champs = [
    {
      id : 1,
      name: "Yasuo",
      dame : 67,
      defend : 32,
      speed : 320,
      price : 6300,
      avatar : "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3a319fc884dc6880/5db0601c242f426df132f985/RiotX_ChampionList_yasuo.jpg?quality=90&width=250",
    }
  ];

  studentName = 'quynhln';
  studentId = 'PH13872';

}
