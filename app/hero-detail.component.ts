/**
 * Created by pawelsrebrny on 28.08.16.
 */
// Keep the Input import for now, we'll remove it later:
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';


@Component({
	selector: "my-hero-detail",
	templateUrl: "app/hero-detail.component.html",
	styleUrls: ['app/hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {
	hero;
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		});
	}

	goBack(): void {
		window.history.back();
	}

	save(): void{
		this.heroService.update(this.hero)
			.then(this.goBack);
	}

	delete(): void{
		this.heroService.delete(this.hero.id)
			.then(this.goBack)
	}


}


