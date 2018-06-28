import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { TrainerComponent } from './trainer/trainer.component';

@NgModule({
 declarations: [
   AppComponent,
   LoginComponent,
   AdminComponent,
   HomeComponent,
   TrainerComponent
  
   
 ],
 imports: [
   BrowserModule,
   FormsModule,
   RouterModule.forRoot([
     {
       path:'',
       component: HomeComponent
     },
     {
       path:'login',
       component:LoginComponent
       
    
     },
     {
       path:'admin',
       component:AdminComponent
     },
     {
      path:'trainer',
      component:TrainerComponent
    }
    
   ])
 ],
 providers: [],
 bootstrap: [AppComponent]
})

export class AppModule { }


