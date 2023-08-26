var employees = [
    {
        id:1,
        employementId:1001,
        salary:90000,
        status:true,


        details:{
            firstName:"sachin",
            lastName:"tendulkar",
            age:45,
            bloodGroup:"B+",
            gender:"male",
            isMarried:true,
            child:2,
            //address:{
        },
        experiances:[
            {
                id:1,
                companyName:"infosys",
                designation:"software engineer",
                salary:50000,
                joiningDate:"01-01-2000",
                releavingDate:"01-01-2005",
            },
            {
                id:2,
                companyName:"tcs",
                designation:"software engineer",
                salary:50000,
                joiningDate:"01-01-2005",
                releavingDate:"01-01-2010",
            }
        ]

    },
    {
        id:2,
        employementId:1002,
        salary:120000,
        status:true,


        details:{
            firstName:"Mahendra",
            lastName:"singh dhoni",
            age:40,
            bloodGroup:"B+",
            gender:"male",
            isMarried:true,
            child:1,
            //address:{
        },
        experiances:[
            {
                id:1,
                companyName:"infosys",
                designation:"software engineer",
                salary:50000,
                joiningDate:"01-01-2000",
                releavingDate:"01-01-2005",
            },
        ]

    }
]


employees.forEach((emp)=>{

    console.log(emp.details.firstName + " " + emp.details.lastName);
    console.log("AGE",emp.details.age);
    console.log("GNEDER",emp.details.gender)
    console.log("exp",emp.experiances)
    console.log("------------------------------")
    emp.experiances.forEach((exp)=>{
        console.log("company name",exp.companyName)
        console.log("designation",exp.designation)
        console.log("salary",exp.salary)
        console.log("joining date",exp.joiningDate)
        console.log("releaving date",exp.releavingDate)
        console.log("------------------------------")
    })
    console.log("------------------------------")
})