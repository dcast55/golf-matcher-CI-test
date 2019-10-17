import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/Scores.component';
import { PlayersComponent } from './players/players.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

import { NgbAuthFirebaseUIModule } from '@firebaseui/ng-bootstrap';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';

import { TeamsComponent } from './teams/teams.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PlayersComponent,
    PlayerAddComponent,
    PlayerEditComponent,
    DashboardComponent,
    ScoresComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTemplateModule,
    RouterModule.forRoot([
      { path: 'scores', component: ScoresComponent },
      { path: 'test', component: PlayerEditComponent },
      { path: 'players', component: PlayersComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
