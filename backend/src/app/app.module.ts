import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";

import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
