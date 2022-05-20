function getCookie(){
    console.log("cookie: " + document.cookie);
    return document.cookie;
}
function emptyCookie(){
    document.cookie = "";
}
function showHint() {
    document.getElementById("hint").style.display = "block";
  }
  
  const startingMinutes = 30; //set minutes
  let time = startingMinutes * 60;
  var rediredct = "exams/result.html"
  const countdownEl = document.getElementById('countdown');
  
  setInterval(updateCountdown, 1000);
  
  function updateCountdown() {
      if(time > 0){
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
  
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      countdownEl.innerHTML = `${minutes}: ${seconds}`;
      time--;
      }else{
          window.location.href = rediredct
      }
  }