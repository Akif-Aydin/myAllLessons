
var caption = document.getElementById("caption");
var button_girls = document.getElementById("button-girls"); 
var button_boys = document.getElementById("button-boys");
var odd_rows = document.getElementsByClassName("odd-rows");
var even_rows = document.getElementsByClassName("even-rows");
var Book = document.getElementsByClassName("Book");
var Sport = document.getElementsByClassName("Sport");


button_boys.onclick = function() {                                     

    caption.style.backgroundColor = "cornflowerblue";     
    odd_rows[0].style.backgroundColor = "cornflowerblue";
    odd_rows[1].style.backgroundColor = "cornflowerblue";
    odd_rows[2].style.backgroundColor = "cornflowerblue";
    even_rows[0].style.backgroundColor = "white";
    even_rows[1].style.backgroundColor = "white";
    button_boys.style.visibility = "hidden";
    button_girls.style.visibility = "visible";
    button_girls.innerHTML = "Change the girls";
    Book[0].innerHTML = "Book";
    Book[1].innerHTML = "Book";
    Book[2].innerHTML = "Book";
    Book[3].innerHTML = "Book";
    Book[4].innerHTML = "Book";
    Book[0].style.color = "darkblue";
    Book[1].style.color = "darkblue";
    Book[2].style.color = "darkblue";
    Book[3].style.color = "darkblue";
    Book[4].style.color = "darkblue";

    Sport[0].innerHTML = "";
    Sport[1].innerHTML = "";
    Sport[2].innerHTML = "";
    Sport[3].innerHTML = "";
    Sport[4].innerHTML = "";


}

button_girls.onclick = function() {
    caption.style.backgroundColor = "pink";
    even_rows[0].style.backgroundColor = "pink";
    even_rows[1].style.backgroundColor = "pink";
    odd_rows[0].style.backgroundColor = "white";
    odd_rows[1].style.backgroundColor = "white";
    odd_rows[2].style.backgroundColor = "white";

    button_girls.style.visibility = "hidden";
    button_boys.style.visibility = "visible";
    button_boys.innerHTML = "Change the boys";
    Sport[0].innerHTML = "Sport";
    Sport[1].innerHTML = "Sport";
    Sport[2].innerHTML = "Sport";
    Sport[3].innerHTML = "Sport";
    Sport[4].innerHTML = "Sport";
    Sport[0].style.color = "darkmagenta"
    Sport[1].style.color = "darkmagenta"
    Sport[2].style.color = "darkmagenta"
    Sport[3].style.color = "darkmagenta"
    Sport[4].style.color = "darkmagenta"
    Book[0].innerHTML = "";
    Book[1].innerHTML = "";
    Book[2].innerHTML = "";
    Book[3].innerHTML = "";
    Book[4].innerHTML = "";
    
}





