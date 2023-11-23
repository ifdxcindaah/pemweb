//Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav ul");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();


// Clear Form Before Unload
window.onbeforeunload = () => {
    const forms = document.getElementsByTagName("form");
    for (const form of forms) {
        form.reset();
    }
};
