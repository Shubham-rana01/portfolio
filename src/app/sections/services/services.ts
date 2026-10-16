import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly profile = PROFILE;
}
