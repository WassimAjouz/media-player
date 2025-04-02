import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-media-player",
  imports: [MatIconModule],
  templateUrl: "./media-player.component.html",
  styleUrl: "./media-player.component.css",
})
export class MediaPlayerComponent {
  @Input() mp3Url: string | null = null;
  @Input() imageUrl: string | null = null;
  @Input() trackName: string | null = null;

  isPlaying = false;

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
}
