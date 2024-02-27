import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  userName: string;
  userEmail: string;
  userAddress: string;

  userData: Array<any> = [];

  saveData() {
    this.userData.push({
      name: this.userName,
      email: this.userEmail,
      address: this.userAddress,
    });
  }

  onDelete(index: number) {
    this.userData.splice(index, 1);
  }
}
