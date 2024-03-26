import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

//publicGuard - PrivatGuard 
    //* nombres recomendados para estod guards de aqui


export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {





  // console.log('isAuthtenticatedGuard');
  // console.log({route, state});

// Guards como funciones y como clases  =>
//       Investigar ventajas y desventaajs

  const authservice = inject(AuthService);
const router = inject(Router);


   if (authservice.authStatus() === AuthStatus.authenticated){
    router.navigateByUrl('/dashboard');
    return true;}

  
  router.navigateByUrl('/auth/login');


  return true;
};
