document.addEventListener("DOMContentLoaded", () => {

    const liens = {
        "../../images/icons/lua.png": "https://www.lua.org",
        "../../images/icons/python.png": "https://www.python.org/",
        "../../images/icons/love2d.png": "https://love2d.org/",
        "../../images/icons/solar2d.png": "https://solar2d.com/",
    };

    document.addEventListener("click", (e) => {
        const nom = e.target.getAttribute("src");
        if (liens[nom]) {
            open(liens[nom], "_blank");
        }
    });
})