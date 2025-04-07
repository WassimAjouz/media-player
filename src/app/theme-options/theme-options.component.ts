import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-theme-options",
  imports: [CommonModule, FormsModule],
  templateUrl: "./theme-options.component.html",
  styleUrl: "./theme-options.component.css",
})
export class ThemeOptionsComponent {
  // Default col
  color = document.documentElement.style.getPropertyValue("--main-color");
  font = document.documentElement.style.getPropertyValue("--main-font");

  saveOptions() {
    document.documentElement.style.setProperty("--main-color", this.color);
    document.documentElement.style.setProperty("--main-font", this.font);
  }
}
