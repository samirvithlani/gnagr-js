var main = document.getElementById("main")
var ptag = document.createElement("p")
ptag.innerHTML = "Hello World"
main.appendChild(ptag)

var users = [
    {
        id:1,
        name:"John",
    },
    {
        id:2,
        name:"Mary",
    },
]
function showlist(){

    var listTag = document.getElementById("list")
    var ulTag = document.createElement("ul")
    for(var i=0;i<users.length;i++){
        var liname = document.createElement("li")
        var liid = document.createElement("li")
        liid.innerHTML = users[i].id
        liname.innerHTML = users[i].name
        ulTag.appendChild(liid)
        ulTag.appendChild(liname)
        
    }

    listTag.appendChild(ulTag)


}

function showtable1(){

    var tbodytag = document.getElementById("users") //tbody..
    for(var i=0;i<users.length;i++){
        var trtag = document.createElement("tr")
        var td11 = document.createElement("td")
        var td22 = document.createElement("td")
        td11.innerHTML = users[i].id
        td22.innerHTML = users[i].name
        trtag.appendChild(td11)
        trtag.appendChild(td22)
        tbodytag.appendChild(trtag)
    }
    


}
function showtable(){

    var tabletag = document.getElementById("table") //table..
    var theadtag = document.createElement("thead") //thead..
    var th1 = document.createElement("th")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    td1.innerHTML = "ID"
    td2.innerHTML = "Name"
    th1.appendChild(td1)
    th1.appendChild(td2)
    theadtag.appendChild(th1)
    tabletag.appendChild(theadtag)

    var tbodytag = document.createElement("tbody") //tbody..
    for(var i=0;i<users.length;i++){
        var trtag = document.createElement("tr")
        var td11 = document.createElement("td")
        var td22 = document.createElement("td")
        td11.innerHTML = users[i].id
        td22.innerHTML = users[i].name
        trtag.appendChild(td11)
        trtag.appendChild(td22)
        tbodytag.appendChild(trtag)
    }
    tabletag.appendChild(tbodytag)

    
    
}