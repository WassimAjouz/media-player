import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-dashboard",
  imports: [FormsModule, CommonModule, MatIconModule],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
  mp3Url: string = "";
  imageUrl: string = "";
  trackName: string = "";
  shareableLink: string | null = null;
  previousLinks: {
    imageUrl: string;
    mp3Url: string;
    trackName: string;
  }[] = [];

  ngOnInit() {
    let sesItem = sessionStorage.getItem("previousLinks");
    this.previousLinks = JSON.parse(sesItem ? sesItem : "");
  }

  generateLink() {
    const currentLinkObj = {
      mp3Url: this.mp3Url,
      imageUrl: this.imageUrl,
      trackName: this.trackName,
    };
    // Push to previous links array
    this.previousLinks.push({
      imageUrl: this.imageUrl,
      mp3Url: this.mp3Url,
      trackName: this.trackName,
    });

    // save previouslinksobj
    sessionStorage.setItem("previousLinks", JSON.stringify(this.previousLinks));

    // Set Current Link
    sessionStorage.setItem("currentLinkObj", JSON.stringify(currentLinkObj));

    // console.log(sessionStorage.getItem("currentLinkObj"));

    const baseUrl = window.location.origin; // Get current site URL
    this.shareableLink = `${baseUrl}/home?mp3=${encodeURIComponent(
      this.mp3Url
    )}&image=${encodeURIComponent(this.imageUrl)}&name=${encodeURIComponent(
      this.trackName
    )}`;
  }

  copyToClipboard() {
    if (this.shareableLink) {
      navigator.clipboard.writeText(this.shareableLink);
      alert("Link copied to clipboard!");
    }
  }
}
