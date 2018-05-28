import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post-list-item-component",
  templateUrl: "./post-list-item-component.component.html",
  styleUrls: ["./post-list-item-component.component.scss"]
})
export class PostListItemComponentComponent implements OnInit {
  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLoveits: number;
  @Input() postCreated: DateTimeFormat;

  constructor() {}

  ngOnInit() {
    console.log(this.postTitle);
    console.log(this.postContent);
    console.log(this.postLoveits);
    console.log(this.postCreated);
  }
  getContent() {
    return this.postContent;
  }
  getColor() {
    if (this.postLoveits > 0) {
      return "green";
    } else if (this.postLoveits < 0) {
      return "red";
    }
  }

  love(loveits: number) {
    this.postLoveits = loveits + 1;
  }
  dlove(loveits: number) {
    this.postLoveits = loveits - 1;
  }
}
