import { Component, input } from '@angular/core';

interface User_Info {
  name: string;
  enail: string;
  description: string;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userInfo = input<User_Info>();
}
