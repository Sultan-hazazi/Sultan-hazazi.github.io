let isArabic = false;

function toggleLanguage() {
    isArabic = !isArabic;
    document.body.dir = isArabic ? 'rtl' : 'ltr';
    document.getElementById('langBtn').innerText = isArabic ? 'English' : 'العربية';

    const translations = {
        navHome: isArabic ? "الرئيسية" : "HOME",
        navAbout: isArabic ? "عني" : "ABOUT",
        navSkills: isArabic ? "مهاراتي" : "SKILLS",
        navProjects: isArabic ? "مشاريعي" : "PROJECTS",
        navContact: isArabic ? "تواصل" : "CONTACT",
        heroTitle: isArabic ? "سلطان هزازي" : "Sultan Hazazi",
        heroSub: isArabic ? "مهندس أنظمة مدمجة" : "Embedded Systems Engineer",
        titleAbout: isArabic ? "من أنا؟" : "About Me"
        // أكمل بقية النصوص هنا...
    };

    for (let id in translations) {
        const el = document.getElementById(id);
        if (el) el.innerText = translations[id];
    }
}
