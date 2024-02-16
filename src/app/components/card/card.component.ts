import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../models/news.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent implements OnInit {
  @Input()
  newsList!: News[];
  list: string = '';
  index: any;

  ngOnInit(): void {
  }

}
