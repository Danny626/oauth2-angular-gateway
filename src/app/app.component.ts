import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ResourceService } from './services/resource.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-gateway';
  msguser = '';
  msgadmin = '';

  constructor(
    private resourceService: ResourceService
  ) {}

  user(): void {
    this.resourceService.user().subscribe({
      next: (res: any) => (this.msguser = res.message),
      error: (err: any) => (this.msguser = err.statusText + ': ' + err.status)
    });
  }

  admin(): void {
    this.resourceService.admin().subscribe({
      next: (res: any) => (this.msgadmin = res.message),
      error: (err: any) => (this.msgadmin = err.statusText + ': ' + err.status)
    });
  }

  onLogin(): void {
    window.location.href = '/oauth2/authorization/gateway';
  }

  onLogout() {
    window.location.href = 'logout';
  }
}
