import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly profile = PROFILE;
}
