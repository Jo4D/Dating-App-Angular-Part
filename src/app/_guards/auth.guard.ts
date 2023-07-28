import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
export const authGuard: CanActivateFn = (route, state) => {
  const router=  inject(Router);
const toastr=inject(ToastrService);
  const user=localStorage.getItem('user');
  if (user) {
    return true;
  }else{
    router.navigateByUrl('/');
toastr.error('you must log in first');
    return false;
  }
};
