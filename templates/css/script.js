const pagesx = document.querySelectorAll(".pagex");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {

    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    pagesx.forEach(
        pagesx => (pagesx.style.transform = 'translateX(${translate}%)')
    )
}