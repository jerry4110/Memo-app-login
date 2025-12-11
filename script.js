// 모바일 메뉴 토글
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mobileMenuBtn.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 모바일 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
    });
});

// 외부 클릭 시 모바일 메뉴 닫기
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            sidebar.classList.remove('open');
            mobileMenuBtn.classList.remove('active');
        }
    }
});

// 섹션 스크롤 감지 및 활성 네비게이션 업데이트
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 20;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 애니메이션
const fadeInElements = document.querySelectorAll('.section-content > *');
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

fadeInElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// 외부 링크 아이콘 애니메이션
const externalLinks = document.querySelectorAll('.external-link');
externalLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translate(3px, -3px)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// 키보드 접근성
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
    }
});

// 페이지 로드 시 첫 번째 섹션 활성화
window.addEventListener('load', () => {
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }
});

// 콘솔 메시지
console.log('%c안녕하세요! 👋', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%c이 페이지는 Brittany Chiang 스타일로 디자인되었습니다.', 'color: #8892b0; font-size: 14px;');
