import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditParticipantPage } from './edit-participant';

@NgModule({
  declarations: [
    EditParticipantPage,
  ],
  imports: [
    IonicPageModule.forChild(EditParticipantPage),
  ],
})
export class EditParticipantPageModule {}
