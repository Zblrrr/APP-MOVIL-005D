import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  usuario!: string | null;

  constructor(
    private router: Router,
    private menu: MenuController,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.usuario = this.loginService.getUsuario();
  }

  openMenu() {
    this.menu.open('end');
  }

  goToQr() {
    this.menu.close();
    this.router.navigate(['/lector-qr']);
  }

}
