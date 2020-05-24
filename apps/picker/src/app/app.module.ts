import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConstantsModule } from '@picker/constants';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { HomeModule } from './home/home.module';
import { InterceptorService } from '@picker/core-data';
import { MaterialModule } from '@picker/material';

@NgModule({
  declarations: [AppComponent, FrameworksComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConstantsModule,
    HomeModule,
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
