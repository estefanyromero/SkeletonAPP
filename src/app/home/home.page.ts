import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { fadeSlideIn } from '../shared/animaciones';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
  animations: [fadeSlideIn],
})
export class HomePage implements OnInit {

  nombreUsuario: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: string = '';
  animarNombre: boolean = false;
  animarApellido: boolean = false;

  constructor(private route: ActivatedRoute, private alertController: AlertController) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombreUsuario = params['usuario'] || '';
    });
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.fechaNacimiento = '';

    // Activar animación
    this.animarNombre = true;
    this.animarApellido = true;

    // Desactivar animación después de 500ms
    setTimeout(() => {
      this.animarNombre = false;
      this.animarApellido = false;
    }, 500);
  }


  async mostrarDatos() {
    const alert = await this.alertController.create({
      header: 'Datos Ingresados',
      message: `Nombre: ${this.nombre}<br>Apellido: ${this.apellido}`,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}

