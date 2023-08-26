var employees = [
    {
        id:1,
        name:"ram",
        add:{
            city:"indore",
            state:"MP"
        }

    },
    {
        id:2,
        name:"neha",
        add:{
            city:"bhopal",
            state:"MP"
        }
    }
]

employees = employees.map((emp)=>{
    return{
        id:emp.id,
        name:emp.name.toUpperCase(),
        add:{
            city:emp.add.city.toUpperCase(),
            state:emp.add.state.toUpperCase()
        }
    }
})
console.log(employees);