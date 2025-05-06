function showProject(id) {
    const element = document.querySelector(`#${id}`);
    const main = document.querySelector("#about");

    const projects = document.querySelectorAll(".project").forEach(x => x.classList.add("hidden"));
    element.classList.remove("hidden");
    main.classList.add("hidden");
}