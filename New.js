"use strict"

class MyDate {
    constructor(year = 1970, month = 0, date = 1, hours = 0, minutes = 0, seconds = 0, mliseconds = 0) {
        this._year = year
        this._month = month
        this._date = date
        this._hour = hours
        this._minutes = minutes
        this._seconds = seconds
        this._miliseconds = mliseconds
    }
    set year(value) {
        this._year = value
    }
    get year() {
        return this._year
    }
    set month(value) {
        this.year += Math.floor(value / 12)
        this._month += value % 12
    }
    get month() {

        return this._month

    }
    set date(value) {
        let index = 0
        let mountCount = 0
        let dayMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        while (value > dayMonth[index]) {
            value -= dayMonth[index]
            index += 1
            mountCount += 1
            if (index > 11) {
                index -= 12
            }
        }
        this.month += mountCount
        return this._date = value

    }


    get date() {
        return this._date
    }
    set hours(value) {
        this.date += Math.floor(value / 24)
        this._hour = value % 24
    }
    get hours() {
        return this._hour
    }
    set minutes(value) {
        this.hours += Math.floor(value / 60)
        this._minutes = value % 60
    }
    get minutes() {
        return this._minutes
    }
    set seconds(value) {
        this.minutes += Math.floor(value / 60)
        this._seconds = value % 60
    }
    get seconds() {
        return this._seconds
    }
    set miliseconds(value) {
        this.seconds += Math.floor(value / 1000)
        this._miliseconds = value % 1000
    }
    get miliseconds() {
        return this._miliseconds
    }
};

class MyNewDate extends MyDate {
    constructor() {
        super()
        this._day = 1
    }
    get day() {
        this._day = Math.ceil(this.date / 7)
        if (this.date <= 7) {
            this._day = this.date
        }
        switch (this._day) {
            case 1:
                this._day = "Monday";
                break;
            case 2:
                this._day = "Tuesday";
                break;
            case 3:
                this._day = "Wednesday";
                break;
            case 4:
                this._day = "Thursday";
                break;
            case 5:
                this._day = "Friday";
            case 6:
                this._day = "Saturday";
                break;
            case 7:
                this._day = "Sunday";
                break;
        }
        return this._day
    }

    get fulldate() {
        switch (this._month) {
            case 0:
                this._month = "Janury";
                break;
            case 1:
                this._month = "February";
                break;
            case 2:
                this._month = "March";
                break;
            case 3:
                this._month = "April";
                break;
            case 4:
                this._month = "May";
                break;
            case 5:
                this._month = "June";
                break;
            case 6:
                this._month = "July";
                break;
            case 7:
                this._month = "August";
                break;
            case 8:
                this._month = "September";
                break;
            case 9:
                this._month = "October";
                break;
            case 10:
                this._month = "November";
                break;
            case 11:
                this._month = "December";
                break;
        }
        return `${this.day}  ${this.year} ${this.month}  ${this.date}  ${this.hours}:${this.minutes}:${this.seconds}`
    }
}

let x = new MyNewDate()
x.miliseconds = 1000*60*60*24*600
console.log(x.fulldate);