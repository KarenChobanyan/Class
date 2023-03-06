"use strict"

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class MyDate {
    _year = 1970
    _month = 0
    _date = 1
    _hour = 0
    _minutes = 0
    _seconds = 0
    _miliseconds = 0
    set year(value) {
        this._year = value
    }
    get year() {
        return this._year
    }
    set month(value) {
        this.year += Math.floor(value / 12)
        this._month = value % 12
    }
    get month() {
        return this._month
    }
    set date(value) {
        let dayMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        while (value > dayMonth[this.month]) {
            value -= dayMonth[this.month]
            this.month++
        }
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
    _day = this.date
    get day() {
        this._day = Math.ceil(this.date / 7)
        if (this.date <= 7) {
            this._day = this.date
        }
        return this._day = weekDays[this._day]
    }
    get fulldate() {
        this._month = monthNames[this._month]
        return `${this.day}  ${this.year} ${this.month}  ${this.date}  ${this.hours}:${this.minutes}:${this.seconds}`
    }
}

let x = new MyNewDate()
x.date = 691
console.log(x.fulldate);