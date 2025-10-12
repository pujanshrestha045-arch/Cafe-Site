document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        const navigation= document.getElementById('navigation');

        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            navigation.classList.toggle('solid')
        });
    });