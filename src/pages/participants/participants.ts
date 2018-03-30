import { Component, Inject } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ParticipantsService } from '../../app/participants.service';

@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    @Inject(ParticipantsService) public participantsService: ParticipantsService
  ) { }

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
          handler: data => { this.participantsService.addParticipant(data); } 
        }
      ]
    });
    prompt.present();
  }

  getParticipants(): any[] {
    return this.participantsService.getParticipants();
  }

}
