function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
function displayalert(){
    alert("The Followers count has been reset")
}
let count=0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function resetCount(){
    count=0;
    displayCount();
    displayalert();
}