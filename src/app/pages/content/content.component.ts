import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newsData } from '../../data/api'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  contentAuthor: string = ""
  contentDate: string = ""
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = newsData.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
    this.contentAuthor = result.author;
    this.contentDate = result.date;
  }

}
