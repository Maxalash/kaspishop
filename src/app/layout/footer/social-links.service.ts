import { Injectable } from '@angular/core';

export interface SocialLink {
  name: string;
  imageUrl: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocialLinksService {
  readonly socials: SocialLink[] = [
    {name:'Instagram', imageUrl: 'assets/instagram.svg', link: 'https://www.instagram.com/kaspi.kz/' },
    {name:'TikTok', imageUrl: 'assets/tiktok.svg', link: 'https://www.tiktok.com/@kaspi.kz' },
    {name:'YouTube', imageUrl: 'assets/youtube.svg', link: 'https://www.youtube.com/c/Kaspikz' },
    {name:'Telegram', imageUrl: 'assets/telegram.svg', link: 'https://t.me/kaspikz' },
    {name:'Facebook', imageUrl: 'assets/facebook.svg', link: 'https://www.facebook.com/Kaspi.kz/' },
    {name:'Twitter', imageUrl: 'assets/twitter.svg', link: 'https://twitter.com/Kaspi_kz' },
    {name:'VK', imageUrl: 'assets/vk.svg', link: 'https://vk.com/kaspikz' },
    {name:'OK', imageUrl: 'assets/ok.svg', link: 'https://www.ok.ru/kaspi.kz' },
    {name:'LinkedIn', imageUrl: 'assets/linkedin.svg', link: 'https://www.linkedin.com/company/kaspi-kz/' },
  ];
  constructor() { }

  getSocialLinks() {
    return this.socials;
  }
}
