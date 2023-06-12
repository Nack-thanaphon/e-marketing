import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
  
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

 
}

