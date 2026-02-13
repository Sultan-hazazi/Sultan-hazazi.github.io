let isArabic = false;

function toggleLanguage() {
    isArabic = !isArabic;
    document.body.dir = isArabic ? "rtl" : "ltr";
    // أضف هذه داخل كائن translations
"navCert": isArabic ? "الشهادات" : "Certificates",
"certTitle": isArabic ? "الشهادات المهنية" : "Certifications",

// إذا كنت تريد ترجمة محتوى الشهادات نفسها (اختياري)
// يمكنك إضافة IDs لكل شهادة وتغيير نصوصها هنا بنفس الطريقة
    
    // تغيير نصوص القائمة الجانبية
    document.getElementById("heroTitle").innerText = isArabic ? "سلطان هزازي" : "Sultan Hazazi";
    document.getElementById("heroSub").innerText = isArabic ? "مهندس أنظمة مدمجة" : "Embedded Systems Engineer";
    document.getElementById("deptName").innerText = isArabic ? " هندسة الحاسب" : "Computer Engineering ";
    document.getElementById("univName").innerText = isArabic ? "جامعة تبوك" : "University of Tabuk";
    document.getElementById("langBtn").innerText = isArabic ? "English" : "العربية";

    // تغيير نصوص المحتوى
    document.getElementById("navHome").innerText = isArabic ? "الرئيسية" : "Home";
    document.getElementById("navAbout").innerText = isArabic ? "عني" : "About";
    document.getElementById("navSkills").innerText = isArabic ? "مهاراتي" : "Skills";
    document.getElementById("navProjects").innerText = isArabic ? "المشاريع" : "Projects";
    document.getElementById("navContact").innerText = isArabic ? "تواصل" : "Contact";

    document.getElementById("titleAbout").innerText = isArabic ? "من أنا؟" : "Who Am I?";
    document.getElementById("textAbout").innerText = isArabic ? 
        "طالب هندسة حاسب مكرس جهدي لإتقان البرمجة منخفضة المستوى والأنظمة المدمجة باستخدام C/C++ و STM32." : 
        "Computer Engineering student dedicated to mastering low-level programming and embedded systems using C/C++ and STM32.";

    document.getElementById("projectsTitle").innerText = isArabic ? "معرض المشاريع" : "Portfolio";
    document.getElementById("uniTitle").innerText = isArabic ? "مشاريع الجامعة" : "University Projects";
    document.getElementById("embTitle").innerText = isArabic ? "الأنظمة المدمجة" : "Embedded Systems";

    // تعديل اتجاه الصور في قسم About
    const aboutContainer = document.querySelector('.about-container');
    if (aboutContainer) {
        aboutContainer.style.flexDirection = isArabic ? 'row-reverse' : 'row';
    }
}
