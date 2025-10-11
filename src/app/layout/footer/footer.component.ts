import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Link {
  name: string;
  url: string;
}
interface LinkColumn {
  title: string;
  links: Link[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  linkColumns: LinkColumn[] = [
    { title: 'Company', links: [
        { name: 'About Us', url: '/about' },
        { name: 'Careers', url: '/careers' },
      ]
    },
  ]

}
