const targetDate = new Date("August 2, 2025 00:00:00").getTime();

const countDown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "Vaxt bitdi!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); //*mesafeni 1 gune qaliqli bolur ve qalan hisseni saxlayir qalan hissede milli saniyelerle saat gostericisi olur ve bize saati getirir
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(days, hours, minutes, seconds);
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
};
countDown();
setInterval(countDown, 1000);
