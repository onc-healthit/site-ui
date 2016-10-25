/**
 * Created by Brian on 9/20/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'site-sandbox-launcher',
    templateUrl: 'sandbox-launcher.component.html'
})

export class SandboxLauncherComponent implements OnInit {

    constructor(
        private router: Router) {}

    ngOnInit(): void {
    }
}

