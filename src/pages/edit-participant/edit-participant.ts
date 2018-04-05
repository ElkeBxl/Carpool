import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParticipantsService } from '../../app/participants.service';
import { Participant } from '../../app/participant';

/**
 * Generated class for the EditParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-participant',
  templateUrl: 'edit-participant.html',
})
export class EditParticipantPage {

	name: string;

	address: string;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public participantsService: ParticipantsService
	) { }

	ionViewDidLoad() {
		this.name = this.navParams.data.name;
		this.address = this.navParams.data.address;
	}

	saveParticipant($event) {
		this.participantsService.saveParticipant(new Participant({ name: this.name, address: this.address }));
		this.navCtrl.pop();
	}

}
