let isArabic = false;

function toggleLanguage() {
    isArabic = !isArabic;
    
    // 1. تغيير اتجاه الصفحة (L-R أو R-L)
    document.body.dir = isArabic ? "rtl" : "ltr";
    
    // 2. مصفوفة الترجمة الشاملة لجميع العناصر
    const translations = {
        // نصوص القائمة الجانبية (Aside)
        "heroTitle": isArabic ? "سلطان هزازي" : "Sultan Hazazi",
        "heroSub": isArabic ? "مهندس أنظمة مدمجة" : "Embedded Systems Engineer",
        "deptName": isArabic ? "هندسة الحاسب" : "Computer Engineering",
        "univName": isArabic ? "جامعة تبوك" : "University of Tabuk",
        "langBtn": isArabic ? "English" : "العربية",

        // روابط التنقل (Navigation)
        "navHome": isArabic ? "الرئيسية" : "Home",
        "navAbout": isArabic ? "عني" : "About",
        "navSkills": isArabic ? "مهاراتي" : "Skills",
        "navProjects": isArabic ? "المشاريع" : "Projects",
        "navCert": isArabic ? "الشهادات" : "Certificates",
        "navContact": isArabic ? "تواصل" : "Contact",

        // عناوين الأقسام (Section Titles)
        "titleAbout": isArabic ? "من أنا؟" : "Who Am I?",
        "projectsTitle": isArabic ? "معرض المشاريع" : "Portfolio",
        "uniTitle": isArabic ? "مشاريع الجامعة" : "University Projects",
        "embTitle": isArabic ? "الأنظمة المدمجة" : "Embedded Systems",
        "certTitle": isArabic ? "الشهادات المهنية" : "Certifications",

        // نص "عني" (النسخة المرتبة والاحترافية)
        "textAbout": isArabic ? 
            "أنا سلطان هزازي، طالب هندسة حاسب لدي شغف قوي بالأنظمة المدمجة، المتحكمات الدقيقة، والبرمجة منخفضة المستوى. أتخصص في تطوير أنظمة فعالة وموثوقة باستخدام C/C++ و STM32." : 
            "I am Sultan Hazazi, a Computer Engineering student with a strong passion for Embedded Systems, Microcontrollers, and low-level programming. I specialize in developing efficient and reliable systems using C/C++, STM32, ARM Cortex, and RTOS."
    };

    // 3. حلقة تكرار لتحديث كل النصوص التي لها ID في الصفحة
    for (const id in translations) {
        const element = document.getElementById(id);
        if (element) {
            // استخدام innerHTML لكي تظهر التنسيقات مثل <br> أو <strong> إذا وجدت
            element.innerHTML = translations[id];
        }
    }

    // 4. تعديل اتجاه العناصر البصرية (مثل قسم About)
    const aboutContainer = document.querySelector('.about-container');
    if (aboutContainer) {
        aboutContainer.style.flexDirection = isArabic ? 'row-reverse' : 'row';
    }

    // 5. تعديل محاذاة القائمة الجانبية
    const aside = document.getElementById("colorlib-aside");
    if (aside) {
        aside.style.textAlign = isArabic ? "right" : "center";
    }
}
