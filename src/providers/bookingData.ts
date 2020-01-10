import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../models/dashboardBookings';
import { map } from 'rxjs/operators';

@Injectable()
export class BookingsData {
    errorMessage: string;

    constructor(private http: HttpClient) { }

    getDashboardBookings() {
        return this.http.get('https://foodie1234.herokuapp.com/getPDPDashboard')
            .pipe(
                map(response => Object.keys(response['0']).map(function (key, index) {
                    let row = response['0'][key];
                    return new Booking(row['custName'], row['bookPax'], row['bookNotes']);
                }))
            );
    }
}
