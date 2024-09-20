import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQrPage implements OnInit {
  usuario!: String;

  constructor(
    private router: Router,
    private menu: MenuController
  ) {  }

  ngOnInit() {
  }
}
