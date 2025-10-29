/*sobre-mim*/
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-left, .reveal-right, .reveal-down').forEach(el => {
        observer.observe(el);
    });
});
/*fim-sobre-mim*/