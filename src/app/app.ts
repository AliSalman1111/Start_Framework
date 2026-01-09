import { Component, signal } from '@angular/core';

import { Home } from "./componants/home/home";
import { Navbar } from "./componants/navbar/navbar";
import { Footer } from "./componants/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Start_Framework');
}
