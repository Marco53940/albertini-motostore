import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log("Init!");
    this.isLoggedIn();
  }

  loggedIn = false;
  error = "";

  isLoggedIn() {
    if (localStorage.getItem("LOGGED") === 'true') {
      this.loggedIn = true;
    }
    console.log(localStorage.getItem("LOGGED"));
  }

  getUserInfo(data: any) {
    this.authService.login(data).subscribe(
      (user) => {
        if (user.id) {
          this.authService.setUser(user);
          this.loggedIn = true;
          localStorage.setItem("LOGGED_USER", user.name);
          localStorage.setItem("LOGGED", 'true');
        }
      },
      (error) => {
        this.error = error.error.msg;
      }
    );
  }

  Listar() {
    this.router.navigate(["listar"]);
  }
  Nuevo() {
    this.router.navigate(["add"]);
  }
  Buscar() {
    this.router.navigate(["buscar"]);
  }
}
