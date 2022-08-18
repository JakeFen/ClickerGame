import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Guards
import { GameGuard } from './core/guards/app.gameGuard';

// Features
import { MenuComponent } from './features/menu//menu.component';
import { GameComponent } from './features/game/game.component';
import { SummoningComponent } from './features/game/components/summoning/summoning.component';
import { WeaponsmithingComponent } from './features/game/components/weaponsmithing/weaponsmithing.component';
import { ArmoringComponent } from './features/game/components/armoring/armoring.component';
import { FletchingComponent } from './features/game/components/fletching/fletching.component';
import { ArcanaComponent } from './features/game/components/arcana/arcana.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu',
  },
  {
    path: 'menu',
    pathMatch: 'full',
    component: MenuComponent,
  },
  {
    path: 'game',
    pathMatch: 'full',
    canActivate: [GameGuard],
    component: GameComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    SummoningComponent,
    WeaponsmithingComponent,
    ArmoringComponent,
    FletchingComponent,
    ArcanaComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
