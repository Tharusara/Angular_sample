import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  posts$: Object;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      data => this.posts$ = data
    );
  }

}
