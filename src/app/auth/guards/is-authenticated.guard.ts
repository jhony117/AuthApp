import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {





  // console.log('isAuthtenticatedGuard');
  // console.log({route, state});

// Guards como funciones y como clases  =>
//       Investigar ventajas y desventaajs

  const authservice = inject(AuthService);
const router = inject(Router);


   if (authservice.authStatus() === AuthStatus.authenticated) return true;

  //  if(authservice.authStatus() === AuthStatus.checking){
  //   return false;
  //  }

  // const url = state.url;
  // localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login');


  return false;
};
