/**
 * Created by pawelsrebrny on 28.08.16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { routing } from "./app.routing";

import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from "./hero-detail.component";
import { AppComponent } from "./app.component";
import { HeroService } from "./hero.service"
import { DashboardComponent } from "./dashboard.component";
import { HeroSearchComponent } from "./hero-search.component";

@NgModule({
    imports:
        [
            BrowserModule,
            FormsModule,
            routing,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService)
        ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        AppComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }

