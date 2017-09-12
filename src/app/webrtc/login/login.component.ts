import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { AppSettingsService } from '../services/app.settings.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private model: any = {};
    private loading = false;
    private error = '';

    constructor(
        private router: Router,
        private socketService: SocketService,
        private appSettingsService: AppSettingsService,
    ) {

    }

    ngOnInit() {

    }

    login() {
        this.loading = true;
        this.socketService.login(this.model.username)
            .subscribe(result => {
                if (result.success) {
                    this.appSettingsService.setUsername(this.model.username);
                    this.appSettingsService.setIsLoggedIn(true);
                    this.router.navigate(['']);
                } else {
                    this.error = result.msg;
                    this.loading = false;
                }
            });
    }
}
