import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavBarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public t: TranslationService) {}
}