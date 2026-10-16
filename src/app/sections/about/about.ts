import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;

  protected readonly principles = [
    {
      title: 'Scalable by design',
      text: 'Microservices and clean module boundaries, so the second year of the product costs less than the first.',
    },
    {
      title: 'Reusable by default',
      text: 'Shared components and services that shorten every delivery after the first one.',
    },
    {
      title: 'Secure from day one',
      text: 'OIDC, OAuth 2.0 and role-based access built into the architecture, not bolted on before launch.',
    },
    {
      title: 'Owned end to end',
      text: 'Requirements, build, CI/CD and production support — no hand-off gaps for things to fall through.',
    },
  ];
}
