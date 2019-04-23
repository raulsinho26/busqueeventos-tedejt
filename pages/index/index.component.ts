import { Component, ViewChild } from '@angular/core';
import {NavController} from 'ionic-angular';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']

})

export class IndexComponent {
  
  @ViewChild('mySlider') mySlider: any;
  public contador: number = 0;
 
     constructor(public navCtrl: NavController){}
 
     slideNext(){
       this.mySlider.slideNext();
       this.contador++;
     }
 
     slidePrev(){
       this.mySlider.slidePrev();
       this.contador--;
     }
     public login():void{
        this.navCtrl.setRoot(LoginComponent);
     }
 }