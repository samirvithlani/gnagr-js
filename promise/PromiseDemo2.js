const bookTicket =()=>{


    var noOfTickets = 100;
    var ticketBooked = 150;

    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(noOfTickets>=ticketBooked){
                resolve("Tickets Booked")
            }
            else{
                reject("Tickets not Booked")
            }

        },5000)

    })

    console.log("Promise",promise)
    

    promise.then((data)=>{
        console.log("Promise Resolved",data)
        console.log("send the tickets")
    })
    promise.catch((error)=>{
        console.log("Promise Rejected",error)
        console.log("unblock the seats")
        console.log("try again")
        
    })




}
bookTicket()