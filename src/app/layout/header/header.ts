import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { ThemeService } from '../../core/theme.service';
import { Icon } from '../../shared/icon/icon';

interface NavLink {
  id: string;
  label: string;
  index: string;
}

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly profile = PROFILE;
  protected readonly themeService = inject(ThemeService);

  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);
  protected readonly active = signal('');

  protected readonly links: NavLink[] = [
    { id: 'about', label: 'About', index: '01' },
    { id: 'services', label: 'Services', index: '02' },
    { id: 'process', label: 'Process', index: '03' },
    { id: 'projects', label: 'Work', index: '04' },
    { id: 'experience', label: 'Experience', index: '05' },
    { id: 'skills', label: 'Stack', index: '06' },
    { id: 'credentials', label: 'Credentials', index: '07' },
    { id: 'contact', label: 'Contact', index: '08' },
  ];

  constructor() {
    afterNextRender(() => {
      this.trackScroll();
      this.trackActiveSection();
    });
  }

  @HostListener('window:scroll')
  protected trackScroll(): void {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    this.scrolled.set(scrolled > 8);
    this.progress.set(max > 0 ? Math.min(scrolled / max, 1) : 0);
  }

  protected close(): void {
    this.open.set(false);
  }

  protected toggleMenu(): void {
    this.open.update((v) => !v);
  }

  private trackActiveSection(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          this.active.set(visible.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    );

    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (el) {
        observer.observe(el);
      }
    }
  }
}
