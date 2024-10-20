// document.getElementById("toggle-mode").addEventListener("click", function() {
//     document.body.classList.toggle("light-mode");
// });
document.getElementById("switch").addEventListener("change", function() {
    document.body.classList.toggle("light-mode");
});


function clocknew() {
    const date= new Date();
    const hours=date.getHours().toString().padStart(2, 0);
    const minutes=date.getMinutes().toString().padStart(2, 0);
    const seconds=date.getSeconds().toString().padStart(2, 0);
    document.getElementById("hour").textContent=hours;
    document.getElementById("minut").textContent=minutes;
    document.getElementById("second").textContent=seconds;
}
clocknew();
setInterval(clocknew,1000);



