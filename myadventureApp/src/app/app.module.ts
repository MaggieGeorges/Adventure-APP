// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesService } from './services.service';
import { DirectivesDirective } from './directives.directive';
import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';
import { PipePipe } from './pipe.pipe';
import { appRoutes } from './app.routes'; // Import routes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    DirectivesDirective,
    SpinningWheelComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Configure routes
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  inputValue: string = '';
}