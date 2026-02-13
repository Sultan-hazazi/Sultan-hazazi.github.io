let lang = "en";

function switchLang() {
const body = document.getElementById("body");

if (lang === "en") {
body.style.direction = "rtl";
body.style.textAlign = "right";

document.getElementById("aboutTitle").innerText = "نبذة عني";
document.getElementById("aboutText").innerText =
"طالب هندسة حاسب متخصص في الأنظمة المدمجة والمتحكمات الدقيقة باستخدام C و STM32";

document.getElementById("skillsTitle").innerText = "المهارات";
document.getElementById("projectsTitle").innerText = "المشاريع";

document.getElementById("uniTitle").innerText = "مشاريع الجامعة";
document.getElementById("elecTitle").innerText = "مشاريع كهرباء وإلكترونيات";
document.getElementById("embTitle").innerText = "مشاريع الأنظمة المدمجة";

lang = "ar";
} 
else {
location.reload();
}
}
