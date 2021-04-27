import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataPost = [];
  constructor(private toastCtrl : ToastController, private http: HttpClient, private loadCtrl: LoadingController) {}

  ionViewDidEnter(){
    this.getDataPost();
  }

  async getDataPost(){

    let loading = await this.loaderPresent();
    this.http.get("https://reqres.in/api/users").subscribe((res : any) => {
      console.log(res);
      this.dataPost = res;
      if (loading){
        loading.dismiss();
      }
    });
  }

  public async loaderPresent(): Promise<any>{
    const loading = await this.loadCtrl.create({
      message: "Loading ...",
      backdropDismiss: true
    });
    await loading.present();
    return loading;
  }


}
