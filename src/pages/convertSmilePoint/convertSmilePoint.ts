import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-convertSmilePoint',
  templateUrl: 'convertSmilePoint.html'
})
export class ConvertSmilePointPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser,public atrCtrl: AlertController) {
  }

openWebPage(url){
  
  const options: InAppBrowserOptions = {
    zoom:'no'
  }
  const browser = this.inAppBrowser.create(url,'_self',options);
  
}  
  private currentNumber = 0; 
  private currentSmilePoint = 100;
  private currentEsticker = 10000;
  private amountSmilePoint = 0;

  private increment () {
    if(this.currentEsticker>800){
    this.currentNumber=this.currentNumber+800;
    this.currentSmilePoint = this.currentSmilePoint+1;
    this.amountSmilePoint=this.amountSmilePoint+1;
    this.currentEsticker = this.currentEsticker-800; 
    this.currentNumber;
    this.currentSmilePoint;
    this.currentEsticker;
    this.amountSmilePoint;
    }else{
      return this.currentEsticker;
    }

  }  
  private decrement () { 
    if(this.currentNumber*1>0){
    this.currentNumber= this.currentNumber-800;
    this.currentSmilePoint = this.currentSmilePoint-1;
    this.amountSmilePoint=this.amountSmilePoint-1;
    this.currentEsticker = this.currentEsticker+800;
    this.currentNumber;
    this.currentSmilePoint;
    this.currentEsticker;
    this.amountSmilePoint;    
    }else{
      return this.currentNumber;
    }
  }  
  
  showConfirmAlert() {
    let alertConfirm = this.atrCtrl.create({
      title: '',
      subTitle:'ต้องการแลก E-Sticker เป็น Smile Point จำนวน&nbsp;' + this.amountSmilePoint +'&nbsp;point ?',
      message: '',
      cssClass: 'method-color',
      buttons: [
        {
          text: 'No',            
          role: 'cancel',              
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
          }
        }
      ]
    });
    alertConfirm.present();
  }
} 


