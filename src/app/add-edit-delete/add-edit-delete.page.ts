import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-delete',
  templateUrl: './add-edit-delete.page.html',
  styleUrls: ['./add-edit-delete.page.scss'],
})
export class AddEditDeletePage implements OnInit {

  id : String;
  post : any = {};
  constructor(private toastCtrl : ToastController, private http: HttpClient, private loadCtrl: LoadingController) { }

  ngOnInit() {
  }

  public async loaderPresent(): Promise<any>{
    const loading = await this.loadCtrl.create({
      message: "Loading ...",
      backdropDismiss: true
    });
    await loading.present();
    return loading;
  }

  async Add(){
    let loading = await this.loaderPresent();
    this.http.post("https://reqres.in/api/users", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        message: "ID for new Item is " + res.id
      }).then(l => l.present())
      if (loading){
        loading.dismiss();
      }
    })
  }

  async Edit(){
    let loading = await this.loaderPresent();
    this.http.put("https://reqres.in/api/users/" + this.id, this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        message: "ID  " + this.id + " Edited"
      }).then(l => l.present())
      if (loading){
        loading.dismiss();
      }
    })
  }

  async Delete(){
    let loading = await this.loaderPresent();
    this.http.delete("https://reqres.in/api/users/" + this.id, this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        message: "ID  " + this.id + " Deleted"
      }).then(l => l.present())
      if (loading){
        loading.dismiss();
      }
    })
  }
}
