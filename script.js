let isArabic = false;

function toggleLanguage() {
    isArabic = !isArabic;
    
    // تغيير اتجاه الصفحة
    document.body.dir = isArabic ? "rtl" : "ltr";
    
    // قاموس الترجمة
    const dict = {
        "heroTitle": isArabic ? "سلطان هزازي" : "Sultan Hazazi",
        "heroSub": isArabic ? "الأنظمة المدمجة" : "Embedded Systems",
        "deptName": isArabic ? "هندسة الحاسب" : "Computer Engineering",
        "univName": isArabic ? "جامعة تبوك" : "University of Tabuk",
        "navHome": isArabic ? "الرئيسية" : "Home",
        "navAbout": isArabic ? "عني" : "About",
        "navSkills": isArabic ? "المهارات" : "Skills",
        "navProjects": isArabic ? "المشاريع" : "Projects",
        "navCert": isArabic ? "الشهادات" : "Certificates",
        "navContact": isArabic ? "تواصل معي" : "Contact",
        "welcomeTitle": isArabic ? "مرحباً بكم في عالمي التقني" : "Welcome to My Technical World",
        "titleAbout": isArabic ? "من أنا؟" : "Who Am I?",
        "skillsTitle": isArabic ? "الترسانة التقنية" : "Technical Arsenal",
        "projectsTitle": isArabic ? "معرض الأعمال" : "Portfolio",
        "uniTitle": isArabic ? "مشاريع الجامعة" : "University Projects",
        "elecTitle": isArabic ? "مشاريع الكهرباء والإلكترونيات" : "Electronics Projects",
        "embTitle": isArabic ? "الأنظمة المدمجة" : "Embedded Systems",
        "certTitle": isArabic ? "الشهادات" : "Certifications",
        "contactTitle": isArabic ? "تواصل معي" : "Get In Touch",
        "langBtn": isArabic ? "English" : "العربية",
        "textAbout": isArabic ? "أنا سلطان هزازي، طالب هندسة حاسب وشغوف بالبرمجة منخفضة المستوى والأنظمة المدمجة." : "I am Sultan Hazazi, a Computer Engineering student with a strong passion for Embedded Systems and Low-level programming."
    };

    // تنفيذ التغيير
    for (let id in dict) {
        let el = document.getElementById(id);
        if (el) el.innerText = dict[id];
    }
}
