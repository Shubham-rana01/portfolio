import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-process',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  protected readonly profile = PROFILE;
}
