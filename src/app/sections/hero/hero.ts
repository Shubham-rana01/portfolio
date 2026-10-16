import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();

  /** Saves as e.g. "Shubham-Rana-Senior-Software-Engineer.pdf" rather than "resume.pdf". */
  protected readonly resumeFileName =
    `${PROFILE.name}-${PROFILE.title}`.replace(/\s+/g, '-') + '.pdf';
}
