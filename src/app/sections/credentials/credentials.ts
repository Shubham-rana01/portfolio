import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-credentials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss',
})
export class Credentials {
  protected readonly profile = PROFILE;
}
