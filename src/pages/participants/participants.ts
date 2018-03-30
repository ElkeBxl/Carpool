import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  participants: any[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.participants = [];
    this.participants.push({ name: "Elke"});
    this.participants.push({ name: "Ines"});
  }

  addParticipant() {
    let prompt = this.alertCtrl.create({
      title: 'New participant',
      message: "Enter a name and address for this new participant",
      inputs: [
        {
          name: 'name',
          placeholder: 'Nane'
        },
        {
          name: 'address',
          placeholder: 'Address'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => { this.participants.push(data); } 
        }
      ]
    });
    prompt.present();
  }

}
