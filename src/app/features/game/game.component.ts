import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SelectedSkill } from './shared/types/skills.type';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  selectedSkill: SelectedSkill = 'weaponsmithing';

  constructor(public authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
  }
}
