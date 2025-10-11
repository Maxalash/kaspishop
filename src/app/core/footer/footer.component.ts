import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksService, SocialLink } from './social-links.service';
import { FooterLinksService, LinkColumn } from './footer-links.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  linkColumns: LinkColumn[];
  private readonly footerLinksService = inject(FooterLinksService);

  socials: SocialLink[];
  private socialLinksService: SocialLinksService = inject(SocialLinksService);
  constructor() {
    this.socials = this.socialLinksService.getSocialLinks();
    this.linkColumns = this.footerLinksService.getLinkColumns();
  }

  



}
