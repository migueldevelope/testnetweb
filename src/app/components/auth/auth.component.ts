import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ViewInputAuthentication } from '../../models/view-input-authentication';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [FormsModule]
})

export class AuthComponent implements OnInit {
  input: ViewInputAuthentication = { username: '', password: '' };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  login() {
    this.authService.login(this.input).subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}