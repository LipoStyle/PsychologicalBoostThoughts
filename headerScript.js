// // creating logo component
// function LogoComponent({logoUrl}){
//   return (
//     <div class="logoSection">
//       <img src={logoUrl}></img>
//     </div>
//   )
// }

// creating menu section
// creating items for menu
function LiComponent({liUrl, name}){
  return (
    <li><a href={liUrl}>{name}</a></li>
  )
}
function UlComponent(){
  return (
    <ul class="menuSection">
      <LiComponent liUrl={"index.html"} name={"Αρχική"} />
      <LiComponent liUrl={"#goneis"} name={"Γονείς"} />
      <LiComponent liUrl={"#sxoleio"} name={"Σχολείο"} />
      <LiComponent liUrl={"#foiloi"} name={"Φοιλοι"} />
      <LiComponent liUrl={"#koinwnia"} name={"Κοινωνία"} />
    </ul>
  )
}

// creating the burger menu section
function BurgerComponent(){
  return (
    <div class="burgerMenu">
      <span class="bar1"></span>
      <span class="bar2"></span>
      <span class="bar3"></span>
    </div>
  )
}

// creating the header component
function HeaderComponent(){
  return (
    <div id="header">
      {/* <LogoComponent logoUrl={"img/backgroundImg.jpg"} /> */}
      <UlComponent />
      <BurgerComponent/>
    </div>
  )
}

// rendering the header to htmlDOM
ReactDOM.render(
  <HeaderComponent />,
  document.querySelector("header")
)

// burger menu section for onclickevent
const burger = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menuSection");
console.log(burger);
burger.addEventListener("click", ()=>{
  burger.classList.toggle("change");
  menu.classList.toggle("active");
})
