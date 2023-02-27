import { NgModule    } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';

import { PthLimitToPipe } from './pipes/pth-limit-to/pth-limit-to.pipe';
import { PthFilterPipe  } from './pipes/pth-filter/pth-filter.pipe';
import { PthOrderByPipe } from './pipes/pth-orderBy/pth-order-by.pipe';
import { PthSafePipe } from './pipes/pth-safe/pth-safe.pipe';

import { PthFilterComponent  } from './component/pth-filter/pth-filter.component';
import { PthLimitToComponent } from './component/pth-limit-to/pth-limit-to.component';
import { PthOrderByComponent } from './component/pth-order-by/pth-order-by.component';
import { PthBuiltInValidatorComponent } from './component/pth-built-in-validator/pth-built-in-validator.component';
import { PthElementStatusComponent    } from './component/pth-element-status/pth-element-status.component';
import { PthFormReferenceVariableComponent } from './component/pth-form-reference-variable/pth-form-reference-variable.component';
import { PthFormGroupComponent } from './component/pth-form-group/pth-form-group.component';
import { PthCustomValidatorsComponent } from './component/pth-custom-validators/pth-custom-validators.component';
import { PthFormStatusComponent } from './component/pth-form-status/pth-form-status.component';
import { PthCssKeyframesComponent } from './component/pth-css-keyframes/pth-css-keyframes.component';
import { PthMessageBoxComponent } from './component/pth-message-box/pth-message-box.component';
import { PthSlideMenuComponent } from './component/pth-slide-menu/pth-slide-menu.component';
import { PthTimingComponent } from './component/pth-timing/pth-timing.component';
import { PthInterpolationComponent } from './component/pth-interpolation/pth-interpolation.component';
import { PthInnerhtmlComponent } from './component/pth-innerhtml/pth-innerhtml.component';
import { PthTrusturlComponent } from './component/pth-trusturl/pth-trusturl.component';
import { PthTrusthtmlComponent } from './component/pth-trusthtml/pth-trusthtml.component';
import { PthTrustresourceurlComponent } from './component/pth-trustresourceurl/pth-trustresourceurl.component';
import { PthTruststyleComponent } from './component/pth-truststyle/pth-truststyle.component';
import { PthPromisePrototypeComponent } from './component/pth-promise-prototype/pth-promise-prototype.component';
import { PthPromiseMethodComponent } from './component/pth-promise-method/pth-promise-method.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PersonData } from './data/person-data';
import { PthPersonListComponent } from './component/pth-person-list/pth-person-list.component';
import { PthItemEditComponent } from './component/pth-item-edit/pth-item-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    PthLimitToPipe,
    PthFilterPipe,
    PthOrderByPipe,
    PthSafePipe,

    PthLimitToComponent,
    PthFilterComponent,
    PthOrderByComponent,
    PthBuiltInValidatorComponent,
    PthElementStatusComponent,
    PthFormReferenceVariableComponent,
    PthFormGroupComponent,
    PthCustomValidatorsComponent,
    PthFormStatusComponent,
    PthCssKeyframesComponent,
    PthMessageBoxComponent,
    PthSlideMenuComponent,
    PthTimingComponent,
    PthInterpolationComponent,
    PthInnerhtmlComponent,
    PthTrusturlComponent,
    PthTrusthtmlComponent,
    PthTrustresourceurlComponent,
    PthTruststyleComponent,
    PthPromisePrototypeComponent,
    PthPromiseMethodComponent,
    PthPersonListComponent,
    PthItemEditComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
    InMemoryWebApiModule.forRoot(PersonData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
