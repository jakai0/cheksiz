//Переменный предупреждение об куки
let notifCookie = document.querySelector("#notification__cookie");


//функция для добавление куки
function set_cookie ( name, value, maxAge, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( maxAge )
  {
    cookie_string += "; max-age=" + maxAge;
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}


//функция удаление куки
function delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}


//функция получение куки
function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

//Изчесновение предупреждение об куки через время
setInterval(function(){
   notifCookie.classList.add("hide")
}, 20000)

//Изчесновение предупреждение об куки с кнопки
document.querySelector(".popup-inup__cross").onclick = () => {
   notifCookie.classList.add("hide")
}


//Переменный хедера
let header = document.querySelector("#header");
let headerWrap = document.querySelector(".header__wrap");
//Переменный прошлого скрола
let curY = 0;

//Фикc фиксированной шапки
headerWrap.style.height = `${header.clientHeight}px`


//при изменении ориентации экрана
setInterval(window.onorientationchange = () => {
   headerWrap.style.height = `${header.clientHeight}px`;
}, 10);



//Слушка скролла страницы
window.onscroll = () =>{
   const scrollY = window.scrollY;
   
   if(header.clientHeight < scrollY){
      console.log(curY);
      if(curY < scrollY){
         header.classList.add("hide");
      }
      else{
         header.classList.remove("hide")
      }
      curY = scrollY;
      console.log(curY);
   }
}



//Переменные для показа поиска на мобилках
const searchForm = document.querySelector(".search__form");
const searchFormShow = document.querySelector(".search__icon");
const searchFormHide = document.querySelector(".search__back");


//при клике кнопок
searchFormShow.onclick = () => {
   searchForm.classList.add("show");
   blockBody(true);
}
searchFormHide.onclick = () => {
   searchForm.classList.remove("show");   
   blockBody(false);
}



//блокировка скролла
function blockBody(variable){
   if (variable === true){
      document.body.style.overflow = "hidden";      
   }
   else{
      document.body.style.overflow = "";
   }
}


//Бургер
const burgerBtn = document.querySelector(".burger__btn");
const burger = document.querySelector(".burger");
let falseTrue = true;

burgerBtn.onclick = () => {
   burgerBtn.classList.toggle("show")
   burger.classList.toggle("show")
   blockBody(falseTrue);
   falseTrue = !falseTrue;
}


//показ корзинки и аккаунта
//переменные
const accPanel = document.querySelector(".header__basket-account");
const autorizePanel = document.querySelector(".header__autorize");

//условие
if (get_cookie("user") != null){
   autorizePanel.style.display = "none";
}
else{
   accPanel.style.display = "none";
}


//спойлеры футера
const footerSpoilers = document.querySelectorAll(".footer__section");

//первый элемент спойлера
footerSpoilers[0].style.borderTopWidth = "2px";
//второй элемент спойлера
footerSpoilers[footerSpoilers.length - 1].style.borderBottomWidth = "2px";

//открытие спойлера
footerSpoilers.forEach(el => {
   el.onclick = (e) => {
      e.path[1].classList.toggle("show");
   }
});