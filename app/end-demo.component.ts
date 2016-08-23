import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'end-demo.component',
  templateUrl: 'app/end-demo.component.html'
})
export class EndDemoComponent{
  constructor(private router: Router) {
  }
  goBack(){
    let link = ['/order/cancel_order'];
    this.router.navigate(link);
  }
}