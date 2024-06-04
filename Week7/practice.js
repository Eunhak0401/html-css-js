alert("이 페이지는 이은학님의 웹 페이지입니다!")

document.addEventListener("DOMContentLoaded", () => {
    function createParagraph() {
        const para = document.createElement("p");
        para.textContent = "열심히 하겠습니다!";
        para.classList.add("center-text");
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        button.addEventListener("click", createParagraph);
    }
});