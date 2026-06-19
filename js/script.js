(function () {
    'use strict';

    // 1. Mobile Menu Open/Close Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // 2. CAC Lightbox Modal Actions
    window.openCertModal = function() {
        const modal = document.getElementById('certModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Lock scrolling background
        }
    };

    window.closeCertModal = function() {
        const modal = document.getElementById('certModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Free scroll back
        }
    };

    // Close Modal automatically if user clicks on the dark backing space
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('certModal');
        if (event.target === modal) {
            closeCertModal();
        }
    });

    // 3. Dynamic WhatsApp Message Generation
    window.sendWhatsAppAlert = function(event) {
        event.preventDefault();

        // Extract input values safely
        const name = document.getElementById('wa_name').value.trim();
        const email = document.getElementById('wa_email').value.trim();
        const location = document.getElementById('wa_location').value.trim();
        const interest = document.getElementById('wa_interest').value.trim();

        // Format clean, structured layout text for your phone screen
        const messageText = `Hello Vogue Exclusives Ateliers,\n\nI would like to request priority alert entry:\n\n• Full Name: ${name}\n• Email: ${email}\n• Location: ${location}\n• Request Item/Fabric: ${interest}`;
        
        // Encode message safely for URL specifications
        const encodedMessage = encodeURIComponent(messageText);
        
        // Final secure compiled dynamic transfer routing link
        const finalWhatsAppURL = `https://wa.me/2348035539993?text=${encodedMessage}`;
        
        // Redirect client to WhatsApp smoothly in a new clean container window
        window.open(finalWhatsAppURL, '_blank');
    };

})();
