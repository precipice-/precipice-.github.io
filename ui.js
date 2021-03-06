let selectSideel;
let sideItemCount = 0;
export function SideItem(el) {
    const id = sideItemCount;
    ++sideItemCount;
    
    function select() {
        if(selectSideel) {
            selectSideel.classList.remove("select");

        }
        el.classList.add("select");
        selectSideel = el;
        OpenPage(id);
    }
    this.select = select;

    el.addEventListener("click", function() {
        select();
    })
    el.addEventListener("mouseover", function() {
        el.classList.add("cursor");
    })
    el.addEventListener("mouseleave", function() {
        el.classList.remove("cursor");
    })
}

const pageDivs = document.getElementsByClassName("page");
let lastSelectPage;

export function OpenPage(num) {
    if(lastSelectPage) {
        lastSelectPage.classList.remove("select");
    }


    pageDivs[num].classList.add("select");
    lastSelectPage = pageDivs[num];

}   