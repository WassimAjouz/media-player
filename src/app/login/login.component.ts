import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  users = [];
  username = "";
  password = "";
  found: boolean = true;

  ngOnInit() {
    let sesItem = sessionStorage.getItem("users");
    this.users = JSON.parse(sesItem ? sesItem : "");
  }

  login() {
    this.found = false;

    if (this.username && this.password) {
      for (var i = 0; i < this.users.length; i++) {
        if (
          this.users[i]["userName"] == this.username &&
          this.users[i]["password"] == this.password
        ) {
          this.found = true;
          sessionStorage.setItem("isAuthenticated", "true");
          this.router.navigate(["/dashboard"], {});
        }
      }
    }
  }
}
