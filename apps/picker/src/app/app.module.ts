import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConstantsModule } from '@picker/constants';
import { FrameworksModule } from './frameworks/frameworks.module';
import { HomeModule } from './home/home.module';
import { JavascriptModule } from './javascript/javascript.module';
import { PlatformModule } from '@angular/cdk/platform';
import { InterceptorService } from '@picker/core-data';
import { MaterialModule } from '@picker/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConstantsModule,
    HomeModule,
    JavascriptModule,
    PlatformModule,
    FrameworksModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
