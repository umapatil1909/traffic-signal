let currentLight = "red";
const car = document.getElementById("car");
let carPosition = 0;
let speed = 0;
function updateTrafficLight() {
  document.getElementById("redLight").classList.remove("active");
  document.getElementById("yellowLight").classList.remove("active");
  document.getElementById("greenLight").classList.remove("active");
  if (currentLight === "red") {
    document.getElementById("redLight").classList.add("active");
  } else if (currentLight === "yellow") {
    document.getElementById("yellowLight").classList.add("active");
  } else if (currentLight === "green") {
    document.getElementById("greenLight").classList.add("active");
  }
}
    function changeLight() {
      if (currentLight === "red") {
        currentLight = "green";
        speed = 4;
        setTimeout(changeLight, 3000);
      } else if (currentLight === "green") {
        currentLight = "yellow";
        speed = 1;
        setTimeout(changeLight, 1000);
      } else if (currentLight === "yellow") {
        currentLight = "red";
        speed = 0;
        setTimeout(changeLight, 3000);
      }
      updateTrafficLight();
    }
    setInterval(() => {
      carPosition += speed;
      car.style.left = carPosition + "px";
      // Reset position once the car moves off-screen
      if (carPosition > window.innerWidth) {
        carPosition = -car.offsetWidth;
      }
    }, 20);
    updateTrafficLight();
    setTimeout(changeLight, 3000);