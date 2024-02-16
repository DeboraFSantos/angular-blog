import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { TitleComponent } from "../../components/title/title.component";
import { CardComponent } from "../../components/card/card.component";
import { News } from '../../models/news.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MenuBarComponent, TitleComponent, CardComponent]
})

export class HomeComponent implements OnInit {
  newsInfo: News[] = [
    {
      id: '1',
      title: 'Beyoncé anuncia lançamento da segunda parte do álbum Renaissance',
      description: 'Ela está de volta! Beyoncé anunciou, neste domingo (11/2), a data de lançamento de Act 2, que faz parte do álbum Renaissance. Com um total de três partes, a primeira fase...',
      photo: '../../../assets/img/noticia1.jpg',
      author: 'Débora',
      date: '16/02/2024'
    },
    {
      id: '2',
      title: 'Anitta opta por look metalizado em 7ª vez com trio elétrico em Salvador',
      description: 'Anitta agitou os foliões nesta sexta-feira (17) durante o Carnaval 2023 de Salvador. A cantora, de 29 anos de idade, leva o famoso ‘Bloco da Anitta’ para o Circuito Dodô (Barra-Ondina)...',
      photo: '../../../assets/img/noticia2.png',
      author: 'Débora',
      date: '16/02/2024'
    },
    {
      id: '3',
      title: 'Dua Lipa vê homens brigarem por ela em “Training Season”; assista!',
      description: 'Enquanto se prepara para lançar o sucessor do “Future Nostalgia”, Dua Lipa divulgou um registro audiovisual para “Training Season”. A música, que fará parte do novo projeto...',
      photo: '../../../assets/img/noticia3.png',
      author: 'Débora',
      date: '16/02/2024'
    },
    {
      id: '4',
      title: '“Odeio trailers que mostram o filme inteiro em dois minutos”, diz Margot Robbie',
      description: 'Margot Robbie tem uma crítica aos trailers da atualidade. “É preciso que exista um elemento de mistério. Odeio trailers que têm o filme inteiro condensado em dois minutos”, a atriz e...',
      photo: '../../../assets/img/noticia4.png',
      author: 'Débora',
      date: '16/02/2024'
    },
    {
      id: '5',
      title: 'Beyoncé anuncia lançamento da segunda parte do álbum Renaissance',
      description: 'Ela está de volta! Beyoncé anunciou, neste domingo (11/2), a data de lançamento de Act 2, que faz parte do álbum Renaissance. Com um total de três partes, a primeira fase...',
      photo: '../../../assets/img/noticia1.jpg',
      author: 'Débora',
      date: '16/02/2024'
    },
    {
      id: '6',
      title: 'Anitta opta por look metalizado em 7ª vez com trio elétrico em Salvador',
      description: 'Anitta agitou os foliões nesta sexta-feira (17) durante o Carnaval 2023 de Salvador. A cantora, de 29 anos de idade, leva o famoso ‘Bloco da Anitta’ para o Circuito Dodô (Barra-Ondina)...',
      photo: '../../../assets/img/noticia2.png',
      author: 'Débora',
      date: '16/02/2024'
    },
    {
      id: '7',
      title: 'Dua Lipa vê homens brigarem por ela em “Training Season”; assista!',
      description: 'Enquanto se prepara para lançar o sucessor do “Future Nostalgia”, Dua Lipa divulgou um registro audiovisual para “Training Season”. A música, que fará parte do novo projeto...',
      photo: '../../../assets/img/noticia3.png',
      author: 'Débora',
      date: '16/02/2024'
    },
    {
      id: '8',
      title: '“Odeio trailers que mostram o filme inteiro em dois minutos”, diz Margot Robbie',
      description: 'Margot Robbie tem uma crítica aos trailers da atualidade. “É preciso que exista um elemento de mistério. Odeio trailers que têm o filme inteiro condensado em dois minutos”, a atriz e...',
      photo: '../../../assets/img/noticia4.png',
      author: 'Débora',
      date: '16/02/2024'
    }
  ]

  ngOnInit(): void {
  }
}
