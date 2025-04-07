import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { ActivatedRoute } from "@angular/router";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MediaPlayerComponent } from "./media-player/media-player.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: "app-root",
  imports: [HeaderComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    sessionStorage.setItem("isAuthenticated", "false");
    sessionStorage.setItem(
      "previousLinks",
      '[{"mp3Url": "audio/audio.mp3", "imageUrl": "img/image.jpg", "trackName": "The Impossible"}]'
    );
    sessionStorage.setItem(
      "users",
      '[{"userName": "wassim", "password": "123456"}, {"userName": "mhamad", "password": "123456"},{"userName": "podeo", "password": "123456"}]'
    );
    sessionStorage.setItem(
      "currentLinkObj",
      '{"mp3Url": "audio/audio.mp3", "imageUrl": "img/image.jpg", "trackName": "The Impossible"}'
    );
  }
}
