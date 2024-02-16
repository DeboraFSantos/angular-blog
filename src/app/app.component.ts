import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { TitleComponent } from "./components/title/title.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { HomeComponent } from "./pages/home/home.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CardComponent, TitleComponent, MenuBarComponent, HomeComponent]
})

export class AppComponent implements OnInit {
  title = 'angular-blog';

  ngOnInit(): void {
  }
}
