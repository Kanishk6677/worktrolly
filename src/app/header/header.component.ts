import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BackendService } from '../services/backend.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  organizationAvailable: boolean = false;

  constructor(public router: Router, public backendService: BackendService, public authService: AuthService, public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  startNewSprint() {
    this.router.navigate(['/StartNewSprint']);
  }

  startNewSession() {
    this.router.navigate(['/CreateNewSession']);
  }

  Board(){
    console.log("load Board");
    this.router.navigate(['/Board']);
  }

  myDashBoard(){
    console.log("load MyDashboard");
    this.router.navigate(["/MyDashboard"])
  }

  createTeam(){
    this.router.navigate(['/CreateTeam']);
  }

  updateTeam(){
    this.router.navigate(['/UpdateTeam', this.authService.getTeamId()]);
  }
}
