import { TestBed } from '@angular/core/testing';
import { routes } from './app.routes';
import { provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('App routes', () => {
  let router: Router;
  let location: Location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to "about" redirects to "/about"', async () => {
    await router.navigate(['about']);
    expect(location.path()).toBe('/about');
  });

  it('should navigate to "pricing" redirects to "/pricing"', async () => {
    await router.navigate(['pricing']);
    expect(location.path()).toBe('/pricing');
  });

  it('should navigate to "contact" redirects to "/contact"', async () => {
    await router.navigate(['contact']);
    expect(location.path()).toBe('/contact');
  });

  it('should navigate to "pokemons/page/1" redirects to "/pokemons/page/1"', async () => {
    await router.navigate(['pokemons/page/1']);
    expect(location.path()).toBe('/pokemons/page/1');
  });

  it('should navigate to "pokemons/1" redirects to "/pokemons/1"', async () => {
    await router.navigate(['pokemons/1']);
    expect(location.path()).toBe('/pokemons/1');
  });

  it('should navigate to "unknown-page" redirects to "/about"', async () => {
    await router.navigate(['unknown-page']);
    expect(location.path()).toBe('/about');
  });

  it('Should load the proper component', async () => {
    const aboutRoute = routes.find((route) => route.path === 'about')!;
    expect(aboutRoute).toBeDefined();
    const aboutComponent = (await aboutRoute.loadComponent!()) as any;
    expect(aboutComponent.default.name).toBe('AboutPageComponent');

    const pokemonsPageRoute = routes.find(
      (route) => route.path === 'pokemons/page/:page'
    )!;
    expect(pokemonsPageRoute).toBeDefined();
    const pokemonsPageComponent =
      (await pokemonsPageRoute.loadComponent!()) as any;
    expect(pokemonsPageComponent.default.name).toBe('PokemonsPageComponent');

    const pokemonPageRoute = routes.find(
      (route) => route.path === 'pokemons/:id'
    )!;
    expect(pokemonPageRoute).toBeDefined();
    const pokemonPageComponent =
      (await pokemonPageRoute.loadComponent!()) as any;
    expect(pokemonPageComponent.default.name).toBe('PokemonPageComponent');

    const pricingRoute = routes.find((route) => route.path === 'pricing')!;
    expect(pricingRoute).toBeDefined();
    const pricingComponent = (await pricingRoute.loadComponent!()) as any;
    expect(pricingComponent.default.name).toBe('PricingPageComponent');

    const contactRoute = routes.find((route) => route.path === 'contact')!;
    expect(contactRoute).toBeDefined();
    const contactComponent = (await contactRoute.loadComponent!()) as any;
    expect(contactComponent.default.name).toBe('ContactPageComponent');
  });
});
