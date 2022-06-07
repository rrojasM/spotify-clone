import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () =>
      import('@modules/tracks/tracks.module').then((m) => {
        return m.TracksModule;
      }),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('@modules/favorites/favorites.module').then((m) => {
        return m.FavoritesModule;
      }),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('@modules/history/history.module').then((m) => {
        return m.HistoryModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
