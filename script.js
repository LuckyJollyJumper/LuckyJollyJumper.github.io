function showProject(id) {
    const element = document.querySelector(`#${id}`);

    document.querySelectorAll(".project").forEach(x => x.classList.add("hidden"));
    element.classList.remove("hidden");

    window.location.hash = id
}

window.addEventListener("load", _ => {showProject(window.location.hash.substring(1))})