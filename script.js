let isArabic = false;

function toggleLanguage() {
    isArabic = !isArabic;
    
    // تغيير اتجاه الصفحة
    document.body.dir = isArabic ? 'rtl' : 'ltr';
    
    // تغيير نص الزر
    document.getElementById('langBtn').innerText = isArabic ? 'English' : 'العربية';

    const translations = {
        navAbout: isArabic ? "عني" : "About",
        navSkills: isArabic ? "مهاراتي" : "Skills",
        navProjects: isArabic ? "مشاريعي" : "Portfolio",
        navContact: isArabic ? "تواصل" : "Contact",
        heroTitle: isArabic ? "سلطان هزازي" : "Sultan Hazazi",
        heroSub: isArabic ? "مهندس أنظمة مدمجة | مطور STM32" : "Embedded Systems Engineer | STM32 Developer",
        titleAbout: isArabic ? "من أنا؟" : "Who Am I?",
        textAbout: isArabic ? "طالب هندسة حاسب مكرس جهدي لإتقان البرمجة منخفضة المستوى والأنظمة المدمجة باستخدام لغات C/C++ وعائلة STM32." : "Computer Engineering student dedicated to mastering low-level programming and embedded systems using C/C++ and STM32.",
        titleSkills: isArabic ? "الترسانة التقنية" : "Technical Arsenal",
        titleProjects: isArabic ? "أبرز المشاريع" : "Featured Projects",
        p1Title: isArabic ? "نظام قياس المسافات" : "Distance Measurement",
        p1Desc: isArabic ? "قياس فوري بالأمواج فوق الصوتية مع واجهة LCD ومقاطعات العتاد." : "Real-time ultrasonic measurement with LCD interface and hardware interrupts.",
        p2Title: isArabic ? "جدولة مهام RTOS" : "RTOS Task Scheduler",
        p2Desc: isArabic ? "نظام متعدد المسارات لإدارة بيانات الحساسات ومدخلات المستخدم في آن واحد." : "Multi-threaded system managing sensor data and user inputs simultaneously.",
        titleContact: isArabic ? "تواصل معي" : "Get In Touch",
        textContact: isArabic ? "هل أنت مهتم بالتعاون أو تريد فقط إلقاء التحية؟" : "Interested in a collaboration or just want to say hi?",
        footerText: isArabic ? "© 2026 سلطان هزازي | صُمم للتميز في الأنظمة المدمجة" : "© 2026 Sultan Hazazi | Designed for Embedded Systems Excellence"
    };

    for (let id in translations) {
        const el = document.getElementById(id);
        if (el) el.innerText = translations[id];
    }
}
