import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly profile = PROFILE;

  /** First project starts open so the section never reads as an empty list. */
  protected readonly expanded = signal(PROFILE.projects[0]?.title ?? '');

  protected toggle(title: string): void {
    this.expanded.update((current) => (current === title ? '' : title));
  }
}
