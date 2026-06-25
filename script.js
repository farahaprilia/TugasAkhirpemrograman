// 1. FITUR DARK MODE (Santai & Halus)
        function toggleTheme() {
            const body = document.body;
            const btn = document.getElementById('themeBtn');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                btn.textContent = '🌙 Dark Mode';
            } else {
                body.setAttribute('data-theme', 'dark');
                btn.textContent = '☀️ Light Mode';
            }
        }

        // 2. FITUR MOBILE MENU
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Menutup menu saat link diklik (di versi HP)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const navLinks = document.getElementById('navLinks');
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // 3. FITUR INTERSECTION OBSERVER (Animasi Scroll Super Smooth)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Elemen akan muncul saat 15% bagiannya terlihat di layar
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Hanya animasi sekali saat discroll ke bawah
                }
            });
        }, observerOptions);

        // Pasang observer ke semua elemen dengan class 'fade-up'
        document.querySelectorAll('.fade-up').forEach((el) => {
            observer.observe(el);
        });