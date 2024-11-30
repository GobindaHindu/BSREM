// Initialize Google Translate Widget
function googleTranslateElementInit() {
    try {
        new google.translate.TranslateElement({
            pageLanguage: 'en', // Original language of your page
            includedLanguages: 'hi,bn,ta,te,kn,ml,gu,mr,pa,as,or,ur', // Indian languages
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    } catch (error) {
        console.error("Google Translate Widget initialization failed:", error);
    }
}

// Toggle the Translator Widget
function toggleTranslator() {
    const translatorDiv = document.getElementById('google_translate_element');
    if (translatorDiv) {
        translatorDiv.style.display = translatorDiv.style.display === 'none' ? 'block' : 'none';
    } else {
        console.error("Translator widget not initialized.");
    }
}
