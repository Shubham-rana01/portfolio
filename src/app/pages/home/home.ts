import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Credentials } from '../../sections/credentials/credentials';
import { Experience } from '../../sections/experience/experience';
import { Hero } from '../../sections/hero/hero';
import { Process } from '../../sections/process/process';
import { Projects } from '../../sections/projects/projects';
import { Services } from '../../sections/services/services';
import { Skills } from '../../sections/skills/skills';
import { Testimonials } from '../../sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Hero,
    About,
    Services,
    Process,
    Projects,
    Experience,
    Skills,
    Testimonials,
    Credentials,
    Contact,
  ],
  templateUrl: './home.html',
})
export class Home {}
