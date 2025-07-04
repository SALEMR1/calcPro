document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const studentName = document.getElementById('student-name').value;
        const grade = document.getElementById('grade').value;
        const parentPhone = document.getElementById('parent-phone').value;
        const address = document.getElementById('address').value;
        const groupSelection = document.getElementById('group-selection').value;

        // Basic validation
        if (!studentName || !grade || !parentPhone || !address || !groupSelection) {
            alert('يرجى ملء جميع البيانات المطلوبة، بما في ذلك اختيار المجموعة.');
            return;
        }

        // Teacher's WhatsApp number (with country code for Egypt)
        const teacherWhatsappNumber = '201005270239';

        // Create the message
        const message = `
*تسجيل طالب جديد*
----------------------
*اسم الطالب:* ${studentName}
*الصف الدراسي:* ${grade}
*العنوان:* ${address}
*رقم ولي الأمر:* ${parentPhone}
*المجموعة المختارة:* ${groupSelection}
        `;

        // URL-encode the message
        const encodedMessage = encodeURIComponent(message.trim());

        // Create the WhatsApp URL
        const whatsappUrl = `https://wa.me/${teacherWhatsappNumber}?text=${encodedMessage}`;

        // Show success message and hide the form
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // Open the WhatsApp URL in a new tab
        window.open(whatsappUrl, '_blank');

        // Optional: Reset the form after a delay so the user can register another student
        setTimeout(() => {
            form.reset();
            form.classList.remove('hidden');
            successMessage.classList.add('hidden');
        }, 7000); // Reset after 7 seconds
    });
});
