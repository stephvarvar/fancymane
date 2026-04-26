import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
   nav = document.body.querySelector('.navbar-nav')


  toggleNav(){
    this.nav?.addEventListener('click', () => {
      this.nav?.classList.toggle('hidden')
    })

    console.log(this.nav?.classList)
    console.log("im clicking but its not working")
  }

}