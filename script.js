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

        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const navLinks = document.getElementById('navLinks');
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach((el) => {
            observer.observe(el);
        });
