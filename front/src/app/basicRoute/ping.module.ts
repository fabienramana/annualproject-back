import { NgModule } from '@angular/core';


import { PingComponent } from './ping/ping.component';
import { PingRoutingModule } from './ping-routing.module';

@NgModule({
  declarations: [PingComponent],
  imports: [PingRoutingModule],
  exports: [],
})
export class BasicRouteModule {}
