import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      title: "Welcome to MTL Sixpacks!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "img/logo.png",
    },
    {
      title: "What is MTL Sixpacks?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "img/nature.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "img/weather.png",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
    }

}
