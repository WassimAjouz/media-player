import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
  standalone: true,
})
export class HeaderComponent implements OnInit {
  sesItem: any;
  parsedItem: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.sesItem = sessionStorage.getItem("currentLinkObj");
    this.parsedItem = this.sesItem ? JSON.parse(this.sesItem) : null;
  }

  navigate(dest: string) {
    this.sesItem = sessionStorage.getItem("currentLinkObj");
    this.parsedItem = this.sesItem ? JSON.parse(this.sesItem) : null;

    if (dest == "home") {
      this.router.navigate(["/home"], {
        queryParams: {
          mp3: encodeURIComponent(this.parsedItem.mp3Url) || null,
          image: encodeURIComponent(this.parsedItem.imageUrl) || null,
          name: encodeURIComponent(this.parsedItem.trackName) || null,
        },
      });
    } else if (dest == "dashboard") {
      this.router.navigate(["/dashboard"], {});
    } else if (dest == "theme-options") {
      this.router.navigate(["/theme-options"], {});
    }
  }
}
