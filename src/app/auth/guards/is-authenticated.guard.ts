import { CanActivateFn } from '@angular/router';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  console.log('isAuthtenticatedGuard');
  console.log({route, state});

// Guards como funciones y como clases  =>
//       Investigar ventajas y desventaajs

  return true;
};
