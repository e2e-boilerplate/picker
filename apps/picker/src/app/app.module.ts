import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConstantsModule } from '@picker/constants';
import { HomeModule } from './home/home.module';
import { PlatformModule } from '@angular/cdk/platform';
import { InterceptorService } from '@picker/core-data';
import { MaterialModule } from '@picker/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BoilerModule } from '@picker/boiler';
import { ServicesModule } from '@picker/services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConstantsModule,
    HomeModule,
    PlatformModule,
    HttpClientModule,
    MaterialModule,
    BoilerModule,
    ServicesModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
