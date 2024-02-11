/*
متغير challenges هو مصفوفة في لغة البرمجة JavaScript. 
في هذا السياق، يتم استخدام هذه المصفوفة لتخزين مجموعة من التحديات 
أو الأسئلة وإجاباتها المرتبطة.
 كل تحدي ممثل في كائن داخل المصفوفة، 
ويحتوي كل كائن على اثنين من الخصائص:

text: توصيف للتحدي أو السؤال.
answer: الإجابة الصحيحة على التحدي أو السؤال.*/ 

const challenges = [
    { text: 'Translate: "Hello"', answer: 'مرحبا' },
    { text: 'يترجم:مرحبا', answer: "Hello" },
    { text: 'Translate:"happy"?', answer: 'سعيد' },
    { text: 'سعيد', answer: 'happy' },
    // يمكنك إضافة المزيد من التحديات هنا
];
const challengeElement = document.getElementById('challenge');//يمكن استخدام getElementById() للوصول إلى هذا العنصر كما يلي:
const userInputElement = document.getElementById('userInput');
function displayChallenge() {
    // يقوم هذا الدالة بعرض تحدي جديد على الصفحة
    // يتم اختيار تحدي عشوائي من مصفوفة التحديات
    const randomIndex = Math.floor(Math.random() * challenges.length);
    // يتم عرض نص التحدي المختار في عنصر الصفحة المعرف باسم 'challengeElement'
    challengeElement.textContent = challenges[randomIndex].text;
}
function checkAnswer() {
    // هذه الدالة تتحقق من الإجابة التي قدمها المستخدم
    // يتم الحصول على الإجابة من عنصر الإدخال في الصفحة المعرف باسم 'userInputElement'
    const userAnswer = userInputElement.value.trim().toLowerCase();
    // يتم الحصول على نص التحدي الحالي من عنصر الصفحة المعرف باسم 'challengeElement'
    const currentChallenge = challengeElement.textContent;
    // يتم البحث عن الإجابة الصحيحة للتحدي الحالي في مصفوفة التحديات وتحويلها إلى حالة صغيرة
    const correctAnswer = challenges.find(challenge => challenge.text === currentChallenge).answer.toLowerCase();

    // يتم مقارنة الإجابة التي قدمها المستخدم مع الإجابة الصحيحة
    if (userAnswer === correctAnswer) {
        // إذا كانت الإجابة صحيحة، يتم عرض رسالة تأكيد وإعادة عرض تحدي جديد
        alert('إجابة صحيحة!');
        // يتم مسح حقل الإدخال
        userInputElement.value = '';
        // يتم عرض تحدي جديد
        displayChallenge();
    } else {
        // إذا كانت الإجابة خاطئة، يتم عرض رسالة خطأ
        alert('جواب خاطئ، حاول مرة أخرى.');
    }
}

// يتم عرض تحدي عندما تنتهي عملية تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayChallenge();
});

