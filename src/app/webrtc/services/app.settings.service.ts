import { Injectable } from '@angular/core';



@Injectable()
export class AppSettingsService {

    private URL: string = 'http://localhost:3000';
    private username: string;
    private isLoggedIn: boolean;

    constructor() {
        this.isLoggedIn = false;
    }

    public getURL(): string {
        return this.URL;
    }


    public getUsername(): string {
        return this.username;
    }

    public getIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }


    public setUsername(username: string): void {
        this.username = username;
    }

    public setIsLoggedIn(isLoggedIn: boolean) {
        this.isLoggedIn = isLoggedIn;
    }
}