export default function HomePage() {
  return (
    <>

<nav className="nav" id="nav">
  
  <div className="nav-top">
    <div className="wrap nav-top-inner">
      <div className="nav-top-left">
        <a href="tel:+919876543210">📞 +91 98765 43210</a>
        <span className="sep"></span>
        <a href="mailto:hello@edutravel.com">✉ hello@edutravel.com</a>
        <span className="sep"></span>
        <span style={{ color: 'var(--muted)' }}>India · Working globally</span>
      </div>
      <div className="nav-top-right">
        <div className="audience-pills">
          <a href="#" className="is-active">For Students</a>
          <a href="#">For Partners</a>
          <a href="#">For Institutions</a>
        </div>
        <a href="#">Blog</a>
        <a href="#cta">Contact</a>
      </div>
    </div>
  </div>

  
  <div className="nav-main">
    <div className="wrap nav-main-inner">
      <a href="#top" className="logo">EduTravel <span className="plane">✈</span></a>
      <div className="nav-links">
        <div className="has-dropdown">
          <button className="nav-trigger" type="button">
            Services
            <svg className="caret" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M 2 4 L 5 7 L 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="mega mega-services" role="menu">
            <div className="mega-grid">
              <a className="mega-item" href="#services">
                <div className="mega-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div className="mega-text">
                  <div className="mega-title">Free Application Service <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">SOP editing, documents, deadline tracking — free.</div>
                </div>
              </a>
              <a className="mega-item" href="#services">
                <div className="mega-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5"/></svg>
                </div>
                <div className="mega-text">
                  <div className="mega-title">Premium Application <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">End-to-end. Money-back guarantee.</div>
                </div>
              </a>
              <a className="mega-item" href="#services">
                <div className="mega-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div className="mega-text">
                  <div className="mega-title">Visa Assistance <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">98% success rate. Mock interviews included.</div>
                </div>
              </a>
              <a className="mega-item" href="#services">
                <div className="mega-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div className="mega-text">
                  <div className="mega-title">Elite University Prep <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">Oxbridge, Ivy League, Russell Group.</div>
                </div>
              </a>
              <a className="mega-item" href="#services">
                <div className="mega-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 14v8l3-2 3 2v-8"/></svg>
                </div>
                <div className="mega-text">
                  <div className="mega-title">Scholarship Hunting <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">Chevening, Fulbright, DAAD &amp; uni-specific.</div>
                </div>
              </a>
              <a className="mega-item" href="#services">
                <div className="mega-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h6l3-9 4 18 3-9h4"/></svg>
                </div>
                <div className="mega-text">
                  <div className="mega-title">IELTS / TOEFL Coaching <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">Diagnostic + tailored prep. Partner-discounted.</div>
                </div>
              </a>
            </div>
            <div className="mega-footer">
              <span>Not sure where to start?</span>
              <a href="#cta">Book a free 30-min call →</a>
            </div>
          </div>
        </div>

        <div className="has-dropdown">
          <button className="nav-trigger" type="button">
            Destinations
            <svg className="caret" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M 2 4 L 5 7 L 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="mega mega-destinations" role="menu">
            <div className="mega-grid">
              <a className="mega-item" href="#destinations">
                <div className="mega-icon">🇬🇧</div>
                <div className="mega-text">
                  <div className="mega-title">United Kingdom <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">800+ courses · Oxbridge, Russell Group</div>
                </div>
              </a>
              <a className="mega-item" href="#destinations">
                <div className="mega-icon">🇺🇸</div>
                <div className="mega-text">
                  <div className="mega-title">United States <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">600+ courses · Ivy League, top public unis</div>
                </div>
              </a>
              <a className="mega-item" href="#destinations">
                <div className="mega-icon">🇨🇦</div>
                <div className="mega-text">
                  <div className="mega-title">Canada <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">400+ courses · PR-friendly pathways</div>
                </div>
              </a>
              <a className="mega-item" href="#destinations">
                <div className="mega-icon">🇦🇺</div>
                <div className="mega-text">
                  <div className="mega-title">Australia <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">350+ courses · Group of Eight</div>
                </div>
              </a>
              <a className="mega-item" href="#destinations">
                <div className="mega-icon">🇩🇪</div>
                <div className="mega-text">
                  <div className="mega-title">Germany <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">200+ courses · Tuition-free public unis</div>
                </div>
              </a>
              <a className="mega-item" href="#destinations">
                <div className="mega-icon">🇸🇬</div>
                <div className="mega-text">
                  <div className="mega-title">Singapore <span className="mega-arrow">→</span></div>
                  <div className="mega-desc">150+ courses · NUS, NTU, SMU</div>
                </div>
              </a>
            </div>
            <div className="mega-footer">
              <span>30+ countries available</span>
              <a href="#destinations">View all destinations →</a>
            </div>
          </div>
        </div>

        <a href="#process">Process</a>
        <a href="#stories">Stories</a>
        <a href="#why">Why Us</a>
        <a href="#faq">FAQ</a>
      </div>

      <div className="nav-right">
        <button className="nav-icon-btn" type="button" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        </button>
        <button className="nav-icon-btn" type="button" aria-label="Sign in">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        <a href="#cta" className="btn nav-cta">
          Free Consultation
          <span className="arrow">→</span>
        </a>
        <button className="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </div>
</nav>


<header className="hero" id="top">
  
  <div className="hero-bg" id="heroBg">

    
    <div className="hero-bg-slide is-active" data-slide="0">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEE7C9"/>
            <stop offset="55%" stopColor="#F9D6B0"/>
            <stop offset="100%" stopColor="#F0A875"/>
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#sky1)"/>
        
        <path d="M0 700 Q 400 620 800 660 Q 1200 700 1600 640 L 1600 900 L 0 900 Z" fill="#7AA177" opacity=".6"/>
        <path d="M0 740 Q 350 700 700 720 Q 1100 740 1600 700 L 1600 900 L 0 900 Z" fill="#5D8460"/>
        
        <rect x="0" y="780" width="1600" height="120" fill="#5E8FB8"/>
        <path d="M0 780 Q 400 770 800 778 Q 1200 786 1600 778 L 1600 800 L 0 800 Z" fill="#7AAACC"/>
        
        <rect x="200" y="700" width="1200" height="80" fill="#2A2A26" opacity=".25"/>
        
        <g transform="translate(1080 280)">
          <rect x="-40" y="0" width="80" height="420" fill="#A8836B"/>
          <rect x="-44" y="160" width="88" height="80" fill="#8C6D55"/>
          <rect x="-30" y="180" width="24" height="40" fill="#F8E89C"/>
          <rect x="6" y="180" width="24" height="40" fill="#F8E89C"/>
          <polygon points="-40,0 40,0 0,-100" fill="#8C6D55"/>
          <rect x="-6" y="-130" width="12" height="40" fill="#A8836B"/>
        </g>
        
        <rect x="800" y="500" width="280" height="200" fill="#967C66"/>
        <rect x="800" y="500" width="280" height="20" fill="#7A6555"/>
        <g fill="#7A6555">
          <rect x="820" y="540" width="20" height="40"/><rect x="860" y="540" width="20" height="40"/>
          <rect x="900" y="540" width="20" height="40"/><rect x="940" y="540" width="20" height="40"/>
          <rect x="980" y="540" width="20" height="40"/><rect x="1020" y="540" width="20" height="40"/>
          <rect x="1050" y="540" width="20" height="40"/>
          <rect x="820" y="600" width="20" height="40"/><rect x="860" y="600" width="20" height="40"/>
          <rect x="900" y="600" width="20" height="40"/><rect x="940" y="600" width="20" height="40"/>
          <rect x="980" y="600" width="20" height="40"/><rect x="1020" y="600" width="20" height="40"/>
          <rect x="1050" y="600" width="20" height="40"/>
        </g>
        
        <g fill="#736152" opacity=".75">
          <rect x="80" y="540" width="100" height="160"/>
          <rect x="200" y="500" width="80" height="200"/>
          <rect x="300" y="560" width="90" height="140"/>
          <rect x="410" y="520" width="70" height="180"/>
          <rect x="500" y="480" width="100" height="220"/>
          <rect x="620" y="540" width="80" height="160"/>
          <rect x="720" y="500" width="60" height="200"/>
        </g>
        
        <g transform="translate(420 540)">
          <ellipse cx="0" cy="280" rx="120" ry="14" fill="rgba(0,0,0,.18)"/>
          
          <rect x="-30" y="170" width="22" height="110" rx="4" fill="#2A4A6B"/>
          <rect x="8" y="170" width="22" height="110" rx="4" fill="#2A4A6B"/>
          
          <path d="M-46 60 Q-44 30 0 22 Q44 30 46 60 L52 180 L-52 180 Z" fill="#D9783A"/>
          
          <path d="M40 36 Q70 -8 88 -78 L70 -86 Q56 -30 32 24 Z" fill="#D9783A"/>
          <circle cx="92" cy="-86" r="14" fill="#F5C5A3"/>
          
          <path d="M-40 40 Q-58 80 -54 150 L-36 154 Q-30 100 -22 64 Z" fill="#D9783A"/>
          <circle cx="-50" cy="158" r="12" fill="#F5C5A3"/>
          
          <rect x="-9" y="6" width="18" height="20" fill="#F5C5A3"/>
          
          <ellipse cx="0" cy="-18" rx="40" ry="44" fill="#F5C5A3"/>
          
          <path d="M-40 -20 Q-40 -64 0 -68 Q40 -64 40 -20 Q38 -42 30 -50 Q18 -58 0 -58 Q-18 -58 -30 -50 Q-38 -42 -40 -20 Z" fill="#2C1A12"/>
          
          <ellipse cx="-12" cy="-16" rx="2.4" ry="3" fill="#1F1814"/>
          <ellipse cx="12" cy="-16" rx="2.4" ry="3" fill="#1F1814"/>
          <path d="M-12 4 Q0 14 12 4" stroke="#1F1814" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
          
          <g transform="translate(0 -64)">
            <path d="M-30 0 L0 -14 L30 0 L0 14 Z" fill="#1A1A1A"/>
            <rect x="-3" y="14" width="6" height="6" fill="#1A1A1A"/>
            <path d="M20 4 L24 22" stroke="#D9783A" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="24" cy="24" r="3" fill="#D9783A"/>
          </g>
        </g>
        
        <circle cx="220" cy="180" r="60" fill="#FBE7CE" opacity=".9"/>
        
        <ellipse cx="380" cy="160" rx="80" ry="20" fill="rgba(255,255,255,.6)"/>
        <ellipse cx="1300" cy="220" rx="100" ry="22" fill="rgba(255,255,255,.5)"/>
      </svg>
    </div>

    
    <div className="hero-bg-slide" data-slide="1">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCEBED"/>
            <stop offset="60%" stopColor="#C0DDDF"/>
            <stop offset="100%" stopColor="#9CC3C6"/>
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#sky2)"/>
        
        <rect x="0" y="720" width="1600" height="180" fill="#7AA177"/>
        <rect x="0" y="720" width="1600" height="20" fill="#9BBC8F"/>
        
        <g transform="translate(700 280)">
          <rect x="-180" y="0" width="360" height="440" fill="#C8A87C"/>
          <rect x="-180" y="0" width="360" height="40" fill="#A88B65"/>
          
          <path d="M-40 440 L-40 280 Q-40 220 0 220 Q40 220 40 280 L40 440 Z" fill="#A88B65"/>
          
          <g fill="#86684A">
            <rect x="-160" y="80" width="40" height="60"/>
            <rect x="-100" y="80" width="40" height="60"/>
            <rect x="60" y="80" width="40" height="60"/>
            <rect x="120" y="80" width="40" height="60"/>
            <rect x="-160" y="180" width="40" height="60"/>
            <rect x="-100" y="180" width="40" height="60"/>
            <rect x="60" y="180" width="40" height="60"/>
            <rect x="120" y="180" width="40" height="60"/>
            <rect x="-160" y="280" width="40" height="60"/>
            <rect x="-100" y="280" width="40" height="60"/>
            <rect x="60" y="280" width="40" height="60"/>
            <rect x="120" y="280" width="40" height="60"/>
          </g>
          
          <circle cx="0" cy="100" r="22" fill="#D9783A"/>
        </g>
        
        <g transform="translate(140 540)">
          <rect x="-8" y="60" width="16" height="80" fill="#6E5240"/>
          <circle cx="0" cy="40" r="70" fill="#5C7A4A"/>
          <circle cx="-40" cy="60" r="50" fill="#6B8C58"/>
          <circle cx="40" cy="60" r="50" fill="#6B8C58"/>
        </g>
        <g transform="translate(1440 540)">
          <rect x="-8" y="60" width="16" height="80" fill="#6E5240"/>
          <circle cx="0" cy="40" r="70" fill="#5C7A4A"/>
          <circle cx="-40" cy="60" r="50" fill="#6B8C58"/>
          <circle cx="40" cy="60" r="50" fill="#6B8C58"/>
        </g>
        
        <g transform="translate(360 560)">
          <ellipse cx="40" cy="250" rx="120" ry="12" fill="rgba(0,0,0,.18)"/>
          
          <g transform="translate(0 0)">
            <rect x="-12" y="120" width="14" height="100" fill="#2A4A6B"/>
            <rect x="8" y="120" width="14" height="100" fill="#2A4A6B"/>
            <path d="M-30 30 Q-28 8 5 4 Q38 8 40 30 L46 130 L-36 130 Z" fill="#2F8C5C"/>
            <circle cx="5" cy="-22" r="28" fill="#F5C5A3"/>
            <path d="M-22 -22 Q-22 -52 5 -54 Q32 -52 32 -22 Q30 -38 22 -42 Q12 -46 5 -46 Q-2 -46 -12 -42 Q-20 -38 -22 -22 Z" fill="#3A2417"/>
          </g>
          
          <g transform="translate(80 -10)">
            <rect x="-12" y="120" width="14" height="100" fill="#1F1814"/>
            <rect x="8" y="120" width="14" height="100" fill="#1F1814"/>
            <path d="M-30 30 Q-28 8 5 4 Q38 8 40 30 L46 130 L-36 130 Z" fill="#F0934A"/>
            <circle cx="5" cy="-22" r="28" fill="#F5C5A3"/>
            <path d="M-22 -28 Q-22 -58 5 -60 Q32 -58 32 -28 Q32 -36 22 -40 Q12 -44 5 -44 Q-2 -44 -12 -40 Q-22 -36 -22 -28 Z" fill="#5C3F2E"/>
            
            <circle cx="32" cy="-12" r="10" fill="#5C3F2E"/>
          </g>
          
          <g transform="translate(160 4)">
            <rect x="-12" y="120" width="14" height="100" fill="#2A4A6B"/>
            <rect x="8" y="120" width="14" height="100" fill="#2A4A6B"/>
            <path d="M-30 30 Q-28 8 5 4 Q38 8 40 30 L46 130 L-36 130 Z" fill="#1F6AB5"/>
            <circle cx="5" cy="-22" r="28" fill="#E8AC85"/>
            <path d="M-22 -28 Q-22 -58 5 -60 Q32 -58 32 -28 Q32 -36 22 -40 Q12 -44 5 -44 Q-2 -44 -12 -40 Q-22 -36 -22 -28 Z" fill="#1F1814"/>
            
            <rect x="-22" y="50" width="56" height="36" rx="2" fill="#3A3A36"/>
            <rect x="-18" y="54" width="48" height="28" fill="#F5F0E5"/>
          </g>
        </g>
        
        <ellipse cx="280" cy="180" rx="100" ry="22" fill="rgba(255,255,255,.7)"/>
        <ellipse cx="1100" cy="140" rx="120" ry="24" fill="rgba(255,255,255,.6)"/>
      </svg>
    </div>

    
    <div className="hero-bg-slide" data-slide="2">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDDCB1"/>
            <stop offset="55%" stopColor="#F0A875"/>
            <stop offset="100%" stopColor="#D9783A"/>
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#sky3)"/>
        
        <circle cx="1280" cy="240" r="90" fill="#FCF3CB" opacity=".9"/>
        
        <g fill="#3F3530">
          <rect x="0" y="520" width="100" height="240"/>
          <rect x="110" y="460" width="80" height="300"/>
          <rect x="200" y="420" width="120" height="340"/>
          <rect x="330" y="380" width="100" height="380"/>
          <rect x="440" y="340" width="80" height="420"/>
          <rect x="530" y="280" width="120" height="480"/>
          <rect x="660" y="200" width="100" height="560"/>
          <rect x="770" y="320" width="90" height="440"/>
          <rect x="870" y="260" width="110" height="500"/>
          <rect x="990" y="360" width="80" height="400"/>
          <rect x="1080" y="300" width="100" height="460"/>
          <rect x="1190" y="400" width="90" height="360"/>
          <rect x="1290" y="340" width="120" height="420"/>
          <rect x="1420" y="440" width="100" height="320"/>
          <rect x="1530" y="380" width="70" height="380"/>
        </g>
        
        <g fill="#F9E59C" opacity=".7">
          <rect x="20" y="540" width="10" height="14"/><rect x="40" y="540" width="10" height="14"/>
          <rect x="220" y="450" width="14" height="18"/><rect x="250" y="500" width="14" height="18"/>
          <rect x="450" y="380" width="10" height="14"/><rect x="470" y="420" width="10" height="14"/>
          <rect x="560" y="340" width="14" height="18"/><rect x="600" y="380" width="14" height="18"/>
          <rect x="680" y="280" width="14" height="18"/><rect x="710" y="320" width="14" height="18"/>
          <rect x="890" y="310" width="14" height="18"/><rect x="930" y="370" width="14" height="18"/>
          <rect x="1100" y="360" width="14" height="18"/><rect x="1140" y="420" width="14" height="18"/>
          <rect x="1310" y="400" width="14" height="18"/><rect x="1350" y="450" width="14" height="18"/>
        </g>
        
        <rect x="0" y="760" width="1600" height="140" fill="#2A2421"/>
        
        <g transform="translate(800 600)">
          <ellipse cx="0" cy="190" rx="100" ry="10" fill="rgba(0,0,0,.4)"/>
          <rect x="-22" y="60" width="20" height="130" rx="3" fill="#1F1814"/>
          <rect x="2" y="60" width="20" height="130" rx="3" fill="#1F1814"/>
          <path d="M-38 -40 Q-36 -64 0 -68 Q36 -64 38 -40 L46 70 L-46 70 Z" fill="#D9783A"/>
          
          <path d="M-32 -28 Q-66 -100 -86 -180 L-66 -188 Q-46 -120 -22 -50 Z" fill="#D9783A"/>
          <path d="M32 -28 Q66 -100 86 -180 L66 -188 Q46 -120 22 -50 Z" fill="#D9783A"/>
          <circle cx="-92" cy="-188" r="14" fill="#F5C5A3"/>
          <circle cx="92" cy="-188" r="14" fill="#F5C5A3"/>
          <rect x="-10" y="-90" width="20" height="22" fill="#F5C5A3"/>
          <ellipse cx="0" cy="-114" rx="40" ry="44" fill="#F5C5A3"/>
          <path d="M-40 -118 Q-40 -158 0 -162 Q40 -158 40 -118 Q40 -134 30 -142 Q18 -150 0 -150 Q-18 -150 -30 -142 Q-40 -134 -40 -118 Z" fill="#2C1A12"/>
          <ellipse cx="-12" cy="-112" rx="2.6" ry="3" fill="#1F1814"/>
          <ellipse cx="12" cy="-112" rx="2.6" ry="3" fill="#1F1814"/>
          <path d="M-14 -90 Q0 -80 14 -90 Q10 -80 0 -80 Q-10 -80 -14 -90 Z" fill="#7A4A33"/>
          
          <rect x="-110" y="-200" width="40" height="14" fill="#F5F0E5" transform="rotate(-12 -90 -193)"/>
          <circle cx="-78" cy="-188" r="6" fill="#D9783A" transform="rotate(-12 -90 -193)"/>
        </g>
      </svg>
    </div>

    
    <div className="hero-bg-slide" data-slide="3">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDEDD3"/>
            <stop offset="50%" stopColor="#F8D2B9"/>
            <stop offset="100%" stopColor="#EBA38E"/>
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#sky4)"/>
        
        <circle cx="1320" cy="200" r="80" fill="#FCF3CB" opacity=".95"/>
        
        <rect x="0" y="600" width="1600" height="300" fill="#5E8FB8"/>
        <rect x="0" y="600" width="1600" height="40" fill="#7AAACC"/>
        
        <g stroke="#FAF8F5" strokeWidth="2" opacity=".4" fill="none">
          <path d="M120 700 Q180 695 240 700"/>
          <path d="M380 740 Q440 735 500 740"/>
          <path d="M740 720 Q800 715 860 720"/>
          <path d="M1080 760 Q1140 755 1200 760"/>
          <path d="M1340 720 Q1400 715 1460 720"/>
        </g>
        
        <g transform="translate(960 500)">
          <path d="M-200 80 Q-160 -80 -80 -40 Q-100 60 -80 100 Z" fill="#FAF8F5"/>
          <path d="M-100 100 Q-60 -60 20 -30 Q0 70 20 110 Z" fill="#F2EFE9"/>
          <path d="M0 100 Q40 -50 120 -30 Q100 70 120 110 Z" fill="#FAF8F5"/>
          <path d="M100 100 Q140 -30 220 0 Q200 80 220 120 Z" fill="#F2EFE9"/>
          <rect x="-220" y="100" width="460" height="40" fill="#A88B65"/>
        </g>
        
        <path d="M100 540 Q400 460 700 540 L700 580 L100 580 Z" fill="#3A2417" opacity=".6"/>
        <rect x="200" y="500" width="14" height="80" fill="#3A2417" opacity=".6"/>
        <rect x="500" y="500" width="14" height="80" fill="#3A2417" opacity=".6"/>
        
        <g transform="translate(380 580)">
          <ellipse cx="0" cy="200" rx="100" ry="10" fill="rgba(0,0,0,.18)"/>
          <rect x="-22" y="80" width="20" height="120" rx="3" fill="#2A4A6B"/>
          <rect x="2" y="80" width="20" height="120" rx="3" fill="#2A4A6B"/>
          
          <rect x="-44" y="0" width="80" height="100" rx="10" fill="#2F8C5C"/>
          <rect x="-44" y="20" width="80" height="6" fill="#1F5A3A"/>
          
          <path d="M-38 -30 Q-36 -56 0 -60 Q36 -56 38 -30 L46 90 L-46 90 Z" fill="#F0934A"/>
          
          <path d="M-38 -16 Q-58 30 -50 80 L-32 84 Q-26 40 -22 -8 Z" fill="#F0934A"/>
          <path d="M38 -16 Q56 30 50 80 L32 84 Q26 40 22 -8 Z" fill="#F0934A"/>
          <circle cx="-46" cy="86" r="11" fill="#F5C5A3"/>
          <circle cx="46" cy="86" r="11" fill="#F5C5A3"/>
          
          <rect x="-10" y="-78" width="20" height="22" fill="#F5C5A3"/>
          <ellipse cx="0" cy="-104" rx="38" ry="42" fill="#F5C5A3"/>
          
          <path d="M-38 -108 Q-38 -146 0 -150 Q38 -146 38 -108 Q38 -126 28 -134 Q16 -142 0 -142 Q-16 -142 -28 -134 Q-38 -126 -38 -108 Z" fill="#2C1A12"/>
          
          <ellipse cx="-12" cy="-102" rx="2.6" ry="3" fill="#1F1814"/>
          <ellipse cx="12" cy="-102" rx="2.6" ry="3" fill="#1F1814"/>
          <path d="M-12 -80 Q0 -70 12 -80" stroke="#1F1814" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
        </g>
        
        <g fill="#3A2417" opacity=".6">
          <path d="M600 200 Q610 192 620 200 Q628 192 638 200"/>
          <path d="M540 250 Q548 244 556 250 Q564 244 572 250"/>
        </g>
      </svg>
    </div>

    
    <div className="hero-bg-slide" data-slide="4">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E5DEEE"/>
            <stop offset="55%" stopColor="#D2C8E2"/>
            <stop offset="100%" stopColor="#B5A4D0"/>
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#sky5)"/>
        
        <g opacity=".5">
          <rect x="180" y="120" width="14" height="14" fill="#D9783A" transform="rotate(20 187 127)"/>
          <circle cx="320" cy="200" r="6" fill="#2F8C5C"/>
          <rect x="500" y="80" width="10" height="10" fill="#1F6AB5" transform="rotate(45 505 85)"/>
          <circle cx="900" cy="150" r="5" fill="#D9783A"/>
          <rect x="1100" y="100" width="12" height="12" fill="#F0934A" transform="rotate(15 1106 106)"/>
          <circle cx="1300" cy="240" r="7" fill="#6B4FA8"/>
          <rect x="1480" y="160" width="10" height="10" fill="#2F8C5C" transform="rotate(30 1485 165)"/>
        </g>
        
        <rect x="0" y="760" width="1600" height="140" fill="#A88B65"/>
        <rect x="0" y="760" width="1600" height="14" fill="#86684A"/>
        
        <g transform="translate(800 560)">
          
          <ellipse cx="0" cy="208" rx="320" ry="12" fill="rgba(0,0,0,.18)"/>
          
          <g transform="translate(-220 0)">
            <rect x="-12" y="100" width="14" height="100" fill="#2A4A6B"/>
            <rect x="8" y="100" width="14" height="100" fill="#2A4A6B"/>
            <path d="M-32 0 Q-30 -24 0 -28 Q30 -24 32 0 L40 110 L-40 110 Z" fill="#D9783A"/>
            <circle cx="0" cy="-58" r="30" fill="#E8AC85"/>
            <path d="M-26 -64 Q-26 -94 0 -96 Q26 -94 26 -64 Q26 -76 18 -80 Q10 -84 0 -84 Q-10 -84 -18 -80 Q-26 -76 -26 -64 Z" fill="#3A2417"/>
            <path d="M-10 -38 Q0 -32 10 -38" stroke="#1F1814" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </g>
          
          <g transform="translate(0 -10)">
            <rect x="-14" y="100" width="14" height="110" fill="#1F1814"/>
            <rect x="0" y="100" width="14" height="110" fill="#1F1814"/>
            <path d="M-34 0 Q-32 -28 0 -32 Q32 -28 34 0 L42 110 L-42 110 Z" fill="#2F8C5C"/>
            <path d="M-30 -16 Q-58 -80 -64 -150 L-46 -158 Q-36 -100 -16 -36 Z" fill="#2F8C5C"/>
            <circle cx="-66" cy="-156" r="13" fill="#E8AC85"/>
            <circle cx="0" cy="-66" r="32" fill="#E8AC85"/>
            <path d="M-28 -72 Q-28 -104 0 -106 Q28 -104 28 -72 Q28 -86 18 -90 Q8 -94 0 -94 Q-8 -94 -18 -90 Q-28 -86 -28 -72 Z" fill="#3A2417"/>
            <path d="M-12 -44 Q0 -36 12 -44" stroke="#1F1814" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          </g>
          
          <g transform="translate(220 5)">
            <rect x="-12" y="100" width="14" height="100" fill="#2A4A6B"/>
            <rect x="8" y="100" width="14" height="100" fill="#2A4A6B"/>
            <path d="M-32 0 Q-30 -24 0 -28 Q30 -24 32 0 L40 110 L-40 110 Z" fill="#F0934A"/>
            <circle cx="0" cy="-58" r="30" fill="#F5C5A3"/>
            <path d="M-26 -64 Q-26 -94 0 -96 Q26 -94 26 -64 Q26 -76 18 -80 Q10 -84 0 -84 Q-10 -84 -18 -80 Q-26 -76 -26 -64 Z" fill="#5C3F2E"/>
            
            <circle cx="28" cy="-44" r="12" fill="#5C3F2E"/>
            <path d="M-10 -38 Q0 -32 10 -38" stroke="#1F1814" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </g>
        </g>
      </svg>
    </div>
  </div>

  
  <svg className="hero-plane" viewBox="0 0 64 24" fill="currentColor" aria-hidden="true">
    <path d="M2 12 L20 9 L36 4 L52 6 L60 8 L62 11 L60 13 L52 14 L36 16 L20 14 Z" opacity=".95"/>
    <path d="M30 8 L36 2 L40 2 L36 9 Z M30 14 L36 21 L40 21 L36 15 Z" opacity=".85"/>
    <circle cx="46" cy="10" r="1" fill="#FAF8F5"/>
    <circle cx="50" cy="10" r="1" fill="#FAF8F5"/>
  </svg>

  <div className="wrap hero-inner">
    
    <div className="hero-left">
      <div className="hero-badge">
        <span className="dot"></span>
        🌍 Trusted by <b style={{ color: 'var(--ink)', fontWeight: '600' }}>10,000+</b> students worldwide
      </div>
      <h1>
        Study at the World's <span className="ital">Best Universities</span>
      </h1>
      <p className="hero-sub">
        <b>EduTravel</b> connects ambitious students to Oxford, MIT, UBC, Melbourne and <b>200+ top universities</b> — with zero application stress.
      </p>
      <div className="hero-ctas">
        <a href="#services" className="btn">
          Explore Services
          <span className="arrow">→</span>
        </a>
        <a href="#cta" className="btn-outline">
          Book Free Counseling
        </a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="n">10,000+</div>
          <div className="l">Students</div>
        </div>
        <div className="hero-stat-divider"></div>
        <div className="hero-stat">
          <div className="n">98%</div>
          <div className="l">Visa Success</div>
        </div>
        <div className="hero-stat-divider"></div>
        <div className="hero-stat">
          <div className="n">200+</div>
          <div className="l">Universities</div>
        </div>
      </div>
    </div>

    
    <div className="hero-right">
      <div className="mascot-stage" id="mascotStage">

        
        <div className="mascot-state is-active" data-state="0">
          <svg viewBox="0 0 280 360" xmlns="http://www.w3.org/2000/svg" aria-label="Arjun at home, dreaming of studying abroad">
            
            <rect x="0" y="0" width="280" height="360" rx="18" fill="#F2EFE9"/>
            
            <rect x="180" y="48" width="68" height="72" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.5"/>
            <line x1="214" y1="48" x2="214" y2="120" stroke="#DDD9D0" strokeWidth="1.5"/>
            <line x1="180" y1="84" x2="248" y2="84" stroke="#DDD9D0" strokeWidth="1.5"/>
            
            <ellipse cx="198" cy="68" rx="9" ry="4" fill="#EAE6DE"/>
            <ellipse cx="226" cy="98" rx="8" ry="4" fill="#EAE6DE"/>
            
            <line x1="20" y1="300" x2="260" y2="300" stroke="#DDD9D0" strokeWidth="1.5"/>
            
            <ellipse cx="140" cy="305" rx="80" ry="8" fill="#E0CBB1"/>
            
            <rect x="34" y="270" width="44" height="9" rx="1" fill="#C97B3A"/>
            <rect x="38" y="261" width="44" height="9" rx="1" fill="#2A2A26"/>
            <rect x="32" y="252" width="46" height="9" rx="1" fill="#A8602A"/>
            <rect x="40" y="243" width="42" height="9" rx="1" fill="#F2DFC9" stroke="#DDD9D0" strokeWidth="1"/>
            
            <rect x="226" y="270" width="22" height="20" rx="2" fill="#C97B3A"/>
            <path d="M232 270 Q230 250 226 245 M237 270 Q237 244 240 240 M242 270 Q244 248 248 245" stroke="#5C7A4A" strokeWidth="2" strokeLinecap="round" fill="none"/>
            
            <path d="M86 296 Q108 282 140 290 Q172 282 194 296 L194 300 L86 300 Z" fill="#2A2A26"/>
            <path d="M100 296 Q130 286 160 288 Q188 288 192 298" fill="none" stroke="#15110d" strokeWidth="1"/>
            
            <path d="M96 280 Q98 200 140 196 Q182 200 184 280 L186 296 L94 296 Z" fill="#2A2A26"/>
            
            <path d="M130 200 L140 218 L150 200 Z" fill="#1A1A1A"/>
            
            <line x1="140" y1="220" x2="140" y2="270" stroke="#3B3B36" strokeWidth="1.4"/>
            <circle cx="140" cy="232" r="1.4" fill="#C97B3A"/>
            <circle cx="140" cy="244" r="1.4" fill="#C97B3A"/>
            <circle cx="140" cy="256" r="1.4" fill="#C97B3A"/>
            
            <path d="M178 218 Q190 230 184 250 Q178 262 162 262" fill="#2A2A26"/>
            
            <path d="M102 218 Q90 230 96 250 Q102 262 118 262" fill="#2A2A26"/>
            
            <ellipse cx="118" cy="266" rx="8" ry="6" fill="#F5C5A3"/>
            <ellipse cx="162" cy="266" rx="8" ry="6" fill="#F5C5A3"/>
            
            <path d="M104 252 L176 252 L176 274 L104 274 Z" fill="#FAF8F5" stroke="#2A2A26" strokeWidth="1.5"/>
            <line x1="140" y1="252" x2="140" y2="274" stroke="#DDD9D0" strokeWidth="1"/>
            <line x1="112" y1="259" x2="134" y2="259" stroke="#DDD9D0" strokeWidth="1"/>
            <line x1="112" y1="265" x2="132" y2="265" stroke="#DDD9D0" strokeWidth="1"/>
            <line x1="146" y1="259" x2="170" y2="259" stroke="#DDD9D0" strokeWidth="1"/>
            <line x1="146" y1="265" x2="168" y2="265" stroke="#DDD9D0" strokeWidth="1"/>
            
            <rect x="132" y="180" width="16" height="20" fill="#F5C5A3"/>
            
            <ellipse cx="140" cy="160" rx="36" ry="40" fill="#F5C5A3"/>
            
            <path d="M104 158 Q104 116 140 112 Q176 116 176 158 Q176 138 168 132 Q156 122 140 122 Q124 122 112 132 Q104 138 104 158 Z" fill="#1F1814"/>
            
            <ellipse cx="105" cy="160" rx="4" ry="6" fill="#E8AC85"/>
            <ellipse cx="175" cy="160" rx="4" ry="6" fill="#E8AC85"/>
            
            <path d="M120 152 Q126 148 132 152" stroke="#1F1814" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
            <path d="M148 152 Q154 148 160 152" stroke="#1F1814" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
            
            <ellipse cx="126" cy="161" rx="2.6" ry="2.8" fill="#1F1814"/>
            <ellipse cx="154" cy="161" rx="2.6" ry="2.8" fill="#1F1814"/>
            <circle cx="127" cy="160" r=".8" fill="#fff"/>
            <circle cx="155" cy="160" r=".8" fill="#fff"/>
            
            <path d="M140 168 Q138 176 140 180 Q142 180 144 180" stroke="#E8AC85" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            
            <path d="M132 190 Q140 195 148 190" stroke="#7A4A33" strokeWidth="2" strokeLinecap="round" fill="none"/>
            
            <circle cx="62" cy="116" r="3" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.2"/>
            <circle cx="72" cy="100" r="5" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.2"/>
            <ellipse cx="88" cy="80" rx="20" ry="16" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.2"/>
            
            <path d="M76 78 L100 72 L88 80 Z" fill="#1A1A1A"/>
            <path d="M76 78 L88 80 L100 72 L88 78 Z" fill="#1A1A1A"/>
            <rect x="86" y="80" width="4" height="6" fill="#1A1A1A"/>
            <circle cx="100" cy="74" r="1.5" fill="#C97B3A"/>
          </svg>
        </div>

        
        <div className="mascot-state" data-state="1">
          <svg viewBox="0 0 280 360" xmlns="http://www.w3.org/2000/svg" aria-label="Arjun researching universities at a desk">
            <rect x="0" y="0" width="280" height="360" rx="18" fill="#F2EFE9"/>
            
            <rect x="190" y="40" width="74" height="64" rx="2" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.5"/>
            <line x1="206" y1="58" x2="248" y2="58" stroke="#DDD9D0" strokeWidth="1"/>
            <line x1="206" y1="68" x2="240" y2="68" stroke="#DDD9D0" strokeWidth="1"/>
            <line x1="206" y1="78" x2="244" y2="78" stroke="#DDD9D0" strokeWidth="1"/>
            <line x1="206" y1="88" x2="232" y2="88" stroke="#DDD9D0" strokeWidth="1"/>
            <circle cx="198" cy="48" r="2" fill="#C97B3A"/>
            
            <text x="18" y="60" fontFamily="Inter" fontSize="10" fill="#7A7570" fontStyle="italic">Dreams ✦</text>
            
            <rect x="16" y="262" width="248" height="10" fill="#A8602A"/>
            <rect x="16" y="272" width="248" height="3" fill="#7A4A22"/>
            
            <rect x="34" y="272" width="6" height="60" fill="#7A4A22"/>
            <rect x="240" y="272" width="6" height="60" fill="#7A4A22"/>
            
            <path d="M88 256 L210 256 L218 262 L80 262 Z" fill="#2A2A26"/>
            
            <rect x="92" y="186" width="118" height="74" rx="3" fill="#1A1A1A"/>
            <rect x="96" y="190" width="110" height="64" rx="2" fill="#FAF8F5"/>
            
            <rect x="100" y="194" width="40" height="6" rx="1" fill="#C97B3A"/>
            <text x="100" y="214" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#1A1A1A">Oxford University</text>
            <line x1="100" y1="220" x2="200" y2="220" stroke="#DDD9D0" strokeWidth="0.8"/>
            <rect x="100" y="226" width="46" height="4" rx="1" fill="#DDD9D0"/>
            <rect x="100" y="234" width="58" height="4" rx="1" fill="#DDD9D0"/>
            <rect x="100" y="242" width="52" height="4" rx="1" fill="#DDD9D0"/>
            
            <rect x="228" y="232" width="22" height="26" rx="2" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.4"/>
            <path d="M250 240 Q258 240 258 248 Q258 254 250 254" fill="none" stroke="#DDD9D0" strokeWidth="1.4"/>
            <ellipse cx="239" cy="234" rx="9" ry="2" fill="#7A4A22"/>
            
            <path d="M234 226 Q236 220 234 216 M242 224 Q244 218 242 214" stroke="#DDD9D0" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            
            <path d="M96 258 Q100 200 140 196 Q180 200 184 258 Z" fill="#C97B3A"/>
            
            <path d="M170 220 Q200 224 208 240 L208 246 Q198 248 188 244 Q176 240 168 232 Z" fill="#C97B3A"/>
            
            <path d="M110 220 Q98 218 96 200 Q98 184 112 180 L120 188 Q118 198 122 206 Q122 212 116 216 Z" fill="#C97B3A"/>
            
            <ellipse cx="121" cy="186" rx="6" ry="5" fill="#F5C5A3"/>
            
            <rect x="132" y="180" width="16" height="18" fill="#F5C5A3"/>
            
            <ellipse cx="142" cy="160" rx="36" ry="40" fill="#F5C5A3" transform="rotate(-6 142 160)"/>
            
            <path d="M106 158 Q104 116 140 112 Q178 116 178 158 Q176 138 166 130 Q156 122 138 124 Q120 124 114 134 Q106 142 106 158 Z" fill="#1F1814" transform="rotate(-6 142 160)"/>
            
            <ellipse cx="108" cy="160" rx="4" ry="6" fill="#E8AC85" transform="rotate(-6 142 160)"/>
            
            <path d="M122 150 Q128 146 134 152" stroke="#1F1814" strokeWidth="2.4" strokeLinecap="round" fill="none" transform="rotate(-6 142 160)"/>
            <path d="M150 152 Q156 146 162 150" stroke="#1F1814" strokeWidth="2.4" strokeLinecap="round" fill="none" transform="rotate(-6 142 160)"/>
            
            <ellipse cx="128" cy="162" rx="3" ry="3.2" fill="#1F1814" transform="rotate(-6 142 160)"/>
            <ellipse cx="156" cy="162" rx="3" ry="3.2" fill="#1F1814" transform="rotate(-6 142 160)"/>
            <circle cx="129" cy="161" r="1" fill="#fff" transform="rotate(-6 142 160)"/>
            <circle cx="157" cy="161" r="1" fill="#fff" transform="rotate(-6 142 160)"/>
            
            <path d="M141 168 Q140 176 142 180" stroke="#E8AC85" strokeWidth="1.5" fill="none" strokeLinecap="round" transform="rotate(-6 142 160)"/>
            
            <ellipse cx="142" cy="190" rx="3" ry="2.5" fill="#7A4A33" transform="rotate(-6 142 160)"/>
            
            <text x="74" y="140" fontFamily="Inter" fontSize="14" fill="#C97B3A" fontWeight="700">?</text>
            <text x="66" y="170" fontFamily="Inter" fontSize="9" fill="#C97B3A">✦</text>
          </svg>
        </div>

        
        <div className="mascot-state" data-state="2">
          <svg viewBox="0 0 280 360" xmlns="http://www.w3.org/2000/svg" aria-label="Arjun packing — offer letter in hand, fist pump">
            <rect x="0" y="0" width="280" height="360" rx="18" fill="#F2EFE9"/>
            
            <line x1="0" y1="312" x2="280" y2="312" stroke="#DDD9D0" strokeWidth="1.5"/>
            
            <rect x="32" y="40" width="40" height="30" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.5"/>
            <circle cx="52" cy="55" r="6" fill="#C97B3A" opacity=".5"/>
            <rect x="28" y="80" width="30" height="22" fill="#FAF8F5" stroke="#DDD9D0" strokeWidth="1.5"/>
            
            <path d="M22 30 L25 26 L28 30 L25 34 Z" fill="#C97B3A"/>
            <rect x="248" y="34" width="6" height="6" fill="#C97B3A" transform="rotate(20 251 37)"/>
            <circle cx="240" cy="60" r="2.5" fill="#C97B3A"/>
            <path d="M196 28 L198 24 L200 28 L198 32 Z" fill="#1F1814"/>
            
            
            <rect x="176" y="278" width="92" height="34" rx="4" fill="#2A2A26"/>
            <rect x="176" y="278" width="92" height="6" fill="#1A1A1A"/>
            
            <rect x="182" y="284" width="80" height="22" fill="#7A4A22"/>
            
            <rect x="186" y="288" width="34" height="6" fill="#C97B3A"/>
            <rect x="186" y="296" width="34" height="6" fill="#F2DFC9"/>
            <rect x="224" y="290" width="32" height="6" fill="#2A2A26"/>
            
            <circle cx="245" cy="298" r="7" fill="#FAF8F5" stroke="#1F1814" strokeWidth="1"/>
            <path d="M238 298 Q245 294 252 298 M238 298 Q245 302 252 298" stroke="#C97B3A" strokeWidth=".8" fill="none"/>
            <line x1="245" y1="291" x2="245" y2="305" stroke="#1F1814" strokeWidth=".6"/>
            
            <rect x="176" y="232" width="92" height="46" rx="4" fill="#1F1814"/>
            <rect x="176" y="232" width="92" height="4" fill="#15110d"/>
            
            <rect x="196" y="244" width="58" height="28" rx="1" fill="#F8E89C" transform="rotate(-4 225 258)"/>
            <text x="225" y="262" textAnchor="middle" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#1A1A1A" transform="rotate(-4 225 258)">LONDON ✈</text>
            
            <ellipse cx="100" cy="316" rx="56" ry="4" fill="rgba(0,0,0,.08)"/>
            
            <rect x="84" y="248" width="14" height="68" rx="2" fill="#2A4A6B"/>
            <rect x="104" y="248" width="14" height="68" rx="2" fill="#2A4A6B"/>
            
            <ellipse cx="91" cy="318" rx="10" ry="4" fill="#1A1A1A"/>
            <ellipse cx="111" cy="318" rx="10" ry="4" fill="#1A1A1A"/>
            
            <path d="M70 178 Q72 152 100 148 Q130 152 132 178 L130 250 L74 250 Z" fill="#C97B3A"/>
            
            <path d="M124 168 Q150 130 152 86 L142 80 Q132 124 116 158 Z" fill="#C97B3A"/>
            
            <circle cx="147" cy="83" r="10" fill="#F5C5A3"/>
            <path d="M140 78 L154 78 M140 84 L154 84 M140 90 L154 90" stroke="#E8AC85" strokeWidth="1.2" strokeLinecap="round"/>
            
            <path d="M78 168 Q60 184 56 220 L66 226 Q76 196 90 184 Z" fill="#C97B3A"/>
            
            <ellipse cx="60" cy="222" rx="7" ry="6" fill="#F5C5A3"/>
            
            <rect x="36" y="216" width="46" height="58" rx="2" fill="#FAF8F5" stroke="#1F1814" strokeWidth="1.5" transform="rotate(-8 59 245)"/>
            <rect x="40" y="222" width="36" height="6" fill="#C97B3A" transform="rotate(-8 59 245)"/>
            <text x="59" y="244" textAnchor="middle" fontFamily="Inter" fontSize="6" fontWeight="700" fill="#1A1A1A" transform="rotate(-8 59 245)">VISA</text>
            <text x="59" y="252" textAnchor="middle" fontFamily="Inter" fontSize="4" fill="#7A7570" transform="rotate(-8 59 245)">APPROVED</text>
            <rect x="44" y="256" width="28" height="3" fill="#DDD9D0" transform="rotate(-8 59 245)"/>
            <rect x="44" y="262" width="22" height="3" fill="#DDD9D0" transform="rotate(-8 59 245)"/>
            <circle cx="70" cy="266" r="6" fill="none" stroke="#C97B3A" strokeWidth="1.4" transform="rotate(-8 59 245)"/>
            
            <rect x="93" y="132" width="14" height="18" fill="#F5C5A3"/>
            
            <ellipse cx="100" cy="114" rx="32" ry="36" fill="#F5C5A3"/>
            
            <path d="M68 112 Q68 76 100 72 Q132 76 132 112 Q130 94 122 88 Q112 80 100 80 Q88 80 78 88 Q70 94 68 112 Z" fill="#1F1814"/>
            <ellipse cx="69" cy="114" rx="3.5" ry="5" fill="#E8AC85"/>
            
            <path d="M82 104 Q88 99 94 104" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <path d="M106 104 Q112 99 118 104" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            
            <path d="M84 116 Q88 112 92 116" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <path d="M108 116 Q112 112 116 116" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            
            <circle cx="80" cy="128" r="4" fill="#E89A8A" opacity=".4"/>
            <circle cx="120" cy="128" r="4" fill="#E89A8A" opacity=".4"/>
            
            <path d="M100 120 Q98 128 100 132" stroke="#E8AC85" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            
            <path d="M88 138 Q100 152 112 138 Q108 144 100 144 Q92 144 88 138 Z" fill="#7A4A33"/>
            <path d="M91 138 Q100 142 109 138" stroke="#FAF8F5" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        
        <div className="mascot-state" data-state="3">
          <svg viewBox="0 0 280 360" xmlns="http://www.w3.org/2000/svg" aria-label="Arjun at airport, boarding pass raised">
            <rect x="0" y="0" width="280" height="360" rx="18" fill="#F2EFE9"/>
            
            <line x1="0" y1="316" x2="280" y2="316" stroke="#DDD9D0" strokeWidth="1.5"/>
            <line x1="0" y1="324" x2="280" y2="324" stroke="#DDD9D0" strokeWidth="1" strokeDasharray="4 6"/>
            
            <rect x="22" y="36" width="236" height="76" rx="6" fill="#1A1A1A"/>
            <rect x="22" y="36" width="236" height="14" rx="6" fill="#0F0F0F"/>
            <circle cx="34" cy="43" r="2" fill="#C97B3A"/>
            <circle cx="44" cy="43" r="2" fill="#7A7570"/>
            <text x="138" y="46" textAnchor="middle" fontFamily="Inter" fontSize="7" fontWeight="600" fill="#7A7570" letterSpacing="2">DEPARTURES</text>
            
            <rect x="28" y="56" width="224" height="18" rx="2" fill="#2A2A26"/>
            <text x="36" y="68" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#C97B3A">LHR</text>
            <text x="72" y="68" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#FAF8F5">London Heathrow</text>
            <text x="172" y="68" fontFamily="Inter" fontSize="9" fontWeight="500" fill="#FAF8F5">14:25</text>
            <rect x="208" y="60" width="38" height="11" rx="2" fill="#C97B3A"/>
            <text x="227" y="69" textAnchor="middle" fontFamily="Inter" fontSize="7" fontWeight="700" fill="#FAF8F5">BOARDING</text>
            
            <text x="36" y="88" fontFamily="Inter" fontSize="8" fontWeight="500" fill="#7A7570">JFK</text>
            <text x="72" y="88" fontFamily="Inter" fontSize="8" fill="#7A7570">New York</text>
            <text x="172" y="88" fontFamily="Inter" fontSize="8" fill="#7A7570">15:10</text>
            <text x="216" y="88" fontFamily="Inter" fontSize="8" fill="#7A7570">On time</text>
            
            <text x="36" y="104" fontFamily="Inter" fontSize="8" fontWeight="500" fill="#7A7570">YYZ</text>
            <text x="72" y="104" fontFamily="Inter" fontSize="8" fill="#7A7570">Toronto</text>
            <text x="172" y="104" fontFamily="Inter" fontSize="8" fill="#7A7570">16:00</text>
            <text x="216" y="104" fontFamily="Inter" fontSize="8" fill="#7A7570">On time</text>
            
            <rect x="200" y="130" width="50" height="22" rx="2" fill="#C97B3A"/>
            <text x="225" y="144" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#FAF8F5">GATE 7</text>
            
            <ellipse cx="40" cy="318" rx="6" ry="3" fill="rgba(0,0,0,.1)"/>
            <ellipse cx="258" cy="318" rx="6" ry="3" fill="rgba(0,0,0,.1)"/>
            
            <rect x="172" y="282" width="22" height="34" rx="3" fill="#1F1814"/>
            <rect x="174" y="286" width="18" height="4" fill="#2A2A26"/>
            <line x1="183" y1="282" x2="183" y2="270" stroke="#2A2A26" strokeWidth="2.5"/>
            <rect x="178" y="266" width="10" height="6" rx="1" fill="#2A2A26"/>
            <circle cx="176" cy="316" r="3" fill="#0F0F0F"/>
            <circle cx="190" cy="316" r="3" fill="#0F0F0F"/>
            
            <rect x="186" y="290" width="6" height="8" fill="#C97B3A"/>
            
            <rect x="92" y="252" width="14" height="64" rx="2" fill="#2A4A6B"/>
            <rect x="112" y="252" width="14" height="64" rx="2" fill="#2A4A6B"/>
            
            <ellipse cx="99" cy="318" rx="10" ry="4" fill="#1A1A1A"/>
            <ellipse cx="119" cy="318" rx="10" ry="4" fill="#1A1A1A"/>
            
            <path d="M76 188 Q70 220 76 256 L82 258 L82 188 Z" fill="#2A2A26"/>
            <path d="M76 188 Q74 184 80 180 L84 180 Q82 188 82 192 Z" fill="#1A1A1A"/>
            
            <path d="M82 186 Q84 156 110 152 Q136 156 138 186 L140 256 L78 256 Z" fill="#2A2A26"/>
            
            <path d="M104 156 L114 174 L124 156 L122 200 L106 200 Z" fill="#C97B3A"/>
            
            <line x1="114" y1="180" x2="114" y2="252" stroke="#1A1A1A" strokeWidth="1.4"/>
            
            <path d="M134 174 Q160 130 162 70 L150 64 Q140 124 126 168 Z" fill="#2A2A26"/>
            
            <ellipse cx="156" cy="68" rx="8" ry="7" fill="#F5C5A3"/>
            
            <rect x="138" y="36" width="54" height="32" rx="2" fill="#FAF8F5" stroke="#1F1814" strokeWidth="1.4" transform="rotate(8 165 52)"/>
            <rect x="138" y="36" width="14" height="32" fill="#C97B3A" transform="rotate(8 165 52)"/>
            <text x="145" y="56" textAnchor="middle" fontFamily="Inter" fontSize="7" fontWeight="700" fill="#FAF8F5" transform="rotate(8 165 52)">✈</text>
            <text x="154" y="46" fontFamily="Inter" fontSize="5" fontWeight="600" fill="#7A7570" transform="rotate(8 165 52)">BOARDING</text>
            <text x="154" y="55" fontFamily="Inter" fontSize="6" fontWeight="700" fill="#1A1A1A" transform="rotate(8 165 52)">BLR → LHR</text>
            <text x="154" y="63" fontFamily="Inter" fontSize="5" fill="#7A7570" transform="rotate(8 165 52)">GATE 7  14:25</text>
            
            <path d="M80 174 Q70 200 72 240 L84 244 Q86 210 92 184 Z" fill="#2A2A26"/>
            
            <ellipse cx="78" cy="246" rx="6" ry="5" fill="#F5C5A3"/>
            
            <rect x="103" y="138" width="14" height="16" fill="#F5C5A3"/>
            
            <ellipse cx="110" cy="120" rx="32" ry="36" fill="#F5C5A3"/>
            
            <path d="M78 118 Q78 82 110 78 Q142 82 142 118 Q140 100 132 94 Q122 86 110 86 Q98 86 88 94 Q80 100 78 118 Z" fill="#1F1814"/>
            <ellipse cx="79" cy="120" rx="3.5" ry="5" fill="#E8AC85"/>
            
            <path d="M92 110 Q98 106 104 110" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <path d="M116 110 Q122 106 128 110" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            
            <ellipse cx="98" cy="120" rx="2.8" ry="3" fill="#1F1814"/>
            <ellipse cx="122" cy="120" rx="2.8" ry="3" fill="#1F1814"/>
            <circle cx="99" cy="119" r="1" fill="#fff"/>
            <circle cx="123" cy="119" r="1" fill="#fff"/>
            
            <path d="M110 126 Q108 134 110 138" stroke="#E8AC85" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            
            <path d="M96 144 Q110 158 124 144" stroke="#7A4A33" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
            <path d="M99 145 Q110 150 121 145 Q120 142 110 142 Q100 142 99 145 Z" fill="#fff" opacity=".5"/>
          </svg>
        </div>

        
        <div className="mascot-state" data-state="4">
          <svg viewBox="0 0 280 360" xmlns="http://www.w3.org/2000/svg" aria-label="Arjun arrived at UCL, celebrating">
            <rect x="0" y="0" width="280" height="360" rx="18" fill="#F2EFE9"/>
            
            <rect x="0" y="0" width="280" height="200" fill="#EFEBE2"/>
            
            <circle cx="38" cy="46" r="14" fill="#F2DFC9"/>
            
            <path d="M68 220 L68 130 Q68 80 140 80 Q212 80 212 130 L212 220" stroke="#1F1814" strokeWidth="3" fill="none"/>
            <rect x="58" y="220" width="20" height="92" fill="#1F1814"/>
            <rect x="202" y="220" width="20" height="92" fill="#1F1814"/>
            
            <rect x="80" y="118" width="120" height="14" fill="#2A2A26"/>
            <text x="140" y="129" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" letterSpacing="3" fill="#C97B3A">UNIVERSITY</text>
            
            <line x1="78" y1="220" x2="78" y2="132" stroke="#7A7570" strokeWidth="1"/>
            <line x1="202" y1="220" x2="202" y2="132" stroke="#7A7570" strokeWidth="1"/>
            
            <line x1="0" y1="316" x2="280" y2="316" stroke="#DDD9D0" strokeWidth="1.5"/>
            <ellipse cx="140" cy="320" rx="56" ry="4" fill="rgba(0,0,0,.08)"/>
            
            <g transform="translate(140 36)">
              <path d="M-22 4 L0 -6 L22 4 L0 14 Z" fill="#1A1A1A"/>
              <rect x="-3" y="14" width="6" height="6" fill="#1A1A1A"/>
              <path d="M14 6 L18 24" stroke="#C97B3A" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="18" cy="25" r="2.5" fill="#C97B3A"/>
            </g>
            
            <g transform="translate(40 130)">
              <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#C97B3A"/>
            </g>
            <g transform="translate(240 130)">
              <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#C97B3A"/>
            </g>
            <circle cx="24" cy="180" r="3" fill="#C97B3A"/>
            <circle cx="256" cy="180" r="3" fill="#C97B3A"/>
            <rect x="20" y="240" width="5" height="5" fill="#C97B3A" transform="rotate(15 22 242)"/>
            <rect x="252" y="240" width="5" height="5" fill="#1F1814" transform="rotate(25 254 242)"/>
            
            <rect x="124" y="258" width="14" height="58" rx="2" fill="#2A4A6B"/>
            <rect x="144" y="258" width="14" height="58" rx="2" fill="#2A4A6B"/>
            
            <ellipse cx="131" cy="318" rx="9" ry="4" fill="#1A1A1A"/>
            <ellipse cx="151" cy="318" rx="9" ry="4" fill="#1A1A1A"/>
            
            <path d="M104 186 Q104 154 140 150 Q176 154 176 186 L180 262 L100 262 Z" fill="#7A0E1E"/>
            
            <path d="M112 154 Q114 138 140 134 Q166 138 168 154 Q166 144 140 142 Q114 144 112 154 Z" fill="#5A0A18"/>
            
            <path d="M118 220 L162 220 L156 244 L124 244 Z" fill="#5A0A18"/>
            
            <text x="140" y="208" textAnchor="middle" fontFamily="Inter" fontSize="14" fontWeight="800" letterSpacing="2" fill="#FAF8F5">UCL</text>
            
            <path d="M110 168 Q88 130 80 78 L92 72 Q102 122 122 162 Z" fill="#7A0E1E"/>
            <path d="M170 168 Q192 130 200 78 L188 72 Q178 122 158 162 Z" fill="#7A0E1E"/>
            
            <circle cx="86" cy="74" r="9" fill="#F5C5A3"/>
            <circle cx="194" cy="74" r="9" fill="#F5C5A3"/>
            <path d="M80 70 L92 70 M80 76 L92 76" stroke="#E8AC85" strokeWidth="1" strokeLinecap="round"/>
            <path d="M188 70 L200 70 M188 76 L200 76" stroke="#E8AC85" strokeWidth="1" strokeLinecap="round"/>
            
            <rect x="133" y="138" width="14" height="14" fill="#F5C5A3"/>
            
            <ellipse cx="140" cy="120" rx="32" ry="36" fill="#F5C5A3"/>
            
            <path d="M108 118 Q108 82 140 78 Q172 82 172 118 Q170 100 162 94 Q152 86 140 86 Q128 86 118 94 Q110 100 108 118 Z" fill="#1F1814"/>
            <ellipse cx="109" cy="120" rx="3.5" ry="5" fill="#E8AC85"/>
            
            <path d="M122 108 Q128 104 134 108" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <path d="M146 108 Q152 104 158 108" stroke="#1F1814" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            
            <path d="M122 120 Q128 114 134 120" stroke="#1F1814" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
            <path d="M146 120 Q152 114 158 120" stroke="#1F1814" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
            
            <circle cx="118" cy="132" r="5" fill="#E89A8A" opacity=".5"/>
            <circle cx="162" cy="132" r="5" fill="#E89A8A" opacity=".5"/>
            
            <path d="M140 126 Q138 134 140 138" stroke="#E8AC85" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            
            <path d="M124 144 Q140 160 156 144 Q150 154 140 154 Q130 154 124 144 Z" fill="#7A4A33"/>
            <path d="M128 144 Q140 150 152 144" stroke="#FAF8F5" strokeWidth="2.4" fill="none"/>
          </svg>
        </div>

      </div>

      <div className="mascot-caption" id="mascotCaption">Arjun — dreaming of studying abroad</div>
      <div className="mascot-rail">
        <div className="mascot-rail-fill" id="mascotRailFill"></div>
        <div className="mascot-rail-dots">
          <span className="on"></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div className="mascot-hint">↓ scroll to follow Arjun's journey</div>
    </div>
  </div>

  
  <div className="hero-scroll">
    <span>Scroll</span>
    <span className="line"></span>
  </div>
</header>


<section className="marquee-band marquee-band-display" aria-hidden="true">
  <div className="marquee-track">
    <div className="marquee-item">🇬🇧 United Kingdom <span className="sep">✦</span></div>
    <div className="marquee-item">🇺🇸 United States <span className="sep">✦</span></div>
    <div className="marquee-item">🇨🇦 Canada <span className="sep">✦</span></div>
    <div className="marquee-item">🇦🇺 Australia <span className="sep">✦</span></div>
    <div className="marquee-item">🇩🇪 Germany <span className="sep">✦</span></div>
    <div className="marquee-item">🇳🇿 New Zealand <span className="sep">✦</span></div>
    <div className="marquee-item">🇮🇪 Ireland <span className="sep">✦</span></div>
    <div className="marquee-item">🇸🇬 Singapore <span className="sep">✦</span></div>
    <div className="marquee-item">🇬🇧 United Kingdom <span className="sep">✦</span></div>
    <div className="marquee-item">🇺🇸 United States <span className="sep">✦</span></div>
    <div className="marquee-item">🇨🇦 Canada <span className="sep">✦</span></div>
    <div className="marquee-item">🇦🇺 Australia <span className="sep">✦</span></div>
    <div className="marquee-item">🇩🇪 Germany <span className="sep">✦</span></div>
    <div className="marquee-item">🇳🇿 New Zealand <span className="sep">✦</span></div>
    <div className="marquee-item">🇮🇪 Ireland <span className="sep">✦</span></div>
    <div className="marquee-item">🇸🇬 Singapore <span className="sep">✦</span></div>
  </div>
</section>
<section className="marquee-band" aria-hidden="true">
  <div className="marquee-track reverse">
    <div className="marquee-item">Application Editing <span className="sep">·</span></div>
    <div className="marquee-item">Personal Statements <span className="sep">·</span></div>
    <div className="marquee-item">SOP Coaching <span className="sep">·</span></div>
    <div className="marquee-item">Visa Guidance <span className="sep">·</span></div>
    <div className="marquee-item">Scholarship Hunting <span className="sep">·</span></div>
    <div className="marquee-item">Interview Prep <span className="sep">·</span></div>
    <div className="marquee-item">IELTS · TOEFL <span className="sep">·</span></div>
    <div className="marquee-item">Forex · Accommodation <span className="sep">·</span></div>
    <div className="marquee-item">Pre-departure Briefing <span className="sep">·</span></div>
    <div className="marquee-item">Application Editing <span className="sep">·</span></div>
    <div className="marquee-item">Personal Statements <span className="sep">·</span></div>
    <div className="marquee-item">SOP Coaching <span className="sep">·</span></div>
    <div className="marquee-item">Visa Guidance <span className="sep">·</span></div>
    <div className="marquee-item">Scholarship Hunting <span className="sep">·</span></div>
    <div className="marquee-item">Interview Prep <span className="sep">·</span></div>
    <div className="marquee-item">IELTS · TOEFL <span className="sep">·</span></div>
    <div className="marquee-item">Forex · Accommodation <span className="sep">·</span></div>
    <div className="marquee-item">Pre-departure Briefing <span className="sep">·</span></div>
  </div>
</section>


<section className="section" id="services">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">What we do</span>
      <h2>Everything you need to <span className="ital">study abroad</span>.</h2>
      <p>From your first university shortlist to landing at your dorm — EduTravel covers every step, with a real human consultant who knows the system inside out.</p>
    </div>

    <div className="services">
      <div className="service-card reveal">
        <div className="service-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        </div>
        <div className="service-num">/ 01</div>
        <div className="service-badge-row"><span className="badge-dark">FREE</span></div>
        <h3>Free Application Service</h3>
        <p>Personal statement editing, document guidance, deadline tracking. We help you get to the finish line without spending a rupee.</p>
        <div className="service-tags"><span>Applications</span><span>Editing</span><span>Free</span></div>
        <span className="service-learn">Learn more <span className="arr">→</span></span>
      </div>

      <div className="service-card reveal">
        <div className="service-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5"/></svg>
        </div>
        <div className="service-num">/ 02</div>
        <div className="service-badge-row"><span className="badge-amber">Most Popular</span></div>
        <h3>Premium Application Service</h3>
        <p>End-to-end application handling, with a guaranteed offer from at least one of your target universities — or your money back.</p>
        <div className="service-tags"><span>Guaranteed</span><span>End-to-end</span><span>Priority</span></div>
        <span className="service-learn">Learn more <span className="arr">→</span></span>
      </div>

      <div className="service-card reveal">
        <div className="service-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div className="service-num">/ 03</div>
        <h3>Visa Assistance</h3>
        <p>Complete student visa support. Document prep, form filing, financial proofs, and interview coaching — for every major destination.</p>
        <div className="service-tags"><span>Student Visa</span><span>Documents</span><span>Interview Prep</span></div>
        <span className="service-learn">Learn more <span className="arr">→</span></span>
      </div>

      <div className="service-card reveal">
        <div className="service-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div className="service-num">/ 04</div>
        <h3>Elite University Prep</h3>
        <p>Oxbridge, Ivy League, Russell Group strategy. Aptitude tests, written work, alumni mock interviews — built for the top 1%.</p>
        <div className="service-tags"><span>Oxford</span><span>Cambridge</span><span>Ivy League</span></div>
        <span className="service-learn">Learn more <span className="arr">→</span></span>
      </div>
    </div>
  </div>
</section>


<section className="section" id="destinations" style={{ paddingTop: '0' }}>
  <div className="wrap">
    <div className="section-head-row">
      <div className="head-left reveal">
        <span className="eyebrow">Destinations</span>
        <h2>Study <span className="ital">anywhere</span> in the world.</h2>
      </div>
      <div className="head-right reveal">
        From the cobbled lanes of Oxford to the harbour view at Sydney — we've placed students at the best universities in 30+ countries. Hover the cards to pause.
      </div>
    </div>
  </div>

  <div className="destinations-wrap">
    <div className="destinations-track" id="destinationsTrack">

      
      <article className="dest-big">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ukSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FCEFC9"/>
                <stop offset="100%" stopColor="#F0B985"/>
              </linearGradient>
            </defs>
            <rect width="360" height="220" fill="url(#ukSky)"/>
            <circle cx="60" cy="60" r="22" fill="#FCF3CB"/>
            
            <rect x="0" y="180" width="360" height="40" fill="#5E8FB8"/>
            <rect x="0" y="180" width="360" height="6" fill="#7AAACC"/>
            
            <path d="M40 175 Q180 130 320 175" stroke="#3A2417" strokeWidth="3" fill="none" opacity=".5"/>
            
            <g transform="translate(250 70)">
              <rect x="-14" y="0" width="28" height="120" fill="#A8836B"/>
              <rect x="-16" y="50" width="32" height="22" fill="#8C6D55"/>
              <circle cx="0" cy="61" r="6" fill="#F8E89C"/>
              <polygon points="-14,0 14,0 0,-22" fill="#8C6D55"/>
              <rect x="-2" y="-30" width="4" height="10" fill="#A8836B"/>
            </g>
            
            <g fill="#7A6555">
              <rect x="60" y="118" width="32" height="62"/>
              <rect x="100" y="100" width="26" height="80"/>
              <rect x="135" y="130" width="32" height="50"/>
              <rect x="175" y="110" width="26" height="70"/>
              <rect x="210" y="120" width="30" height="60"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇬🇧</span> Europe</div>
          <div className="dest-img-badge">Popular</div>
        </div>
        <div className="dest-body">
          <div className="country">United Kingdom</div>
          <div className="desc">Oxbridge, Russell Group, 4-year work visas, and the world's most concentrated cluster of top-50 universities.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">800+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">120+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">£15k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore UK programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="dest-big">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="usSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDDCB1"/>
                <stop offset="100%" stopColor="#E07F4A"/>
              </linearGradient>
            </defs>
            <rect width="360" height="220" fill="url(#usSky)"/>
            <circle cx="280" cy="50" r="20" fill="#FCF3CB"/>
            
            <g fill="#3F3530">
              <rect x="20" y="120" width="34" height="80"/>
              <rect x="60" y="100" width="26" height="100"/>
              <rect x="92" y="80" width="40" height="120"/>
              <rect x="138" y="60" width="30" height="140"/>
              <rect x="174" y="40" width="36" height="160"/>
              <rect x="216" y="70" width="26" height="130"/>
              <rect x="248" y="90" width="34" height="110"/>
              <rect x="288" y="60" width="30" height="140"/>
              <rect x="324" y="100" width="32" height="100"/>
            </g>
            
            <g transform="translate(70 50)">
              <rect x="-4" y="50" width="8" height="100" fill="#3F8F7C"/>
              <ellipse cx="0" cy="50" rx="12" ry="6" fill="#3F8F7C"/>
              <circle cx="0" cy="36" r="10" fill="#3F8F7C"/>
              <path d="M-10 30 L-12 18 M-4 28 L-3 14 M3 28 L4 14 M10 30 L12 18" stroke="#3F8F7C" strokeWidth="2"/>
              <rect x="-12" y="40" width="6" height="14" fill="#3F8F7C"/>
              <path d="M-12 38 L-22 22 L-18 22 Z" fill="#FCF3CB"/>
            </g>
            
            <g fill="#F9E59C" opacity=".8">
              <rect x="100" y="100" width="4" height="6"/><rect x="118" y="120" width="4" height="6"/>
              <rect x="148" y="80" width="4" height="6"/><rect x="180" y="60" width="4" height="6"/>
              <rect x="220" y="90" width="4" height="6"/><rect x="260" y="110" width="4" height="6"/>
              <rect x="300" y="80" width="4" height="6"/><rect x="330" y="120" width="4" height="6"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇺🇸</span> Americas</div>
        </div>
        <div className="dest-body">
          <div className="country">United States</div>
          <div className="desc">Ivy League dreams, world-leading research budgets, and the largest STEM OPT pipeline. The original global classroom.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">600+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">200+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">$32k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore USA programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="dest-big">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="caSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D8E9EF"/>
                <stop offset="100%" stopColor="#8FB4C7"/>
              </linearGradient>
            </defs>
            <rect width="360" height="220" fill="url(#caSky)"/>
            
            <path d="M0 160 L60 80 L120 130 L180 60 L240 110 L300 70 L360 130 L360 220 L0 220 Z" fill="#7A8480"/>
            <path d="M0 175 L80 120 L160 160 L220 100 L300 140 L360 110 L360 220 L0 220 Z" fill="#5C6E68"/>
            
            <path d="M48 95 L60 80 L72 95 L66 90 Z" fill="#FAF8F5"/>
            <path d="M168 75 L180 60 L192 75 L186 70 Z" fill="#FAF8F5"/>
            <path d="M288 85 L300 70 L312 85 L306 80 Z" fill="#FAF8F5"/>
            
            <g transform="translate(250 30)">
              <rect x="-3" y="80" width="6" height="100" fill="#A8836B"/>
              <ellipse cx="0" cy="80" rx="14" ry="8" fill="#867057"/>
              <rect x="-10" y="76" width="20" height="14" fill="#867057"/>
              <rect x="-2" y="60" width="4" height="22" fill="#867057"/>
              <circle cx="0" cy="58" r="3" fill="#D9783A"/>
            </g>
            
            <g transform="translate(70 60)" fill="#D9783A">
              <path d="M0 -16 L4 -6 L14 -6 L7 0 L10 10 L0 4 L-10 10 L-7 0 L-14 -6 L-4 -6 Z"/>
            </g>
            
            <g fill="#2F5B3A">
              <polygon points="20,180 30,150 40,180"/>
              <polygon points="100,180 112,140 124,180"/>
              <polygon points="320,180 332,150 344,180"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇨🇦</span> Americas</div>
          <div className="dest-img-badge">PR-friendly</div>
        </div>
        <div className="dest-body">
          <div className="country">Canada</div>
          <div className="desc">Affordable tuition, generous post-study work permits, and one of the smoothest pathways to permanent residency for students.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">400+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">90+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">C$18k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore Canada programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="dest-big">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="auSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDEDD3"/>
                <stop offset="100%" stopColor="#EBA38E"/>
              </linearGradient>
            </defs>
            <rect width="360" height="220" fill="url(#auSky)"/>
            <circle cx="290" cy="50" r="18" fill="#FCF3CB"/>
            
            <rect x="0" y="160" width="360" height="60" fill="#5E8FB8"/>
            <rect x="0" y="160" width="360" height="8" fill="#7AAACC"/>
            
            <g transform="translate(200 110)">
              <path d="M-40 50 Q-32 -20 -16 -4 Q-20 30 -16 50 Z" fill="#FAF8F5"/>
              <path d="M-20 50 Q-12 -14 4 -2 Q0 32 4 50 Z" fill="#F2EFE9"/>
              <path d="M0 50 Q8 -10 24 -2 Q20 32 24 50 Z" fill="#FAF8F5"/>
              <path d="M20 50 Q28 -2 44 6 Q40 36 44 54 Z" fill="#F2EFE9"/>
              <rect x="-44" y="50" width="92" height="14" fill="#A88B65"/>
            </g>
            
            <path d="M20 132 Q90 80 160 132" stroke="#3A2417" strokeWidth="3" fill="none" opacity=".5"/>
            <rect x="38" y="110" width="4" height="22" fill="#3A2417" opacity=".5"/>
            <rect x="138" y="110" width="4" height="22" fill="#3A2417" opacity=".5"/>
            
            <g fill="#7A6555">
              <rect x="270" y="100" width="20" height="60"/>
              <rect x="295" y="80" width="22" height="80"/>
              <rect x="322" y="110" width="20" height="50"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇦🇺</span> Oceania</div>
        </div>
        <div className="dest-body">
          <div className="country">Australia</div>
          <div className="desc">Group of Eight excellence, beach-and-coffee lifestyle, and post-study work visas that scale with your qualification level.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">350+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">40+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">A$25k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore Australia programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="dest-big">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="deSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E5DEEE"/>
                <stop offset="100%" stopColor="#B5A4D0"/>
              </linearGradient>
            </defs>
            <rect width="360" height="220" fill="url(#deSky)"/>
            
            <g transform="translate(180 80)">
              <rect x="-90" y="80" width="180" height="6" fill="#A8836B"/>
              
              <rect x="-78" y="20" width="14" height="60" fill="#C8A87C"/>
              <rect x="-54" y="20" width="14" height="60" fill="#C8A87C"/>
              <rect x="-30" y="20" width="14" height="60" fill="#C8A87C"/>
              <rect x="-6" y="20" width="14" height="60" fill="#C8A87C"/>
              <rect x="18" y="20" width="14" height="60" fill="#C8A87C"/>
              <rect x="42" y="20" width="14" height="60" fill="#C8A87C"/>
              <rect x="66" y="20" width="14" height="60" fill="#C8A87C"/>
              
              <rect x="-92" y="0" width="184" height="22" fill="#A88B65"/>
              
              <rect x="-14" y="-20" width="28" height="10" fill="#86684A"/>
              <polygon points="-14,-20 -10,-30 -6,-30 -2,-20" fill="#86684A"/>
              <polygon points="-4,-20 0,-32 4,-32 8,-20" fill="#86684A"/>
              <polygon points="6,-20 10,-30 14,-30 14,-20" fill="#86684A"/>
            </g>
            
            <rect x="0" y="166" width="360" height="54" fill="#7AA177"/>
            <rect x="0" y="166" width="360" height="6" fill="#9BBC8F"/>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇩🇪</span> Europe</div>
          <div className="dest-img-badge">Low fees</div>
        </div>
        <div className="dest-body">
          <div className="country">Germany</div>
          <div className="desc">Tuition-free public universities, world-class engineering programmes, and Europe's largest student-friendly job market.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">200+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">100+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">€0</div><div className="k">Public tuition</div></div>
          </div>
          <span className="dest-cta">Explore Germany programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="dest-big">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sgSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DCEBED"/>
                <stop offset="100%" stopColor="#9CC3C6"/>
              </linearGradient>
            </defs>
            <rect width="360" height="220" fill="url(#sgSky)"/>
            
            <rect x="0" y="160" width="360" height="60" fill="#5E8FB8"/>
            <rect x="0" y="160" width="360" height="6" fill="#7AAACC"/>
            
            <g transform="translate(180 50)">
              <rect x="-90" y="50" width="20" height="60" fill="#A88B65"/>
              <rect x="-10" y="50" width="20" height="60" fill="#A88B65"/>
              <rect x="70" y="50" width="20" height="60" fill="#A88B65"/>
              
              <ellipse cx="0" cy="48" rx="106" ry="10" fill="#3F3530"/>
              <ellipse cx="0" cy="45" rx="100" ry="8" fill="#5A4A40"/>
            </g>
            
            <g transform="translate(80 130)">
              <ellipse cx="0" cy="20" rx="14" ry="10" fill="#FAF8F5"/>
              <circle cx="0" cy="8" r="9" fill="#FAF8F5"/>
              <circle cx="-2" cy="7" r="1.5" fill="#1F1814"/>
              <path d="M-8 4 Q-12 -2 -10 -8 M-4 -2 Q-6 -10 -2 -12 M2 -2 Q4 -10 8 -12" stroke="#FAF8F5" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </g>
            
            <g fill="#7A6555">
              <rect x="270" y="100" width="20" height="60"/>
              <rect x="295" y="80" width="22" height="80"/>
              <rect x="322" y="110" width="20" height="50"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇸🇬</span> Asia</div>
        </div>
        <div className="dest-body">
          <div className="country">Singapore</div>
          <div className="desc">Asia's education hub. NUS &amp; NTU sit in the global top 20, with a finance-friendly job market the moment you graduate.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">150+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">10+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">S$22k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore Singapore programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="dest-big" aria-hidden="true">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="220" fill="url(#ukSky)"/>
            <circle cx="60" cy="60" r="22" fill="#FCF3CB"/>
            <rect x="0" y="180" width="360" height="40" fill="#5E8FB8"/>
            <rect x="0" y="180" width="360" height="6" fill="#7AAACC"/>
            <path d="M40 175 Q180 130 320 175" stroke="#3A2417" strokeWidth="3" fill="none" opacity=".5"/>
            <g transform="translate(250 70)">
              <rect x="-14" y="0" width="28" height="120" fill="#A8836B"/>
              <rect x="-16" y="50" width="32" height="22" fill="#8C6D55"/>
              <circle cx="0" cy="61" r="6" fill="#F8E89C"/>
              <polygon points="-14,0 14,0 0,-22" fill="#8C6D55"/>
            </g>
            <g fill="#7A6555">
              <rect x="60" y="118" width="32" height="62"/>
              <rect x="100" y="100" width="26" height="80"/>
              <rect x="135" y="130" width="32" height="50"/>
              <rect x="175" y="110" width="26" height="70"/>
              <rect x="210" y="120" width="30" height="60"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇬🇧</span> Europe</div>
          <div className="dest-img-badge">Popular</div>
        </div>
        <div className="dest-body">
          <div className="country">United Kingdom</div>
          <div className="desc">Oxbridge, Russell Group, 4-year work visas, and the world's most concentrated cluster of top-50 universities.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">800+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">120+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">£15k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore UK programmes <span className="arr">→</span></span>
        </div>
      </article>

      <article className="dest-big" aria-hidden="true">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="220" fill="url(#usSky)"/>
            <circle cx="280" cy="50" r="20" fill="#FCF3CB"/>
            <g fill="#3F3530">
              <rect x="20" y="120" width="34" height="80"/>
              <rect x="60" y="100" width="26" height="100"/>
              <rect x="92" y="80" width="40" height="120"/>
              <rect x="138" y="60" width="30" height="140"/>
              <rect x="174" y="40" width="36" height="160"/>
              <rect x="216" y="70" width="26" height="130"/>
              <rect x="248" y="90" width="34" height="110"/>
              <rect x="288" y="60" width="30" height="140"/>
              <rect x="324" y="100" width="32" height="100"/>
            </g>
            <g transform="translate(70 50)">
              <rect x="-4" y="50" width="8" height="100" fill="#3F8F7C"/>
              <ellipse cx="0" cy="50" rx="12" ry="6" fill="#3F8F7C"/>
              <circle cx="0" cy="36" r="10" fill="#3F8F7C"/>
              <path d="M-10 30 L-12 18 M-4 28 L-3 14 M3 28 L4 14 M10 30 L12 18" stroke="#3F8F7C" strokeWidth="2"/>
              <path d="M-12 38 L-22 22 L-18 22 Z" fill="#FCF3CB"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇺🇸</span> Americas</div>
        </div>
        <div className="dest-body">
          <div className="country">United States</div>
          <div className="desc">Ivy League dreams, world-leading research budgets, and the largest STEM OPT pipeline. The original global classroom.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">600+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">200+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">$32k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore USA programmes <span className="arr">→</span></span>
        </div>
      </article>

      <article className="dest-big" aria-hidden="true">
        <div className="dest-img">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="220" fill="url(#caSky)"/>
            <path d="M0 160 L60 80 L120 130 L180 60 L240 110 L300 70 L360 130 L360 220 L0 220 Z" fill="#7A8480"/>
            <path d="M0 175 L80 120 L160 160 L220 100 L300 140 L360 110 L360 220 L0 220 Z" fill="#5C6E68"/>
            <g transform="translate(70 60)" fill="#D9783A">
              <path d="M0 -16 L4 -6 L14 -6 L7 0 L10 10 L0 4 L-10 10 L-7 0 L-14 -6 L-4 -6 Z"/>
            </g>
          </svg>
          <div className="dest-img-overlay"><span className="flag">🇨🇦</span> Americas</div>
          <div className="dest-img-badge">PR-friendly</div>
        </div>
        <div className="dest-body">
          <div className="country">Canada</div>
          <div className="desc">Affordable tuition, generous post-study work permits, and one of the smoothest pathways to permanent residency for students.</div>
          <div className="dest-stats">
            <div className="dest-stat"><div className="v">400+</div><div className="k">Courses</div></div>
            <div className="dest-stat"><div className="v">90+</div><div className="k">Universities</div></div>
            <div className="dest-stat"><div className="v">C$18k+</div><div className="k">Avg. tuition</div></div>
          </div>
          <span className="dest-cta">Explore Canada programmes <span className="arr">→</span></span>
        </div>
      </article>

    </div>
  </div>
</section>


<section className="section section-peach">
  <div className="wrap">
    <div className="section-head-row">
      <div className="head-left reveal">
        <span className="eyebrow">Top Universities</span>
        <h2>Apply to the <span className="ital">world's most respected</span> institutions.</h2>
      </div>
      <div className="head-right reveal">
        We work directly with 200+ universities — from Oxbridge to Ivy League, Russell Group to Group of Eight. Below: just a slice of where our students study.
        <a href="#cta" className="btn" style={{ alignSelf: 'flex-start' }}>View all 200+ <span className="arrow">→</span></a>
      </div>
    </div>

  <div className="unis-wrap">
    <div className="unis-track">
      

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="oxA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FCEFC9"/><stop offset="100%" stopColor="#E89A4F"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#oxA)"/>
              
              <g transform="translate(160 140)">
                <ellipse cx="0" cy="0" rx="60" ry="20" fill="#A8836B"/>
                <rect x="-44" y="-40" width="88" height="44" fill="#C8A87C"/>
                <ellipse cx="0" cy="-40" rx="44" ry="14" fill="#A8836B"/>
                <path d="M-44 -4 Q-44 -54 0 -58 Q44 -54 44 -4 Z" fill="#C8A87C"/>
                <ellipse cx="0" cy="-58" rx="44" ry="12" fill="#86684A"/>
                <ellipse cx="0" cy="-58" rx="30" ry="8" fill="#A8836B"/>
                <rect x="-6" y="-78" width="12" height="20" fill="#86684A"/>
                <rect x="-2" y="-86" width="4" height="10" fill="#86684A"/>
                <circle cx="0" cy="-90" r="3" fill="#D9783A"/>
              </g>
              <rect x="0" y="170" width="320" height="30" fill="#5C7A4A"/>
              <circle cx="270" cy="40" r="14" fill="#FCF3CB"/>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#7B1530"/>
              <g transform="translate(160 100)">
                <path d="M-44 0 Q-44 -60 0 -64 Q44 -60 44 0 Z" fill="#A0203A"/>
                <text x="0" y="6" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="30" fill="#FCF3CB">OX</text>
              </g>
              <rect x="80" y="148" width="160" height="6" fill="#FCF3CB" opacity=".4"/>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#1A1A1A"/>
              
              <g transform="translate(160 100)">
                <path d="M-50 -40 L50 -40 L50 10 Q50 50 0 60 Q-50 50 -50 10 Z" fill="none" stroke="#FCF3CB" strokeWidth="3"/>
                <text x="0" y="0" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="14" fill="#FCF3CB">DOMINUS</text>
                <text x="0" y="18" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="14" fill="#FCF3CB">ILLUMINATIO</text>
                <text x="0" y="34" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="11" fill="#D9783A">MEA</text>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇬🇧 Oxford, UK</div>
          <div className="uni-rank">#1 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">OX</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University of Oxford</div>
          <div className="uni-big-loc">📍 Oxford · Founded 1096</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#1</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">22k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">£26k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="caA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#D8E9EF"/><stop offset="100%" stopColor="#7CA3BC"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#caA)"/>
              
              <g transform="translate(160 130)">
                <rect x="-80" y="-40" width="160" height="80" fill="#C8A87C"/>
                <rect x="-90" y="-44" width="20" height="6" fill="#A8836B"/>
                <rect x="70" y="-44" width="20" height="6" fill="#A8836B"/>
                <rect x="-86" y="-78" width="14" height="42" fill="#C8A87C"/>
                <rect x="72" y="-78" width="14" height="42" fill="#C8A87C"/>
                <polygon points="-86,-78 -79,-94 -72,-78" fill="#A8836B"/>
                <polygon points="72,-78 79,-94 86,-78" fill="#A8836B"/>
                
                <g fill="#86684A">
                  <path d="M-60 -20 Q-60 -36 -50 -36 Q-40 -36 -40 -20 L-40 0 L-60 0 Z"/>
                  <path d="M-25 -20 Q-25 -36 -15 -36 Q-5 -36 -5 -20 L-5 0 L-25 0 Z"/>
                  <path d="M10 -20 Q10 -36 20 -36 Q30 -36 30 -20 L30 0 L10 0 Z"/>
                  <path d="M45 -20 Q45 -36 55 -36 Q65 -36 65 -20 L65 0 L45 0 Z"/>
                </g>
              </g>
              <rect x="0" y="180" width="320" height="20" fill="#5E8FB8"/>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#A6263E"/>
              <g transform="translate(160 100)">
                <text x="0" y="10" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="28" fill="#FCF3CB">Cambridge</text>
                <text x="0" y="32" textAnchor="middle" fontFamily="Inter" fontSize="11" letterSpacing="6" fill="#FCF3CB">EST. 1209</text>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#0F0F0F"/>
              <g transform="translate(160 100)">
                <path d="M-40 -40 L40 -40 L40 -10 Q40 30 0 50 Q-40 30 -40 -10 Z" fill="none" stroke="#A6263E" strokeWidth="3"/>
                <circle cx="0" cy="0" r="14" fill="#A6263E"/>
                <text x="0" y="4" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="14" fill="#FCF3CB">C</text>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇬🇧 Cambridge, UK</div>
          <div className="uni-rank">#2 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">CA</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University of Cambridge</div>
          <div className="uni-big-loc">📍 Cambridge · Founded 1209</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#2</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">24k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">£25k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="mitA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FDDCB1"/><stop offset="100%" stopColor="#E07F4A"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#mitA)"/>
              
              <g transform="translate(160 140)">
                <rect x="-80" y="-20" width="160" height="40" fill="#C8A87C"/>
                
                <rect x="-70" y="-20" width="10" height="30" fill="#A8836B"/>
                <rect x="-50" y="-20" width="10" height="30" fill="#A8836B"/>
                <rect x="-30" y="-20" width="10" height="30" fill="#A8836B"/>
                <rect x="-10" y="-20" width="10" height="30" fill="#A8836B"/>
                <rect x="10" y="-20" width="10" height="30" fill="#A8836B"/>
                <rect x="30" y="-20" width="10" height="30" fill="#A8836B"/>
                <rect x="50" y="-20" width="10" height="30" fill="#A8836B"/>
                <rect x="-80" y="-32" width="160" height="14" fill="#A8836B"/>
                <path d="M-50 -32 Q-50 -84 0 -88 Q50 -84 50 -32 Z" fill="#C8A87C"/>
                <ellipse cx="0" cy="-88" rx="4" ry="3" fill="#A8836B"/>
              </g>
              <rect x="0" y="180" width="320" height="20" fill="#5C7A4A"/>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#A6263E"/>
              <g transform="translate(160 100)">
                <text x="0" y="12" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="56" letterSpacing="6" fill="#FCF3CB">MIT</text>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#1A1A1A"/>
              <g transform="translate(160 100)">
                <rect x="-50" y="-8" width="14" height="16" fill="#A6263E"/>
                <rect x="-30" y="-8" width="14" height="16" fill="#A6263E"/>
                <rect x="-10" y="-8" width="14" height="16" fill="#A6263E"/>
                <rect x="10" y="-8" width="14" height="16" fill="#A6263E"/>
                <rect x="30" y="-8" width="14" height="16" fill="#A6263E"/>
                <text x="0" y="36" textAnchor="middle" fontFamily="Inter" fontSize="10" letterSpacing="3" fill="#FCF3CB">MENS ET MANUS</text>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇺🇸 Cambridge, MA</div>
          <div className="uni-rank">#1 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">MI</div>
        <div className="uni-big-body">
          <div className="uni-big-name">Massachusetts Institute of Tech</div>
          <div className="uni-big-loc">📍 Cambridge, MA · Founded 1861</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#1</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">11k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">$58k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="uclA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E5DEEE"/><stop offset="100%" stopColor="#A892BF"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#uclA)"/>
              
              <g transform="translate(160 140)">
                <rect x="-90" y="-44" width="180" height="14" fill="#C8A87C"/>
                <rect x="-90" y="-30" width="180" height="50" fill="#D8C5A0"/>
                <rect x="-78" y="-30" width="12" height="50" fill="#B8966E"/>
                <rect x="-54" y="-30" width="12" height="50" fill="#B8966E"/>
                <rect x="-30" y="-30" width="12" height="50" fill="#B8966E"/>
                <rect x="-6" y="-30" width="12" height="50" fill="#B8966E"/>
                <rect x="18" y="-30" width="12" height="50" fill="#B8966E"/>
                <rect x="42" y="-30" width="12" height="50" fill="#B8966E"/>
                <rect x="66" y="-30" width="12" height="50" fill="#B8966E"/>
                <polygon points="-90,-44 0,-72 90,-44" fill="#A8836B"/>
              </g>
              <rect x="0" y="180" width="320" height="20" fill="#5C7A4A"/>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#7B1530"/>
              <g transform="translate(160 100)">
                <text x="0" y="6" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="48" letterSpacing="8" fill="#FCF3CB">UCL</text>
                <text x="0" y="30" textAnchor="middle" fontFamily="Inter" fontSize="9" letterSpacing="3" fill="#FCF3CB">LONDON'S GLOBAL UNIVERSITY</text>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#1A1A1A"/>
              <g transform="translate(160 100)">
                <circle cx="0" cy="0" r="50" fill="none" stroke="#7B1530" strokeWidth="3"/>
                <text x="0" y="6" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="18" fill="#FCF3CB">UCL</text>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇬🇧 London, UK</div>
          <div className="uni-rank">#9 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">UC</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University College London</div>
          <div className="uni-big-loc">📍 London · Founded 1826</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#9</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">42k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">£28k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="utA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FBE7CE"/><stop offset="100%" stopColor="#E89A4F"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#utA)"/>
              
              <g transform="translate(230 60)">
                <rect x="-4" y="60" width="8" height="120" fill="#A8836B"/>
                <ellipse cx="0" cy="60" rx="16" ry="8" fill="#867057"/>
                <rect x="-12" y="56" width="24" height="16" fill="#867057"/>
                <rect x="-2" y="36" width="4" height="20" fill="#867057"/>
                <circle cx="0" cy="32" r="3" fill="#D9783A"/>
              </g>
              <g fill="#5A4A40">
                <rect x="20" y="110" width="30" height="70"/>
                <rect x="60" y="90" width="30" height="90"/>
                <rect x="100" y="120" width="30" height="60"/>
                <rect x="140" y="100" width="30" height="80"/>
              </g>
              
              <g transform="translate(60 50)" fill="#D9783A">
                <path d="M0 -16 L4 -6 L14 -6 L7 0 L10 10 L0 4 L-10 10 L-7 0 L-14 -6 L-4 -6 Z"/>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#003A6E"/>
              <g transform="translate(160 100)">
                <text x="0" y="-6" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="40" fill="#FCF3CB">UofT</text>
                <text x="0" y="20" textAnchor="middle" fontFamily="Inter" fontSize="10" letterSpacing="3" fill="#FCF3CB">VELUT ARBOR AEVO</text>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#1A1A1A"/>
              <g transform="translate(160 100)" fill="#D9783A">
                <path d="M0 -36 L8 -14 L30 -14 L14 0 L22 22 L0 8 L-22 22 L-14 0 L-30 -14 L-8 -14 Z"/>
                <text x="0" y="58" textAnchor="middle" fontFamily="Inter" fontSize="10" letterSpacing="3" fill="#FCF3CB">CANADA · TORONTO</text>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇨🇦 Toronto, CA</div>
          <div className="uni-rank">#21 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">UT</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University of Toronto</div>
          <div className="uni-big-loc">📍 Toronto · Founded 1827</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#21</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">97k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">C$50k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="umA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FDEDD3"/><stop offset="100%" stopColor="#EBA38E"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#umA)"/>
              
              <g transform="translate(160 140)">
                <rect x="-90" y="-50" width="180" height="58" fill="#C8A87C"/>
                <g fill="#86684A">
                  <path d="M-80 8 L-80 -20 Q-80 -36 -64 -36 Q-48 -36 -48 -20 L-48 8 Z"/>
                  <path d="M-40 8 L-40 -20 Q-40 -36 -24 -36 Q-8 -36 -8 -20 L-8 8 Z"/>
                  <path d="M0 8 L0 -20 Q0 -36 16 -36 Q32 -36 32 -20 L32 8 Z"/>
                  <path d="M40 8 L40 -20 Q40 -36 56 -36 Q72 -36 72 -20 L72 8 Z"/>
                </g>
                <rect x="-90" y="-58" width="180" height="10" fill="#A8836B"/>
              </g>
              <rect x="0" y="180" width="320" height="20" fill="#5C7A4A"/>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#003A6E"/>
              <g transform="translate(160 100)">
                <text x="0" y="0" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="22" fill="#FCF3CB">University of</text>
                <text x="0" y="26" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="34" fill="#FCF3CB">Melbourne</text>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#1A1A1A"/>
              <g transform="translate(160 100)">
                <path d="M-40 -36 L40 -36 L40 0 Q40 36 0 50 Q-40 36 -40 0 Z" fill="none" stroke="#FCF3CB" strokeWidth="3"/>
                <text x="0" y="8" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="18" fill="#FCF3CB">UoM</text>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇦🇺 Melbourne, AU</div>
          <div className="uni-rank">#13 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">UM</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University of Melbourne</div>
          <div className="uni-big-loc">📍 Melbourne · Founded 1853</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#13</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">52k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">A$45k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="ubcA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#D8E9EF"/><stop offset="100%" stopColor="#8FB4C7"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#ubcA)"/>
              
              <path d="M0 140 L60 80 L120 130 L180 60 L240 110 L320 70 L320 200 L0 200 Z" fill="#7A8480"/>
              <path d="M68 90 L80 80 L92 90 Z" fill="#FAF8F5"/>
              <path d="M168 70 L180 60 L192 70 Z" fill="#FAF8F5"/>
              
              <rect x="0" y="170" width="320" height="30" fill="#5E8FB8"/>
              
              <g fill="#2F5B3A">
                <polygon points="40,175 50,140 60,175"/>
                <polygon points="250,175 262,135 274,175"/>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#003A6E"/>
              <g transform="translate(160 100)">
                <text x="0" y="10" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="60" letterSpacing="8" fill="#FCF3CB">UBC</text>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#1A1A1A"/>
              <g transform="translate(160 100)" fill="#D9783A">
                <path d="M0 -16 L4 -6 L14 -6 L7 0 L10 10 L0 4 L-10 10 L-7 0 L-14 -6 L-4 -6 Z" transform="scale(2)"/>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇨🇦 Vancouver, CA</div>
          <div className="uni-rank">#34 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">UB</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University of British Columbia</div>
          <div className="uni-big-loc">📍 Vancouver · Founded 1908</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#34</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">68k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">C$42k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="stA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FCEFC9"/><stop offset="100%" stopColor="#E89A4F"/></linearGradient></defs>
              <rect width="320" height="200" fill="url(#stA)"/>
              
              <g transform="translate(160 140)">
                <rect x="-14" y="-100" width="28" height="100" fill="#C8A87C"/>
                <rect x="-18" y="-44" width="36" height="14" fill="#A8836B"/>
                <rect x="-12" y="-42" width="24" height="10" fill="#86684A"/>
                <polygon points="-14,-100 14,-100 0,-120" fill="#A8836B"/>
                <rect x="-2" y="-128" width="4" height="10" fill="#A8836B"/>
                <circle cx="0" cy="-132" r="3" fill="#D9783A"/>
              </g>
              <rect x="0" y="180" width="320" height="20" fill="#5C7A4A"/>
              
              <g transform="translate(50 130)">
                <rect x="-2" y="0" width="4" height="48" fill="#5A4A40"/>
                <path d="M0 0 Q-22 -10 -28 -22 M0 0 Q22 -10 28 -22 M0 0 Q-10 -22 -16 -32 M0 0 Q10 -22 16 -32" stroke="#5C7A4A" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#8C1515"/>
              <g transform="translate(160 100)">
                <text x="0" y="10" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="40" letterSpacing="2" fill="#FCF3CB">Stanford</text>
              </g>
            </svg>
          </div>
          <div className="uni-slide">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#1A1A1A"/>
              <g transform="translate(160 100)">
                <ellipse cx="0" cy="0" rx="44" ry="50" fill="none" stroke="#8C1515" strokeWidth="3"/>
                <text x="0" y="8" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="24" fill="#FCF3CB">S</text>
              </g>
            </svg>
          </div>
          <div className="uni-pill">🇺🇸 Stanford, CA</div>
          <div className="uni-rank">#6 QS</div>
          <div className="uni-dots"><span className="on"></span><span></span><span></span></div>
        </div>
        <div className="uni-crest">ST</div>
        <div className="uni-big-body">
          <div className="uni-big-name">Stanford University</div>
          <div className="uni-big-loc">📍 Stanford, CA · Founded 1885</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#6</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">17k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">$62k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      
      <article className="uni-big" data-uni-card="" aria-hidden="true">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="url(#oxA)"/>
              <g transform="translate(160 140)">
                <ellipse cx="0" cy="0" rx="60" ry="20" fill="#A8836B"/>
                <rect x="-44" y="-40" width="88" height="44" fill="#C8A87C"/>
                <ellipse cx="0" cy="-40" rx="44" ry="14" fill="#A8836B"/>
                <path d="M-44 -4 Q-44 -54 0 -58 Q44 -54 44 -4 Z" fill="#C8A87C"/>
                <ellipse cx="0" cy="-58" rx="44" ry="12" fill="#86684A"/>
              </g>
              <rect x="0" y="170" width="320" height="30" fill="#5C7A4A"/>
            </svg>
          </div>
          <div className="uni-pill">🇬🇧 Oxford, UK</div>
          <div className="uni-rank">#1 QS</div>
        </div>
        <div className="uni-crest">OX</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University of Oxford</div>
          <div className="uni-big-loc">📍 Oxford · Founded 1096</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#1</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">22k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">£26k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      <article className="uni-big" data-uni-card="" aria-hidden="true">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="url(#caA)"/>
              <g transform="translate(160 130)">
                <rect x="-80" y="-40" width="160" height="80" fill="#C8A87C"/>
                <rect x="-86" y="-78" width="14" height="42" fill="#C8A87C"/>
                <rect x="72" y="-78" width="14" height="42" fill="#C8A87C"/>
                <polygon points="-86,-78 -79,-94 -72,-78" fill="#A8836B"/>
                <polygon points="72,-78 79,-94 86,-78" fill="#A8836B"/>
              </g>
              <rect x="0" y="180" width="320" height="20" fill="#5E8FB8"/>
            </svg>
          </div>
          <div className="uni-pill">🇬🇧 Cambridge, UK</div>
          <div className="uni-rank">#2 QS</div>
        </div>
        <div className="uni-crest">CA</div>
        <div className="uni-big-body">
          <div className="uni-big-name">University of Cambridge</div>
          <div className="uni-big-loc">📍 Cambridge · Founded 1209</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#2</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">24k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">£25k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

      <article className="uni-big" data-uni-card="" aria-hidden="true">
        <div className="uni-photo">
          <div className="uni-slide is-active">
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="url(#mitA)"/>
              <g transform="translate(160 140)">
                <rect x="-80" y="-20" width="160" height="40" fill="#C8A87C"/>
                <rect x="-80" y="-32" width="160" height="14" fill="#A8836B"/>
                <path d="M-50 -32 Q-50 -84 0 -88 Q50 -84 50 -32 Z" fill="#C8A87C"/>
              </g>
              <rect x="0" y="180" width="320" height="20" fill="#5C7A4A"/>
            </svg>
          </div>
          <div className="uni-pill">🇺🇸 Cambridge, MA</div>
          <div className="uni-rank">#1 QS</div>
        </div>
        <div className="uni-crest">MI</div>
        <div className="uni-big-body">
          <div className="uni-big-name">Massachusetts Institute of Tech</div>
          <div className="uni-big-loc">📍 Cambridge, MA · Founded 1861</div>
          <div className="uni-big-stats">
            <div className="uni-big-stat"><div className="v">#1</div><div className="k">QS World</div></div>
            <div className="uni-big-stat"><div className="v">11k</div><div className="k">Students</div></div>
            <div className="uni-big-stat"><div className="v">$58k+</div><div className="k">Tuition</div></div>
          </div>
          <span className="uni-big-cta">View programmes <span className="arr">→</span></span>
        </div>
      </article>

    </div>
  </div>
  </div>
</section>


<section className="section section-cream" id="process">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Process</span>
      <h2>Move fast, with the <span className="ital">right support</span>.</h2>
      <p>A tight four-step loop that takes you from a vague idea to your dorm key in hand — usually inside one academic cycle.</p>
    </div>
    <div className="process">
      <div className="process-step reveal">
        <div className="num">01</div>
        <h4>Listen &amp; Plan</h4>
        <p>Free counseling. We map your goals, grades, and target countries — then build a realistic shortlist.</p>
      </div>
      <div className="process-step reveal">
        <div className="num">02</div>
        <h4>Course Matching</h4>
        <p>We shortlist the best-fit universities and courses for your profile, budget, and long-term plans.</p>
      </div>
      <div className="process-step reveal">
        <div className="num">03</div>
        <h4>Apply &amp; Submit</h4>
        <p>We handle documents, personal statements, recommendations, and every portal submission for you.</p>
      </div>
      <div className="process-step reveal">
        <div className="num">04</div>
        <h4>Visa &amp; Beyond</h4>
        <p>Visa prep, pre-departure briefing, accommodation tips, and on-arrival support in your new city.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section-mint" id="why">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Why EduTravel</span>
      <h2>Six reasons students <span className="ital">choose us</span> — over big agencies, over going it alone.</h2>
    </div>
    <div className="whys">
      <div className="why-card reveal">
        <div className="why-icon peach">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h4>15 Years of Track Record</h4>
        <p>Since 2010, we've moved 10,000+ students across 30+ countries. Our SOP archive alone runs to 8,000 successful drafts.</p>
      </div>

      <div className="why-card reveal">
        <div className="why-icon mint">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h4>Replies in Hours, Not Days</h4>
        <p>Our consultants reply on WhatsApp within working hours — usually under 60 minutes. No tickets, no call centres, no automated "we'll get back to you".</p>
      </div>

      <div className="why-card reveal">
        <div className="why-icon sky">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
        </div>
        <h4>Personalised Shortlists</h4>
        <p>Every student gets a tailored list of 8–12 universities — based on grades, budget, country preferences, and long-term career fit. Never copy-paste.</p>
      </div>

      <div className="why-card reveal">
        <div className="why-icon sun">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><polyline points="9 14 9 22 12 19 15 22 15 14"/></svg>
        </div>
        <h4>Money-back Guarantee</h4>
        <p>On our Premium tier, if you don't receive at least one offer from your shortlist, your fee is fully refunded. No catches. No "T&Cs apply".</p>
      </div>

      <div className="why-card reveal">
        <div className="why-icon rose">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <h4>Post-arrival Support</h4>
        <p>Accommodation hunting, bank account, SIM card, first-week logistics. Our alumni groups in every major city help your first month feel like home.</p>
      </div>

      <div className="why-card reveal">
        <div className="why-icon lilac">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5C21 16 17 19.5 12 19.5c-1.4 0-2.7-.3-3.9-.8L3 20l1.4-4.4C3.5 14.4 3 13 3 11.5 3 7 7 3.5 12 3.5s9 3.5 9 8z"/></svg>
        </div>
        <h4>Single Consultant. Always.</h4>
        <p>One person owns your journey end-to-end. No "let me check with my colleague" — they know your file, your goals, and your timeline.</p>
      </div>
    </div>
  </div>
</section>


<section className="section-ink">
  <div className="wrap">
    <div className="stats-bar">
      <div className="stat-cell">
        <div className="num"><span data-count="10000" data-suffix="+">0</span></div>
        <div className="lbl">Students Placed</div>
      </div>
      <div className="stat-cell">
        <div className="num"><span data-count="98" data-suffix="%">0</span></div>
        <div className="lbl">Visa Success Rate</div>
      </div>
      <div className="stat-cell">
        <div className="num"><span data-count="200" data-suffix="+">0</span></div>
        <div className="lbl">Partner Universities</div>
      </div>
      <div className="stat-cell">
        <div className="num"><span data-count="15">0</span></div>
        <div className="lbl">Years Experience</div>
      </div>
    </div>
  </div>
</section>


<section className="section section-sky" id="intakes">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Intakes Calendar</span>
      <h2>When to <span className="ital">start</span> — and what to do.</h2>
      <p>Most countries have two or three intakes a year. Here's a quick snapshot of when each one opens, and the application window you should aim for.</p>
    </div>
    <div className="intakes">
      <div className="intake reveal">
        <div className="season">Fall · Primary</div>
        <h4>September 2026</h4>
        <div className="month">Applications open Sept '25 — close Jan '26</div>
        <ul>
          <li><span className="lbl">UK</span><span className="v">Most undergrad &amp; postgrad</span></li>
          <li><span className="lbl">USA</span><span className="v">Almost all programmes</span></li>
          <li><span className="lbl">Canada</span><span className="v">Most universities</span></li>
          <li><span className="lbl">Australia</span><span className="v">Some institutions</span></li>
        </ul>
      </div>
      <div className="intake cool reveal">
        <div className="season">Spring · Secondary</div>
        <h4>January 2026</h4>
        <div className="month">Applications open Mar '25 — close Aug '25</div>
        <ul>
          <li><span className="lbl">Australia</span><span className="v">Main intake (Feb)</span></li>
          <li><span className="lbl">USA</span><span className="v">Limited postgrad</span></li>
          <li><span className="lbl">Canada</span><span className="v">Many universities</span></li>
          <li><span className="lbl">Germany</span><span className="v">Winter semester</span></li>
        </ul>
      </div>
      <div className="intake fresh reveal">
        <div className="season">Summer · Limited</div>
        <h4>May 2026</h4>
        <div className="month">Applications open Sept '25 — close Feb '26</div>
        <ul>
          <li><span className="lbl">Canada</span><span className="v">Select programmes</span></li>
          <li><span className="lbl">Australia</span><span className="v">Mid-year intake</span></li>
          <li><span className="lbl">USA</span><span className="v">Few summer terms</span></li>
          <li><span className="lbl">UK</span><span className="v">Rare — foundation only</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="section section-sun" id="stories">
  <div className="wrap">
    <div className="section-head-row">
      <div className="head-left reveal">
        <span className="eyebrow">Student Stories</span>
        <h2>Where they <span className="ital">landed</span>.</h2>
      </div>
      <div className="head-right reveal">
        Real students, real offer letters, real visas. Tap any card to read more — stories advance automatically every few seconds.
      </div>
    </div>

    <div className="stories-wrap" id="storiesWrap">

      
      <article className="story-card is-current" data-story="0">
        <div className="story-bg">
          <svg viewBox="0 0 320 540" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="story1bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7B1530"/>
                <stop offset="100%" stopColor="#3F0B1F"/>
              </linearGradient>
            </defs>
            <rect width="320" height="540" fill="url(#story1bg)"/>
            
            <g opacity=".4">
              <rect x="40" y="60" width="8" height="8" fill="#D9783A" transform="rotate(20 44 64)"/>
              <circle cx="260" cy="100" r="4" fill="#F0934A"/>
              <rect x="280" y="180" width="6" height="6" fill="#F8E89C" transform="rotate(45 283 183)"/>
              <circle cx="50" cy="220" r="3" fill="#F8E89C"/>
            </g>
            
            <g transform="translate(160 340)">
              
              <path d="M-90 0 Q-90 -50 0 -56 Q90 -50 90 0 L100 180 L-100 180 Z" fill="#5E0B22"/>
              
              <path d="M-78 -42 Q-76 -70 0 -76 Q76 -70 78 -42 Q70 -56 0 -56 Q-70 -56 -78 -42 Z" fill="#4A0818"/>
              
              <text x="0" y="64" textAnchor="middle" fontFamily="Inter" fontSize="32" fontWeight="800" letterSpacing="3" fill="#FAF8F5">UCL</text>
              
              <path d="M-40 88 L40 88 L34 116 L-34 116 Z" fill="#4A0818"/>
              
              <path d="M70 -28 Q108 -100 116 -200 L98 -206 Q86 -120 60 -50 Z" fill="#5E0B22"/>
              <circle cx="120" cy="-204" r="14" fill="#F5C5A3"/>
              
              <rect x="100" y="-228" width="40" height="14" fill="#F5F0E5" transform="rotate(-12 120 -221)"/>
              <circle cx="128" cy="-220" r="5" fill="#D9783A" transform="rotate(-12 120 -221)"/>
              
              <rect x="-12" y="-72" width="24" height="20" fill="#F5C5A3"/>
              
              <circle cx="0" cy="-96" r="44" fill="#F5C5A3"/>
              
              <path d="M-44 -100 Q-44 -148 0 -152 Q44 -148 44 -100 Q42 -130 32 -138 Q18 -146 0 -146 Q-18 -146 -32 -138 Q-42 -130 -44 -100 Z" fill="#2C1A12"/>
              
              <path d="M-16 -94 Q-12 -100 -8 -94" stroke="#1F1814" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
              <path d="M8 -94 Q12 -100 16 -94" stroke="#1F1814" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
              
              <circle cx="-22" cy="-78" r="6" fill="#E89A8A" opacity=".45"/>
              <circle cx="22" cy="-78" r="6" fill="#E89A8A" opacity=".45"/>
              
              <path d="M-14 -68 Q0 -52 14 -68 Q8 -56 0 -56 Q-8 -56 -14 -68 Z" fill="#7A4A33"/>
              <path d="M-10 -66 Q0 -60 10 -66" stroke="#FAF8F5" strokeWidth="2.4" fill="none"/>
            </g>
            
            <g transform="translate(220 130) rotate(-10)">
              <path d="M-22 0 L0 -10 L22 0 L0 10 Z" fill="#1A1A1A"/>
              <rect x="-3" y="10" width="6" height="6" fill="#1A1A1A"/>
              <path d="M14 4 L18 22" stroke="#D9783A" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="18" cy="24" r="3" fill="#D9783A"/>
            </g>
          </svg>
        </div>
        <div className="story-bars">
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
        </div>
        <div className="story-meta">
          <div className="story-author">
            <div className="story-avatar">AM</div>
            <div>
              <div className="name">Arjun M.</div>
              <div className="school">UCL · MSc Data Science · 2025</div>
            </div>
          </div>
          <div className="story-headline">"Got my visa on the first try."</div>
          <div className="story-quote">EduTravel handled every document. It felt like having a personal manager — not an agency.</div>
        </div>
      </article>

      
      <article className="story-card" data-story="1">
        <div className="story-bg">
          <svg viewBox="0 0 320 540" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="story2bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1F4F7A"/>
                <stop offset="100%" stopColor="#0E2A45"/>
              </linearGradient>
            </defs>
            <rect width="320" height="540" fill="url(#story2bg)"/>
            
            <g opacity=".4" fill="#FAF8F5">
              <path d="M0 280 Q60 240 120 270 Q180 240 240 270 Q280 250 320 270 L320 320 L0 320 Z"/>
            </g>
            
            <g transform="translate(160 340)">
              <path d="M-90 0 Q-90 -50 0 -56 Q90 -50 90 0 L100 180 L-100 180 Z" fill="#142847"/>
              
              <path d="M-20 -48 L-40 60 L-30 60 L-10 -32 Z" fill="#0A1A2E"/>
              <path d="M20 -48 L40 60 L30 60 L10 -32 Z" fill="#0A1A2E"/>
              
              <path d="M-20 -48 L0 -10 L20 -48 L18 60 L-18 60 Z" fill="#FAF8F5"/>
              
              <path d="M-6 -40 L6 -40 L8 30 L0 50 L-8 30 Z" fill="#D9783A"/>
              
              <path d="M70 -28 Q90 30 90 130 L72 140 Q60 60 46 0 Z" fill="#142847"/>
              <circle cx="86" cy="140" r="12" fill="#E8AC85"/>
              
              <rect x="58" y="118" width="56" height="36" rx="2" fill="#2A2A26"/>
              <rect x="62" y="122" width="48" height="28" fill="#FAF8F5"/>
              <text x="86" y="142" textAnchor="middle" fontFamily="Inter" fontSize="6" fontWeight="700" fill="#1F4F7A">MELBOURNE</text>
              
              <rect x="-12" y="-72" width="24" height="20" fill="#E8AC85"/>
              
              <circle cx="0" cy="-96" r="44" fill="#E8AC85"/>
              
              <path d="M-44 -100 Q-44 -150 0 -154 Q44 -150 44 -100 L48 -40 Q42 -60 30 -78 Q14 -90 0 -90 Q-14 -90 -30 -78 Q-42 -60 -48 -40 Z" fill="#3A1F12"/>
              
              <ellipse cx="38" cy="-40" rx="14" ry="22" fill="#3A1F12"/>
              
              <ellipse cx="-12" cy="-94" rx="2.8" ry="3.2" fill="#1F1814"/>
              <ellipse cx="12" cy="-94" rx="2.8" ry="3.2" fill="#1F1814"/>
              
              <circle cx="0" cy="-118" r="3" fill="#D9783A"/>
              
              <circle cx="-22" cy="-78" r="6" fill="#E89A8A" opacity=".5"/>
              <circle cx="22" cy="-78" r="6" fill="#E89A8A" opacity=".5"/>
              
              <path d="M-12 -68 Q0 -60 12 -68" stroke="#7A4A33" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
            </g>
          </svg>
        </div>
        <div className="story-bars">
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
        </div>
        <div className="story-meta">
          <div className="story-author">
            <div className="story-avatar">PS</div>
            <div>
              <div className="name">Priya S.</div>
              <div className="school">Melbourne · MBA · 2024</div>
            </div>
          </div>
          <div className="story-headline">"Got a 40% scholarship."</div>
          <div className="story-quote">They found me a better university than I had in mind — and saved me lakhs in the process.</div>
        </div>
      </article>

      
      <article className="story-card" data-story="2">
        <div className="story-bg">
          <svg viewBox="0 0 320 540" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="story3bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2F5B3A"/>
                <stop offset="100%" stopColor="#15301F"/>
              </linearGradient>
            </defs>
            <rect width="320" height="540" fill="url(#story3bg)"/>
            
            <g opacity=".35" fill="#D9783A">
              <path d="M50 80 L54 90 L64 90 L57 96 L60 106 L50 100 L40 106 L43 96 L36 90 L46 90 Z"/>
              <path d="M260 130 L264 140 L274 140 L267 146 L270 156 L260 150 L250 156 L253 146 L246 140 L256 140 Z" transform="rotate(20 260 143)"/>
              <path d="M40 220 L44 230 L54 230 L47 236 L50 246 L40 240 L30 246 L33 236 L26 230 L36 230 Z"/>
            </g>
            
            <g transform="translate(160 340)">
              
              <path d="M-90 0 Q-90 -50 0 -56 Q90 -50 90 0 L100 180 L-100 180 Z" fill="#1F1814"/>
              
              <path d="M-30 -48 L-50 40 L-30 40 L-14 -36 Z" fill="#0F0908"/>
              <path d="M30 -48 L50 40 L30 40 L14 -36 Z" fill="#0F0908"/>
              
              <path d="M-30 -48 L0 -8 L30 -48 L26 60 L-26 60 Z" fill="#F0934A"/>
              
              <path d="M-70 -28 Q-90 40 -88 140 L-70 144 Q-58 60 -46 0 Z" fill="#1F1814"/>
              <circle cx="-86" cy="144" r="12" fill="#E8AC85"/>
              <path d="M70 -28 Q90 40 88 140 L70 144 Q58 60 46 0 Z" fill="#1F1814"/>
              <circle cx="86" cy="144" r="12" fill="#E8AC85"/>
              
              <rect x="-12" y="-72" width="24" height="20" fill="#E8AC85"/>
              
              <circle cx="0" cy="-96" r="44" fill="#E8AC85"/>
              
              <path d="M-42 -104 Q-42 -148 0 -152 Q42 -148 42 -104 Q40 -126 30 -132 Q16 -138 0 -138 Q-16 -138 -30 -132 Q-40 -126 -42 -104 Z" fill="#1F1410"/>
              
              <circle cx="-12" cy="-92" r="9" fill="none" stroke="#1F1814" strokeWidth="1.8"/>
              <circle cx="12" cy="-92" r="9" fill="none" stroke="#1F1814" strokeWidth="1.8"/>
              <line x1="-3" y1="-92" x2="3" y2="-92" stroke="#1F1814" strokeWidth="1.8"/>
              
              <ellipse cx="-12" cy="-92" rx="2" ry="2.5" fill="#1F1814"/>
              <ellipse cx="12" cy="-92" rx="2" ry="2.5" fill="#1F1814"/>
              
              <path d="M-10 -68 Q0 -60 10 -68" stroke="#7A4A33" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
            </g>
          </svg>
        </div>
        <div className="story-bars">
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
        </div>
        <div className="story-meta">
          <div className="story-author">
            <div className="story-avatar">RK</div>
            <div>
              <div className="name">Rahul K.</div>
              <div className="school">UofT · MEng · 2025</div>
            </div>
          </div>
          <div className="story-headline">"They replied at 11pm."</div>
          <div className="story-quote">I had a panic moment about my SOP. EduTravel replied that night. Cannot recommend enough.</div>
        </div>
      </article>

      
      <article className="story-card" data-story="3">
        <div className="story-bg">
          <svg viewBox="0 0 320 540" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="story4bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6B4FA8"/>
                <stop offset="100%" stopColor="#2A1B45"/>
              </linearGradient>
            </defs>
            <rect width="320" height="540" fill="url(#story4bg)"/>
            
            <g opacity=".5" fill="#F8E89C">
              <path d="M40 80 L42 86 L48 88 L42 90 L40 96 L38 90 L32 88 L38 86 Z"/>
              <path d="M270 140 L272 146 L278 148 L272 150 L270 156 L268 150 L262 148 L268 146 Z"/>
              <path d="M280 60 L282 66 L288 68 L282 70 L280 76 L278 70 L272 68 L278 66 Z"/>
              <path d="M50 200 L52 206 L58 208 L52 210 L50 216 L48 210 L42 208 L48 206 Z"/>
            </g>
            
            <g transform="translate(160 340)">
              
              <path d="M-90 0 Q-90 -50 0 -56 Q90 -50 90 0 L100 180 L-100 180 Z" fill="#A6263E"/>
              
              <path d="M-20 -50 L0 -16 L20 -50 Z" fill="#7A0E1E"/>
              <text x="0" y="60" textAnchor="middle" fontFamily="Inter" fontSize="38" fontWeight="800" letterSpacing="2" fill="#FAF8F5">MIT</text>
              
              <path d="M-70 -16 Q-100 40 -90 90 L-72 96 Q-62 50 -50 12 Z" fill="#A6263E"/>
              <circle cx="-88" cy="96" r="12" fill="#F5C5A3"/>
              
              <rect x="-118" y="86" width="38" height="48" fill="#FAF8F5" stroke="#1F1814" strokeWidth="1.4"/>
              <rect x="-118" y="86" width="38" height="10" fill="#D9783A"/>
              <line x1="-110" y1="106" x2="-88" y2="106" stroke="#DDD9D0" strokeWidth="1"/>
              <line x1="-110" y1="114" x2="-92" y2="114" stroke="#DDD9D0" strokeWidth="1"/>
              <line x1="-110" y1="122" x2="-94" y2="122" stroke="#DDD9D0" strokeWidth="1"/>
              
              <path d="M70 -16 Q90 60 88 140 L70 142 Q60 60 50 0 Z" fill="#A6263E"/>
              <circle cx="86" cy="144" r="12" fill="#F5C5A3"/>
              
              <rect x="-12" y="-72" width="24" height="20" fill="#F5C5A3"/>
              
              <circle cx="0" cy="-96" r="44" fill="#F5C5A3"/>
              
              <path d="M-44 -100 Q-44 -150 0 -154 Q44 -150 44 -100 L48 -28 Q42 -52 30 -68 Q14 -82 0 -82 Q-14 -82 -30 -68 Q-42 -52 -48 -28 Z" fill="#1F1410"/>
              
              <path d="M-32 -110 Q-12 -118 16 -114 Q-4 -100 -32 -98 Z" fill="#0F0908"/>
              
              <ellipse cx="-12" cy="-92" rx="2.6" ry="3.2" fill="#1F1814"/>
              <ellipse cx="12" cy="-92" rx="2.6" ry="3.2" fill="#1F1814"/>
              
              <circle cx="-22" cy="-76" r="6" fill="#E89A8A" opacity=".5"/>
              <circle cx="22" cy="-76" r="6" fill="#E89A8A" opacity=".5"/>
              
              <path d="M-14 -68 Q0 -52 14 -68 Q8 -56 0 -56 Q-8 -56 -14 -68 Z" fill="#7A4A33"/>
              <path d="M-10 -66 Q0 -60 10 -66" stroke="#FAF8F5" strokeWidth="2.4" fill="none"/>
            </g>
          </svg>
        </div>
        <div className="story-bars">
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
          <div className="story-bar"><div className="story-bar-fill"></div></div>
        </div>
        <div className="story-meta">
          <div className="story-author">
            <div className="story-avatar">AS</div>
            <div>
              <div className="name">Anjali S.</div>
              <div className="school">MIT · MS Computer Science · 2024</div>
            </div>
          </div>
          <div className="story-headline">"From Bangalore to MIT."</div>
          <div className="story-quote">My SOP needed 9 rounds of edits. They were patient through every one. The offer came in week three of decisions.</div>
        </div>
      </article>

    </div>
  </div>
</section>


<section className="section section-sun" style={{ paddingTop: '0' }}>
  <div className="wrap">
    <div className="section-head-row reveal">
      <div className="head-left">
        <span className="eyebrow">Google Reviews</span>
        <h2>Loved by <span className="ital">thousands</span>.</h2>
      </div>
      <div className="head-right">
        Real, verified reviews from real students. We don't filter or edit them — every one is straight from Google.
      </div>
    </div>

    <div className="reviews-band">
      <div className="google-badge">
        <div className="google-logo">
          <span className="g"></span>
          <span>Google</span>
        </div>
        <div className="google-rating">
          <span className="score">4.9</span>
          <span className="out-of">/ 5.0</span>
        </div>
        <div className="google-stars">★★★★★</div>
        <div className="google-reviews-count">Based on <b style={{ color: 'var(--ink)' }}>847 reviews</b></div>
        <a href="#" className="google-write-link">Read all on Google <span>→</span></a>
      </div>

      <div className="reviews-track-wrap">
        <div className="reviews-track">

          <article className="review-mini">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#4285F4' }}>A</div>
              <div>
                <div className="review-mini-name">Aarav Mehta</div>
                <div className="review-mini-when">2 weeks ago · UCL</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"EduTravel made my UCL application unbelievably smooth. My consultant Priya was on WhatsApp till 11pm helping me with my SOP. Got the offer in 3 weeks."</div>
          </article>

          <article className="review-mini">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#34A853' }}>N</div>
              <div>
                <div className="review-mini-name">Neha Kumar</div>
                <div className="review-mini-when">1 month ago · TU Munich</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"Germany seemed impossible. EduTravel handled the APS, visa, even the blocked account. I'm in Munich now and it still feels surreal. Thank you!"</div>
          </article>

          <article className="review-mini">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#EA4335' }}>R</div>
              <div>
                <div className="review-mini-name">Rohit Yadav</div>
                <div className="review-mini-when">3 weeks ago · UofT</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"Honestly the most patient counsellor I've worked with. We did 12 versions of my essays. Got into Toronto with a partial scholarship."</div>
          </article>

          <article className="review-mini">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#FBBC04' }}>S</div>
              <div>
                <div className="review-mini-name">Sakina Raj</div>
                <div className="review-mini-when">2 months ago · Melbourne</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"Amazing team! The application portal they built for me made tracking every deadline so much easier. Got into Melbourne and Sydney."</div>
          </article>

          <article className="review-mini">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#6B4FA8' }}>M</div>
              <div>
                <div className="review-mini-name">Manveer Gill</div>
                <div className="review-mini-when">1 month ago · NUS</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"My profile wasn't strong on paper, but they crafted a story that worked. NUS Computing offer in my hand. Forever grateful."</div>
          </article>

          <article className="review-mini">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#2F8C5C' }}>P</div>
              <div>
                <div className="review-mini-name">Priya Bali</div>
                <div className="review-mini-when">3 weeks ago · UBC</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"Helpful services from start to landing in Canada. Visa was approved first try. They even helped me find accommodation in Vancouver."</div>
          </article>

          
          <article className="review-mini" aria-hidden="true">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#4285F4' }}>A</div>
              <div>
                <div className="review-mini-name">Aarav Mehta</div>
                <div className="review-mini-when">2 weeks ago · UCL</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"EduTravel made my UCL application unbelievably smooth. My consultant Priya was on WhatsApp till 11pm helping me with my SOP. Got the offer in 3 weeks."</div>
          </article>
          <article className="review-mini" aria-hidden="true">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#34A853' }}>N</div>
              <div>
                <div className="review-mini-name">Neha Kumar</div>
                <div className="review-mini-when">1 month ago · TU Munich</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"Germany seemed impossible. EduTravel handled the APS, visa, even the blocked account. I'm in Munich now and it still feels surreal. Thank you!"</div>
          </article>
          <article className="review-mini" aria-hidden="true">
            <div className="review-mini-top">
              <div className="review-mini-avatar" style={{ background: '#EA4335' }}>R</div>
              <div>
                <div className="review-mini-name">Rohit Yadav</div>
                <div className="review-mini-when">3 weeks ago · UofT</div>
              </div>
            </div>
            <div className="review-mini-stars">★★★★★</div>
            <div className="review-mini-text">"Honestly the most patient counsellor I've worked with. We did 12 versions of my essays. Got into Toronto with a partial scholarship."</div>
          </article>

        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section-cream" id="faq">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">FAQ</span>
      <h2>Frequently asked <span className="ital">questions</span>.</h2>
    </div>
    <div className="faq reveal">
      <div className="faq-item">
        <button className="faq-q">
          <span>Is EduTravel's consultation really free?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          Yes — completely free, with zero commitment. Our 30-minute counselling sessions are designed to help you figure out whether studying abroad is right for you, what your realistic options are, and which countries fit your profile. You only pay if you choose our Premium service, and even then, only after you've seen the full plan.
        </div></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">
          <span>Which countries do you help students apply to?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          We cover 30+ countries, with the strongest networks in the UK, USA, Canada, Australia, Germany, New Zealand, Ireland, and Singapore. We have 200+ partner universities directly, and place students at hundreds more through standard application channels.
        </div></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">
          <span>What's the difference between Free and Premium service?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          The Free Application Service covers personal statement editing, document guidance, and deadline tracking — you submit applications yourself, with us guiding. Premium is end-to-end: we handle every application portal, document, recommendation chase, and follow-up for you, and we guarantee at least one offer from your shortlisted universities or your fee is refunded.
        </div></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">
          <span>Do you help with student visas?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          Absolutely. Visa assistance is one of our core services and we maintain a 98% first-attempt success rate. We handle document prep, financial proofs (including bank statement guidance), forms, mock interviews, and embassy appointment booking. We've placed students through UK Tier 4 / Student Visa, US F-1, Canadian SDS, Australian Subclass 500, and more.
        </div></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">
          <span>How long does the application process take?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          For most students it's 4–7 months from kickoff to visa-in-hand. UK and Australia tend to be the fastest (4–5 months), the US can take longer (6–9 months) because of standardized testing and visa interviews. Starting 12 months ahead of your intake is ideal; starting 4 months ahead is still doable for most countries.
        </div></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">
          <span>Can you help with scholarships?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          Yes — both university-specific merit scholarships and external funding (Chevening, Fulbright, Commonwealth, DAAD, country-specific grants). We assess your eligibility, help with the additional essays scholarships usually require, and track deadlines. Last year, ~38% of our Premium students received some form of scholarship or fee waiver.
        </div></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">
          <span>Do I need a specific IELTS/TOEFL score?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          It depends on the country and university. UK undergrad typically asks for IELTS 6.0–6.5; postgrad 6.5–7.0. US universities often accept TOEFL 80–100. Canada and Australia sit similar. We run a free diagnostic test to gauge your current band, then recommend a prep plan if needed — we partner with test-prep providers for discounted rates.
        </div></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">
          <span>What happens after I get an offer?</span>
          <span className="icon"></span>
        </button>
        <div className="faq-a"><div className="faq-a-inner">
          The journey continues. We guide you through accepting your offer, paying the deposit, financial documentation, visa application, accommodation booking, forex, and pre-departure briefings. Many of our students stay in touch even after landing — we have alumni groups in every major city to help with the first few weeks abroad.
        </div></div>
      </div>
    </div>
  </div>
</section>


<section className="cta-banner" id="cta">
  <div className="wrap">
    <h2>Have a dream university? <span className="ital">Let's get you there.</span></h2>
    <div className="sub">No fees. No commitment. Just the right guidance.</div>
    <a href="#" className="btn-light-outline">Book Your Free Session <span className="arrow">→</span></a>
  </div>
</section>


<footer className="footer">
  
  <div className="footer-bg">
    <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="footerSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0"/>
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="600" fill="url(#footerSky)"/>
      
      <g fill="#2A2A26" opacity=".6">
        <rect x="0" y="400" width="60" height="200"/>
        <rect x="60" y="380" width="50" height="220"/>
        <rect x="110" y="420" width="40" height="180"/>
        <rect x="160" y="350" width="70" height="250"/>
        <rect x="230" y="410" width="50" height="190"/>
        <rect x="280" y="380" width="60" height="220"/>
        <rect x="350" y="340" width="70" height="260"/>
        <rect x="430" y="400" width="50" height="200"/>
        <rect x="490" y="370" width="60" height="230"/>
        <rect x="560" y="420" width="40" height="180"/>
        <rect x="610" y="350" width="80" height="250"/>
        <rect x="700" y="390" width="55" height="210"/>
        <rect x="765" y="360" width="65" height="240"/>
        <rect x="840" y="410" width="50" height="190"/>
        <rect x="900" y="370" width="65" height="230"/>
        <rect x="975" y="400" width="50" height="200"/>
        <rect x="1035" y="350" width="70" height="250"/>
        <rect x="1115" y="390" width="55" height="210"/>
        <rect x="1180" y="370" width="60" height="230"/>
        <rect x="1250" y="400" width="50" height="200"/>
        <rect x="1310" y="360" width="70" height="240"/>
        <rect x="1390" y="400" width="55" height="200"/>
        <rect x="1455" y="380" width="60" height="220"/>
        <rect x="1525" y="410" width="50" height="190"/>
      </g>
      
      
      <g transform="translate(180 240)" fill="#3F3530">
        <rect x="-14" y="60" width="28" height="280"/>
        <rect x="-18" y="120" width="36" height="22" fill="#5A4A40"/>
        <circle cx="0" cy="131" r="6" fill="#D9783A" opacity=".8"/>
        <polygon points="-14,60 14,60 0,30"/>
        <rect x="-3" y="20" width="6" height="14"/>
      </g>
      
      <g transform="translate(1280 200)" fill="#3F3530">
        <path d="M-30 320 L-12 60 L-2 60 L-2 -30 L2 -30 L2 60 L12 60 L30 320 Z" opacity=".9"/>
        <line x1="-22" y1="220" x2="22" y2="220" stroke="#3F3530" strokeWidth="3"/>
        <line x1="-16" y1="140" x2="16" y2="140" stroke="#3F3530" strokeWidth="3"/>
        <line x1="-10" y1="80" x2="10" y2="80" stroke="#3F3530" strokeWidth="3"/>
      </g>
      
      <g transform="translate(800 180)" fill="#3F3530">
        <rect x="-4" y="80" width="8" height="280"/>
        <ellipse cx="0" cy="80" rx="22" ry="10"/>
        <rect x="-16" y="74" width="32" height="18"/>
        <rect x="-3" y="44" width="6" height="36"/>
        <circle cx="0" cy="40" r="4" fill="#D9783A" opacity=".7"/>
      </g>
      
      <g transform="translate(440 280)" fill="#3F3530">
        <rect x="-4" y="80" width="8" height="180"/>
        <ellipse cx="0" cy="80" rx="14" ry="6"/>
        <circle cx="0" cy="66" r="10"/>
        <path d="M-12 60 L-14 48 M-4 58 L-3 44 M3 58 L4 44 M12 60 L14 48" stroke="#3F3530" strokeWidth="3"/>
        <path d="M-12 78 L-22 58 L-18 58 Z"/>
      </g>
      
      <g transform="translate(1020 320)">
        <path d="M-60 80 Q-48 -10 -24 -2 Q-28 50 -24 80 Z" fill="#3F3530" opacity=".9"/>
        <path d="M-30 80 Q-18 -6 6 0 Q2 54 6 80 Z" fill="#3F3530" opacity=".9"/>
        <path d="M0 80 Q12 -4 36 4 Q32 54 36 80 Z" fill="#3F3530" opacity=".9"/>
        <path d="M30 80 Q42 -2 66 6 Q62 54 66 80 Z" fill="#3F3530" opacity=".9"/>
      </g>
      
      <circle cx="1400" cy="80" r="36" fill="#FBE7CE" opacity=".25"/>
      
      <g fill="#FCF3CB" opacity=".4">
        <circle cx="100" cy="60" r="1.5"/>
        <circle cx="240" cy="40" r="1"/>
        <circle cx="380" cy="80" r="1.2"/>
        <circle cx="520" cy="50" r="1"/>
        <circle cx="640" cy="100" r="1.5"/>
        <circle cx="780" cy="70" r="1.2"/>
        <circle cx="920" cy="40" r="1"/>
        <circle cx="1060" cy="90" r="1.5"/>
        <circle cx="1200" cy="60" r="1.2"/>
        <circle cx="1500" cy="130" r="1"/>
      </g>
      
      <g fill="#F9E59C" opacity=".5">
        <rect x="80" y="450" width="4" height="6"/>
        <rect x="170" y="430" width="4" height="6"/>
        <rect x="290" y="450" width="4" height="6"/>
        <rect x="360" y="410" width="4" height="6"/>
        <rect x="440" y="430" width="4" height="6"/>
        <rect x="510" y="450" width="4" height="6"/>
        <rect x="620" y="400" width="4" height="6"/>
        <rect x="710" y="430" width="4" height="6"/>
        <rect x="780" y="420" width="4" height="6"/>
        <rect x="870" y="450" width="4" height="6"/>
        <rect x="950" y="420" width="4" height="6"/>
        <rect x="1050" y="410" width="4" height="6"/>
        <rect x="1140" y="440" width="4" height="6"/>
        <rect x="1220" y="420" width="4" height="6"/>
        <rect x="1340" y="430" width="4" height="6"/>
        <rect x="1410" y="420" width="4" height="6"/>
        <rect x="1500" y="450" width="4" height="6"/>
      </g>
    </svg>
  </div>

  <div className="wrap">

    
    <div className="footer-find">
      <div className="footer-find-left">
        <h3>Come <span className="ital">say hi</span>.</h3>
        <p>Our office is in the heart of Bangalore — but we'll meet you wherever you are. Drop by for a chai, or just send us a message.</p>
        <div className="footer-find-list">
          <div className="footer-find-row">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div className="lbl">Office</div>
              <div className="v">2nd Floor, Indiranagar · Bangalore 560038</div>
            </div>
          </div>
          <div className="footer-find-row">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <div className="lbl">Phone</div>
              <div className="v">+91 98765 43210</div>
            </div>
          </div>
          <div className="footer-find-row">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div className="lbl">Email</div>
              <div className="v">hello@edutravel.com</div>
            </div>
          </div>
          <div className="footer-find-row">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <div className="lbl">Hours</div>
              <div className="v">Mon–Sat · 10:00 AM – 8:00 PM IST</div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="footer-map">
        <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0F2235"/>
              <stop offset="100%" stopColor="#142847"/>
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#mapBg)"/>
          
          <g stroke="#1F3550" strokeWidth="0.5" opacity=".5">
            <line x1="0" y1="50" x2="600" y2="50"/>
            <line x1="0" y1="100" x2="600" y2="100"/>
            <line x1="0" y1="150" x2="600" y2="150"/>
            <line x1="0" y1="200" x2="600" y2="200"/>
            <line x1="0" y1="250" x2="600" y2="250"/>
            <line x1="0" y1="300" x2="600" y2="300"/>
            <line x1="0" y1="350" x2="600" y2="350"/>
            <line x1="0" y1="400" x2="600" y2="400"/>
            <line x1="50" y1="0" x2="50" y2="450"/>
            <line x1="100" y1="0" x2="100" y2="450"/>
            <line x1="150" y1="0" x2="150" y2="450"/>
            <line x1="200" y1="0" x2="200" y2="450"/>
            <line x1="250" y1="0" x2="250" y2="450"/>
            <line x1="300" y1="0" x2="300" y2="450"/>
            <line x1="350" y1="0" x2="350" y2="450"/>
            <line x1="400" y1="0" x2="400" y2="450"/>
            <line x1="450" y1="0" x2="450" y2="450"/>
            <line x1="500" y1="0" x2="500" y2="450"/>
            <line x1="550" y1="0" x2="550" y2="450"/>
          </g>
          
          <path d="M340 80 Q420 60 480 110 Q500 180 460 230 Q400 260 350 220 Q310 170 340 80 Z" fill="#1F4A2E" opacity=".6"/>
          <text x="410" y="170" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="#3F8F7C" opacity=".7">Cubbon Park</text>
          
          <ellipse cx="120" cy="340" rx="80" ry="36" fill="#1F3F66" opacity=".7"/>
          <text x="120" y="345" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="#5E8FB8" opacity=".7">Ulsoor Lake</text>
          
          <g stroke="#243D5C" strokeWidth="14" strokeLinecap="round" fill="none">
            <path d="M0 220 Q200 200 600 240"/>
            <path d="M120 0 Q140 200 220 450"/>
            <path d="M600 130 Q400 180 100 200"/>
          </g>
          
          <g stroke="#3F5876" strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M0 220 Q200 200 600 240" strokeDasharray="6 6"/>
            <path d="M120 0 Q140 200 220 450" strokeDasharray="6 6"/>
          </g>
          
          <g stroke="#243D5C" strokeWidth="5" strokeLinecap="round" fill="none">
            <path d="M0 60 L600 50"/>
            <path d="M0 380 L600 410"/>
            <path d="M50 0 L80 450"/>
            <path d="M300 0 L320 450"/>
            <path d="M460 0 L480 450"/>
          </g>
          
          <g fill="#1A2F4A" opacity=".7">
            <rect x="40" y="80" width="40" height="30" rx="2"/>
            <rect x="90" y="80" width="50" height="30" rx="2"/>
            <rect x="250" y="80" width="40" height="40" rx="2"/>
            <rect x="320" y="80" width="50" height="40" rx="2"/>
            <rect x="40" y="270" width="40" height="40" rx="2"/>
            <rect x="200" y="290" width="50" height="50" rx="2"/>
            <rect x="280" y="290" width="40" height="50" rx="2"/>
            <rect x="500" y="290" width="50" height="50" rx="2"/>
            <rect x="430" y="350" width="40" height="60" rx="2"/>
            <rect x="500" y="350" width="60" height="60" rx="2"/>
          </g>
          
          <text x="60" y="50" fontFamily="Inter" fontSize="9" fill="#3F5876">MG ROAD</text>
          <text x="300" y="50" fontFamily="Inter" fontSize="9" fill="#3F5876">SHIVAJI NAGAR</text>
          <text x="520" y="120" fontFamily="Inter" fontSize="9" fill="#3F5876">RICHMOND</text>
          <text x="60" y="400" fontFamily="Inter" fontSize="9" fill="#3F5876">KORAMANGALA</text>
          <text x="450" y="430" fontFamily="Inter" fontSize="9" fill="#3F5876">HSR LAYOUT</text>
        </svg>

        
        <div className="map-pin">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
            <path d="M28 4 C 17 4 8 13 8 24 C 8 38 28 52 28 52 C 28 52 48 38 48 24 C 48 13 39 4 28 4 Z"
                  fill="#D9783A" stroke="#fff" strokeWidth="2.5"/>
            <circle cx="28" cy="22" r="7" fill="#fff"/>
            <circle cx="28" cy="22" r="3.5" fill="#D9783A"/>
          </svg>
          <div className="pulse"></div>
        </div>

        
        <div className="map-card">
          <div className="ico">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <h5>EduTravel HQ</h5>
            <p>2nd Floor, Indiranagar · Bangalore</p>
          </div>
          <a href="#" className="map-cta">
            Directions <span>→</span>
          </a>
        </div>
      </div>
    </div>

    
    <div className="footer-grid">
      <div className="footer-brand">
        <a href="#top" className="logo">EduTravel <span className="plane">✈</span></a>
        <p className="tagline">Your journey to global education starts here. An independent study-abroad consultancy connecting ambitious students to the world's best universities.</p>
      </div>
      <div className="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="#services">Free Applications</a></li>
          <li><a href="#services">Premium Service</a></li>
          <li><a href="#services">Visa Assistance</a></li>
          <li><a href="#services">Elite Prep</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Destinations</h5>
        <ul>
          <li><a href="#destinations">United Kingdom</a></li>
          <li><a href="#destinations">United States</a></li>
          <li><a href="#destinations">Canada</a></li>
          <li><a href="#destinations">Australia</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div>© <span id="year">2026</span> EduTravel. All rights reserved.</div>
      <div className="socials">
        <a href="#" className="social-btn" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.34 0h4.37v2.06h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.84c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.78-2.62 3.61V23H7.56V8z"/></svg>
        </a>
        <a href="#" className="social-btn" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
        </a>
        <a href="#" className="social-btn" aria-label="Twitter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
        </a>
        <a href="#" className="social-btn" aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.563 9.876v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.461H15.19c-1.243 0-1.628.771-1.628 1.562V12h2.773l-.443 2.889h-2.33v6.987A10.002 10.002 0 0 0 22 12z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>


<div className="mascot-pal" id="mascotPal" aria-hidden="true">
  <div className="mascot-pal-frame" id="mascotPalFrame">
    
  </div>
  <div className="mascot-bubble" id="mascotPalBubble">Hey, still with you ✈</div>
</div>


<div id="chatbot">
  <button className="cb-fab" aria-label="Open chat">
    <svg className="icon-chat" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5C21 16.194 16.97 20 12 20C10.79 20 9.63 19.78 8.56 19.38L3 21L4.7 15.74C4.25 14.43 4 13 4 11.5C4 6.806 8.03 3 13 3C14.32 3 15.57 3.27 16.7 3.76"/>
      <circle cx="9" cy="11.5" r="1.2" fill="currentColor"/>
      <circle cx="13" cy="11.5" r="1.2" fill="currentColor"/>
      <circle cx="17" cy="11.5" r="1.2" fill="currentColor"/>
    </svg>
    <svg className="icon-close" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M5 5L17 17M17 5L5 17"/>
    </svg>
  </button>
  <aside className="cb-panel" role="dialog" aria-label="EduTravel chat">
    <header className="cb-head">
      <div className="cb-head-info">
        <div className="cb-head-avatar">E</div>
        <div>
          <div className="cb-head-title">EduTravel AI</div>
          <div className="cb-head-sub"><span className="dot"></span>Online · typically replies in seconds</div>
        </div>
      </div>
      <button className="cb-close" aria-label="Close chat">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3L11 11M11 3L3 11"/></svg>
      </button>
    </header>
    <div className="cb-body">
      <div className="cb-msg bot">Hi! 👋 I'm EduTravel's AI assistant. Tell me what you're thinking about — country, course, or just "is this free?" — and I'll point you the right way.</div>
      <div className="cb-msg bot">Pick a quick topic to get started:</div>
      <div className="cb-quick">
        <button data-key="uk">🇬🇧 Study in UK</button>
        <button data-key="visa">🛂 Visa Help</button>
        <button data-key="scholarships">🎓 Scholarships</button>
        <button data-key="free">💸 Is it free?</button>
      </div>
    </div>
    <div className="cb-input">
      <input type="text" placeholder="Type your question…" aria-label="Type message"/>
      <button className="cb-send" aria-label="Send">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9z"/></svg>
      </button>
    </div>
  </aside>
</div>
    </>
  );
}
