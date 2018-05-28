import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../post.model";

@Component({
  selector: "app-post-list-component",
  templateUrl: "./post-list-component.component.html",
  styleUrls: ["./post-list-component.component.scss"]
})
export class PostListComponentComponent implements OnInit {
  /*posts: Post[] = [
    new Post("Mon premier post", "test description", 1, new Date()),
    new Post("Mon deuxiéme post", "test description", -1, new Date()),
    new Post("Mon autre post", "test description", 0, new Date())
  ];*/
  posts = [
    {
      title: "Mon premier post",
      content: "test description",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Mon deuxiéme post",
      content: "test description",
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: "Encore",
      content: "test description",
      loveIts: 0,
      created_at: new Date()
    }
  ];
  constructor() {}

  ngOnInit() {}
}
