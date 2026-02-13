let lang = "en";

function switchLang() {
// Flip About Section for Arabic
const aboutContainer = document.querySelector('.about-container');
if (aboutContainer) {
    aboutContainer.style.flexDirection = isArabic ? 'row-reverse' : 'row';
}


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
