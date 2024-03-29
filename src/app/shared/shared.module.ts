import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {SidebarComponent} from './componets/sidebar/sidebar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ContactPageComponent} from './pages/contact-page/contact-page.component';


@NgModule({
    declarations: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
    ],
    exports: [
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactPageComponent
    ]
})
export class SharedModule {
}
