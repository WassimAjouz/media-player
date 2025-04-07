import { Routes } from "@angular/router";
import { MediaPlayerComponent } from "./media-player/media-player.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import { ThemeOptionsComponent } from "./theme-options/theme-options.component";

export const routes: Routes = [
  { path: "home", component: MediaPlayerComponent, canActivate: [AuthGuard] }, // Home Page
  {
    path: "theme-options",
    component: ThemeOptionsComponent,
    canActivate: [AuthGuard],
  }, // Home Page
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  }, // Dashboard
  { path: "login", component: LoginComponent }, // Dashboard
];
