import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Guards
import { GameGuard } from './core/guards/app.gameGuard';

// Features
import { MenuComponent } from './features/menu//menu.component';
import { GameComponent } from './features/game/game.component';
import { Routes, RouterModule } from '@angular/router';

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
  declarations: [AppComponent, MenuComponent, GameComponent],
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
