import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NavBarComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public t: TranslationService) {}
}