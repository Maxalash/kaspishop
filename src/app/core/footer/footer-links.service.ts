import { Injectable } from '@angular/core';
import { Link } from '../../shared/interfaces';

export interface LinkColumn {
  title: string;
  links: Link[];
}

@Injectable({
  providedIn: 'root'
})
export class FooterLinksService {
  linkColumns: LinkColumn[] = [
    { title: 'Продукты Kaspi.kz', links: [
        { name: 'Kaspi Gold', url: '#' },
        { name: 'Kaspi Red', url: '#' },
        { name: 'Kaspi Депозит', url: '#' },
        { name: 'Кредит на Покупки', url: '#' },
        { name: 'Рассрочка', url: '#' },
        { name: 'Кредит для ИП', url: '#' },
        { name: 'Кредит наличными', url: '#' },
      ]
    },
    { title: 'Сервисы Kaspi.kz', links: [
        { name: 'Магазин', url: '#' },
        { name: 'Travel', url: '#' },
        { name: 'Платежи', url: '#' },
        { name: 'Мой банк', url: '#' },
        { name: 'Переводы', url: '#' },
        { name: 'Акции', url: '#' },
        { name: 'Госуслуги', url: '#' },
        { name: 'Объявления', url: '#' },
        { name: 'Kaspi Гид', url: '#' },
      ]
    },
    { title: 'Для Бизнеса', links: [
        { name: 'Kaspi Pay', url: '#' },
        { name: 'Бизнес Кредит', url: '#' },
        { name: 'Кредит для ИП', url: '#' },
        { name: 'Принимать платежи с Kaspi.kz', url: '#' },
        { name: 'Kaspi Гид', url: '#' },
        { name: 'Кабинет продавца', url: '#' },
      ]
    },
    { title: '9999 Бесплатно с мобильного', links: [
        { name: 'Пользовательское соглашение', url: '#' },
        { name: 'Вакансии', url: '#' },
        { name: 'Investor Relations', url: '#' },
        { name: 'Договор присоединения', url: '#' },
        { name: 'Договор по оказанию услуги доставки', url: '#' },
      ]
    },
  ];
  constructor() { }
  getLinkColumns() {
    return this.linkColumns;
  };
}
