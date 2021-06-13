var gold = Math.floor(Math.random() * 8)
var bomb = Math.floor(Math.random() * 8)

var count = 0
const treasure = (location) => {
count += 1
  if(location === gold){
    document.getElementById(location).innerHTML="&#x1f308"
    setTimeout(()=>{ alert("Congratulations your rich!!! It only took you " + count + " turns!!!");window.location.reload() }, 0010)
  }
  else if (location === bomb) {
   document.getElementById(location).innerHTML="&#x2620"
   setTimeout(()=>{ alert("Congratulations you have blown yourself up in " + count + " turns!!!"); window.location.reload() }, 0010)
  }
  else {
   document.getElementById(location).innerHTML="&#x1f332"
  ;
  }

}
