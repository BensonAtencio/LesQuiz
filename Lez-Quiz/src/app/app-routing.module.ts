import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'eng-module',
    loadChildren: () => import('./pages/eng-module/eng-module.module').then( m => m.EngModulePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'fil-module',
    loadChildren: () => import('./pages/fil-module/fil-module.module').then( m => m.FilModulePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'math-module',
    loadChildren: () => import('./pages/math-module/math-module.module').then( m => m.MathModulePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sci-module',
    loadChildren: () => import('./pages/sci-module/sci-module.module').then( m => m.SciModulePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
