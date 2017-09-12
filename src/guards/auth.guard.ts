import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppSettingsService } from '../app/webrtc/services/app.settings.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private appSettingsService: AppSettingsService,
    ) {
    }

    canActivate() {
        if (this.appSettingsService.getIsLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
