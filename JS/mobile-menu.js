class MobileNavbar{
    constructor(menuBtn, navList, loginBtn){
         this.mobileMenu = document.querySelector(menuBtn);
         this.navList = document.querySelector(navList)
         this.loginBtn = document.querySelector(loginBtn)
         this.activeClass = "active"
         this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log(this)
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }
    init(){
        console.log(this.mobileMenu)
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menuBtn",
    ".navAll",
    ".loginBtn",
    ".navList li",
)

mobileNavbar.init()