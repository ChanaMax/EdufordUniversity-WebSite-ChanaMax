 /* Side NavLinks */

 var navLinks = document.getElementById("navLinks");

 function showMenu() {
     navLinks.style.right = "0";
 }

 function hideMenu() {
     navLinks.style.right = "-200px";
 }


 /* Cursor Animation */



 const cursor = document.querySelector('.cursor ');

 document.addEventListener('mousemove', e => {
     cursor.setAttribute("style", "top:" + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")

 })

 document.addEventListener('click', () => {
     cursor.classList.add("expand");

     setTimeout(() => {
         cursor.classList.remove("expand");
     }, 500)
 })