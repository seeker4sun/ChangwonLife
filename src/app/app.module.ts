import { NgModule    } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';

import { PthLimitToPipe } from './pipes/pth-limit-to/pth-limit-to.pipe';
import { PthFilterPipe  } from './pipes/pth-filter/pth-filter.pipe';
import { PthOrderByPipe } from './pipes/pth-orderBy/pth-order-by.pipe';

import { PthFilterComponent  } from './component/pth-filter/pth-filter.component';
import { PthLimitToComponent } from './component/pth-limit-to/pth-limit-to.component';
//import { PthOrderByComponent } from './component/pth-order-by/pth-order-by.component';
import { PthBuiltInValidatorComponent } from './component/pth-built-in-validator/pth-built-in-validator.component';
import { PthElementStatusComponent    } from './component/pth-element-status/pth-element-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PthLimitToPipe,
    PthFilterPipe,
    PthOrderByPipe,

    PthLimitToComponent,
    PthFilterComponent,
    //PthOrderByComponent,
    PthBuiltInValidatorComponent,
    PthElementStatusComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
