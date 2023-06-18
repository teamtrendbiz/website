const popup = document.getElementById("popup-section")

AOS.init({
    duration: 800,
    offset: 20,
});

function openPopup(){
    popup.style.display = "grid";
}
function closePopup(){
    popup.style.display = "none";
}