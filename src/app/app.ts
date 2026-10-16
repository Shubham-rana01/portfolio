import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/theme.service';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // SEO and social tags live in index.html instead, because social crawlers don't run JavaScript.
  // Injected so the stored/system theme is applied as soon as the shell boots.
  private readonly theme = inject(ThemeService);
}
