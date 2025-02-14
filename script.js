onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const nobtn = document.getElementById("nobtn");
  const yesbtn = document.getElementById("yesbtn");
  const ynocontainter = document.getElementById("yno-containter");
  const margin = 50;
  const popup = document.getElementById('gifPopup');
  
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      nobtn.style.display = "inline-block";
      yesbtn.style.display = "inline-block";

      openBtn.style.display = "none";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
      openBtn.style.display = "inline-block";
  });

//   nobtn.addEventListener("mouseover", () => {
//     const maxX = window.innerWidth - nobtn.clientWidth - 20;
//     const maxY = window.innerHeight - nobtn.clientHeight - 20;
//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     nobtn.style.left = `${randomX}px`;
//     nobtn.style.top = `${randomY}px`;
// });
  
function moveButton() {
    const buttonWidth = nobtn.offsetWidth;
    const buttonHeight = nobtn.offsetHeight;
    const safeMargin = 30; // Keeps button inside the screen
    
    const maxX = window.innerWidth - buttonWidth - safeMargin;
    const maxY = window.innerHeight - buttonHeight - safeMargin;

    // Move by a **bigger** random amount within safe bounds
    let moveX = Math.random() * 300 - 100; // Move between -100px to +100px
    let moveY = Math.random() * 300 - 100; // Move between -100px to +100px

    let currentX = nobtn.offsetLeft + moveX;
    let currentY = nobtn.offsetTop + moveY;

    // Prevent button from moving off-screen
    currentX = Math.max(safeMargin, Math.min(currentX, maxX));
    currentY = Math.max(safeMargin, Math.min(currentY, maxY));

    nobtn.style.left = `${currentX}px`;
    nobtn.style.top = `${currentY}px`;
}
nobtn.addEventListener('mouseover', moveButton);
nobtn.addEventListener('touchstart', moveButton);


// Show popup when button is clicked
yesbtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close the popup
function closePopup() {
    popup.style.display = 'none';
}
// window.onload = moveButton;