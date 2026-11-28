import { Component, inject, signal } from '@angular/core';
import { Navigation } from '../../core/services/navigation';
import { Auth } from '../../core/services/auth';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  navigation = inject(Navigation);
  private auth = inject(Auth);

  loggingOut = signal(false);
  logoutError = signal('');

  async logout(): Promise<void> {

    if (this.loggingOut()) {
      return;
    }

    this.loggingOut.set(true);
    this.logoutError.set('');

    try {
      await this.auth.logout();
    } catch {
      this.logoutError.set('Logout failed. Please try again.');
    } finally {
      this.loggingOut.set(false);
    }
  }
}