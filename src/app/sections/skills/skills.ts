import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly profile = PROFILE;
}
