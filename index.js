document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        document.querySelector('.hamburger').addEventListener('click', function () {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });