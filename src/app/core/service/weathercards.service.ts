import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable, Input } from "@angular/core";
import { Observable, Subject, map } from "rxjs";
import { weathercard } from "src/app/components/weathercards/weathercard.model";
import { WeathercardsComponent } from "src/app/components/weathercards/weathercards.component";


@Injectable({
    providedIn: 'root'
})
export class weatheCardService {
    baseUrl1 = environment.baseUrl1
    baseUrl2 = environment.baseUrl2
    cityname:string="London"
    constructor (private http: HttpClient){}
    weatherCards:weathercard[]=[]    
    getCity(): Observable<any>{
        return this.http.get<weathercard[]>(this.baseUrl1+this.cityname+this.baseUrl2)
        
        
    }
    getWeatherSearch(cityName:string): Observable<weathercard[]>{
        console.log(cityName)
        return this.http.get<weathercard[]>(this.baseUrl1+cityName+this.baseUrl2)
    }

}