import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-media-player",
  imports: [MatIconModule, CommonModule],
  templateUrl: "./media-player.component.html",
  styleUrl: "./media-player.component.css",
  standalone: true,
})
export class MediaPlayerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  mp3Url: string | null = null;
  imageUrl: string | null = null;
  trackName: string | null = null;
  isPlaying = false;
  previousLinks: {
    imageUrl: string;
    mp3Url: string;
    trackName: string;
  }[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.mp3Url = params["mp3"] || null;
      this.imageUrl = params["image"] || null;
      this.trackName = decodeURIComponent(params["name"]) || null;
    });

    let sesItem = sessionStorage.getItem("previousLinks");
    this.previousLinks = JSON.parse(sesItem ? sesItem : "");
  }

  play(player: HTMLAudioElement) {
    player.play();
    this.isPlaying = true;
  }

  pause(player: HTMLAudioElement) {
    player.pause();
    this.isPlaying = false;
  }

  increaseVolume(player: HTMLAudioElement) {
    if (player.volume < 1) player.volume += 0.1;
  }

  decreaseVolume(player: HTMLAudioElement) {
    if (player.volume > 0) player.volume -= 0.1;
  }

  setColor(color: string) {
    let el = document.getElementById("app-container");
    if (el) el["style"]["backgroundColor"] = color;
  }
}
