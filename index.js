/* Your Code Here */
function createEmployeeRecord(record) {
    let employeeRecord = {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    //to seee the results we call our variable employeeRecord
    return employeeRecord;
}
function createEmployeeRecords(employees) {
    let employeeRecords = [];
    for (let employee of employees) {
        employeeRecords.push(createEmployeeRecord(employee));
    }
    return employeeRecords;
}
function createTimeInEvent(date) {
    let inEvent = {
        type: "TimeIn",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    }
    this.timeInEvents.push(inEvent);
    return this;
}
function createTimeOutEvent(date) {
    let outEvent = {
        type: "TimeOut",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    }
    this.timeOutEvents.push(outEvent);
    return this;
}
// since we have the in and out time lets find the hours worked on a specific date
let hoursWorkedOnDate = function(workDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === workDate
    })
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === workDate
    })
    return (outEvent.hour - inEvent.hour) / 100
}
let wagesEarnedOnDate = function(dateSought){
    let newPay = hoursWorkedOnDate.call(this, dateSought)
        *this.payPerHour
    return parseFloat(newPay.toString())
}
let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}
// calculatePayrol returns array employees and the pay owed
var calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(cost, records1){
        return cost + allWagesFor.call(records1)
    }, 0)
}









const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

