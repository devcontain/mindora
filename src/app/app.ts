import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './core/services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '(click)': 'onActivity()',
    '(keydown)': 'onActivity()'
  }
})
export class App implements OnInit {

  protected readonly title = signal('mindora');

  private auth = inject(Auth);

  ngOnInit(): void {
    void this.auth.refreshSession();
  }

  onActivity(): void {
    void this.auth.refreshSession();
  }
}