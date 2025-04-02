import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MediaPlayerComponent } from "./media-player/media-player.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, MediaPlayerComponent, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ANG";
  mp3Url = "audio/audio.mp3";
  imageUrl = "img/image.jpg";
  trackName = "الأسلحة الرقمية - من هم مجموعة كيلنت";
}
