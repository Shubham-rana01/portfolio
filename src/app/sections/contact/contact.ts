import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../core/portfolio.data';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/directives/reveal.directive';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Icon, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly telHref = PROFILE.phone ? `tel:${PROFILE.phone.replace(/\s/g, '')}` : '';
  protected readonly status = signal<Status>('idle');

  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(160)]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(4000)]],
    company: [''],
  });

  protected invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message, company } = this.form.getRawValue();

    if (company) {
      this.status.set('sent'); // silently drop bot submissions
      return;
    }

    if (!this.profile.contactFormEndpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
      window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
      this.status.set('sent');
      this.form.reset();
      return;
    }

    this.status.set('sending');

    try {
      const response = await fetch(this.profile.contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      this.status.set('sent');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }
}
