import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-mr',
  templateUrl: './random-mr.component.html',
  styleUrls: ['./random-mr.component.css']
})
export class RandomMrComponent implements OnInit {
  lastSelectedFruit = "";
  developerNames = ["Tim", "Jesús", "Raúl", "Jazzinto", "Rob", "Peter Daems", "Philip", "Jeroen"];

  link = "https://giphy.com/gifs/sad-baby-crying-jnQYWZ0T4mkhCmkzcn";
  
  constructor() { }

  ngOnInit(): void {
    this.randomGif = this.getRandomGif();
  }

  openLeftBar() {
    console.log('randomMR');
  }
  name = this.getRandomDeveloper();
  
  getRndInteger(min: number, max: number) {
    const value = Math.floor(Math.random() * (max - min)) + min;
    return value;
  }

  devString = "./../../../assets/gifs/giphy"; 
  prodString = "./assets/gifs/giphy"; 
  
  getRandomGif() {
    var randomGifNum: String = this.getRndInteger(0,11).toString();

    return this.prodString + randomGifNum + ".gif";
  }

  randomGif = "";

  getRandomDeveloper() {
    this.randomGif = this.getRandomGif();

    if (this.lastSelectedFruit != "") {
      var indexLastFruit = this.developerNames.indexOf(this.lastSelectedFruit);
      this.developerNames.splice(indexLastFruit, 1);
    }

    const randomNum = this.getRndInteger(0, this.developerNames.length);

    if (this.lastSelectedFruit != "") {
      this.developerNames.push(this.lastSelectedFruit)
    }

    this.lastSelectedFruit = this.developerNames[randomNum];

    return this.developerNames[randomNum];
  }

}
