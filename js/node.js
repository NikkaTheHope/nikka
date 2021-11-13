const subjects = document.getElementsByClassName("subject");

Array.from(subjects).forEach(sub => {
    sub.addEventListener("click",loadSubject);
});

function loadSubject(e){
    const subject_id = e.target.id;
    location.href = `/subject/${subject_id}`;
}