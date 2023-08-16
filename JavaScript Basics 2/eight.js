function calculateRemainingDays(eventDate) {
    const currentDate = new Date() // in milisecond
    const eventDateandtime = new Date(eventDate) 
    const timeDifference = eventDateandtime - currentDate // in milisecond
    const daysRemaining = Math.ceil(timeDifference / (1000*60*60*24))
    return daysRemaining
}

let eventDate = "2023-08-26"
console.log(calculateRemainingDays(eventDate));