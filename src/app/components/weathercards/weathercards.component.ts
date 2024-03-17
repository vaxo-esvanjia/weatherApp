import { Component, Input, OnInit } from '@angular/core';
import { weathercard } from './weathercard.model';
import { weatheCardService } from 'src/app/core/service/weathercards.service';

@Component({
  selector: 'app-weathercards',
  templateUrl: './weathercards.component.html',
  styleUrls: ['./weathercards.component.css']
})
export class WeathercardsComponent implements OnInit {
  cityName:string=''
  lat:any=''
  lon:any=''
  cardsArr:weathercard[]=[]
  
  constructor(private weatherCardservie:weatheCardService) { }

  ngOnInit(): void {
    this.weatherCardservie.getCity().subscribe(weathercard=>{
      this.cardsArr = weathercard
      console.log(this.cardsArr)
  
      
    })
    


    
  }
  search(){
    this.weatherCardservie.getWeatherSearch(this.cityName).subscribe(weathercard=>{
      this.cardsArr = weathercard
      console.log(this.cardsArr)
      for(var i of this.cardsArr){
        console.log(i.lat)
      }

    })
    console.log(this.cityName)
  }

}
