import { Component } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joke';
  joke = "";
  
  constructor(private jokeService:JokeService){

  }

  getJoke(){
    this.jokeService.get().subscribe(response => {
      this.joke = response.joke;
    })
  }
}
