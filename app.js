document.addEventListener("DOMContentLoaded", (event)=> {
    console.log(window.location.origin);
    const origin = window.location.origin;
    window.location.href = `${origin}/assets/Akash_resume.pdf`;
})