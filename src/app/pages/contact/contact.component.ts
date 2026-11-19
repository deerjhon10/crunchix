import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavBarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // =========================================================================
  // CONFIGURATION TEST / PRODUCTION (Switch)
  // true  = Mode Test (deerjhon10@gmail.com / 00212707847648)
  // false = Mode Prod (Contact.amdalfood@gmail.com / 0033773173572)
  // =========================================================================
  readonly IS_TEST_MODE = true;

  readonly CONTACT_CONFIG = {
    email: {
      test: 'sektaoui.elmehdi@gmail.com',
      prod: 'Contact.amdalfood@gmail.com'
    },
    phone: {
      test: '0033699946542',
      prod: '0033773173572'
    }
  };

  formData = {
    name: '',
    company: '',
    country: 'France',
    activity: '',
    email: '',
    dialCode: '+33',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  errorMessage = '';

  constructor(public t: TranslationService) {}

  get targetEmail(): string {
    return this.IS_TEST_MODE
      ? this.CONTACT_CONFIG.email.test
      : this.CONTACT_CONFIG.email.prod;
  }

  get targetWhatsApp(): string {
    const rawPhone = this.IS_TEST_MODE
      ? this.CONTACT_CONFIG.phone.test
      : this.CONTACT_CONFIG.phone.prod;
    return rawPhone.replace(/^00/, '').replace(/^\+/, '').replace(/\s+/g, '');
  }

  async onSubmit(): Promise<void> {
    this.errorMessage = '';
    this.submitSuccess = false;

    const lang = this.t.getLanguage();

    // 1. التحقق من الحقول الإلزامية (*)
    if (
      !this.formData.name.trim() ||
      !this.formData.company.trim() ||
      !this.formData.country.trim() ||
      !this.formData.message.trim()
    ) {
      this.errorMessage =
        lang === 'ar'
          ? 'يرجى ملء جميع الحقول الإلزامية (*).'
          : lang === 'en'
          ? 'Please fill in all required fields (*).'
          : 'Veuillez remplir tous les champs obligatoires (*).';
      return;
    }

    // 2. التحقق من وجود البريد الإلكتروني أو الهاتف على الأقل
    if (!this.formData.email.trim() && !this.formData.phone.trim()) {
      this.errorMessage =
        lang === 'ar'
          ? 'يرجى إدخال وسيلة تواصل واحدة على الأقل (البريد الإلكتروني أو الهاتف).'
          : lang === 'en'
          ? 'Please provide at least one contact method (email or phone).'
          : 'Veuillez renseigner au moins un moyen de contact (e-mail ou téléphone).';
      return;
    }

    this.isSubmitting = true;
    const fullPhone = this.formData.phone.trim()
      ? `${this.formData.dialCode} ${this.formData.phone.trim()}`
      : 'Non renseigné';

    // 3. إرسال البريد الإلكتروني عبر FormSubmit AJAX
    try {
      await fetch(`https://formsubmit.co/ajax/${this.targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nouvelle demande AMDAL FOOD - ${this.formData.company}`,
          Nom: this.formData.name,
          Entreprise: this.formData.company,
          Pays: this.formData.country,
          Activite: this.formData.activity || 'Non précisée',
          Email: this.formData.email || 'Non renseigné',
          Telephone: fullPhone,
          Message: this.formData.message
        })
      });
    } catch (e) {
      console.warn('Erreur lors de l’envoi email, ouverture de WhatsApp en secours.', e);
    }

    // 4. فتح محادثة WhatsApp بالرسالة المنسقة
    const waText =
      `*Nouvelle demande - AMDAL FOOD*\n\n` +
      `*Nom :* ${this.formData.name}\n` +
      `*Entreprise :* ${this.formData.company}\n` +
      `*Pays :* ${this.formData.country}\n` +
      `*Activité :* ${this.formData.activity || '-'}\n` +
      `*Email :* ${this.formData.email || '-'}\n` +
      `*Téléphone :* ${fullPhone}\n\n` +
      `*Message :*\n${this.formData.message}`;

    const waUrl = `https://wa.me/${this.targetWhatsApp}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');

    this.isSubmitting = false;
    this.submitSuccess = true;

    // 5. تفريغ الحقول بعد الإرسال
    this.formData = {
      name: '',
      company: '',
      country: 'France',
      activity: '',
      email: '',
      dialCode: '+33',
      phone: '',
      message: ''
    };
  }
}