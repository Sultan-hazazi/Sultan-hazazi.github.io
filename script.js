let lang = "en";

function switchLang(){
if(lang=="en"){
document.getElementById("aboutTitle").innerText="نبذة عني";
document.getElementById("aboutText").innerText="طالب هندسة حاسب متخصص في الأنظمة المدمجة والمتحكمات الدقيقة باستخدام C و STM32";
document.getElementById("skillsTitle").innerText="المهارات";
document.getElementById("projectsTitle").innerText="المشاريع";
lang="ar";
}else{
location.reload();
}
}
