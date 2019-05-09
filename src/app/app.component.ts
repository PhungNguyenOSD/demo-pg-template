import { Component, OnInit } from '@angular/core';
import { SideBarItem, MenuItem, UserMenu, UserLogin } from 'pg-template/lib/pg-template.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-template';
  sideBarItems: SideBarItem[] = [
                                  {label : 'Home', logo: 'fas fa-home', url: 'home', active: false},
                                  {label : 'News', logo: 'fas fa-newspaper', url: 'news', active: false},
                                  {label : 'Contact', logo: 'fas fa-id-card', url: 'contact', active: false},
                                  {label : 'About', logo: 'fas fa-angry', url: 'about', active: false}
                                ];
  menuItems: MenuItem[] = [{label: 'Home', url: 'home'}, {label: 'Link', url: 'link'}];
  userDropdown: UserMenu = { userName: 'Phung Nguyen',
                              avatar: '../assets/image/img_avatar.png',
                                      menuItems: [{label: 'Infor', url: 'home'},
                                                  {label: 'Setting', url: 'setting'},
                                                  {label: 'Log out', url: 'log-out'}]
                                                };
  homeUrl = 'http://localhost:4200/home';
  logoImage = '../assets/image/angular-logo.png';
  color = '#000000';

  constructor(private route: Router) {
    this.routeEvent(this.route);
  }

  ngOnInit(): void {
  }

  onLogin(event: UserLogin) {
    console.log(event);
    this.userDropdown.userName = event.username;
  }

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.sideBarItems.forEach(item => {
          if (this.route.url === `/${item.url}`) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
      }
    });
  }
}
