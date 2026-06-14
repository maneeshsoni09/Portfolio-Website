import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCw, MapPin, Clock, Globe } from 'lucide-react';
import { Mascot } from './Mascot';
import { recordUniqueVisit, getVisitorCount } from '../utils/visitorCounter';

interface WelcomeModalProps {
  onClose: () => void;
}

const WELCOME_MESSAGES = [
  "Hey there 👋",
  "Welcome to my little corner of the internet.",
  "Looking for bugs? You'll probably find fewer than expected.",
  "Another visitor? My confidence appreciates it.",
  "Curious minds are always welcome here.",
  "Recruiter detected. Activating impressive mode.",
  "Nice to see you. I cleaned the code before you arrived.",
  "You've entered the portfolio. Escape is optional.",
  "Kanishka promised this website was bug-free. I remain skeptical."
];

const FUNNY_MESSAGES = [
  "Congratulations, you've increased my ego by 0.001%.",
  "Every visit makes me look more employable.",
  "My mom accounts for at least 12 of these visits.",
  "This portfolio now has one more witness.",
  "Thanks for helping my analytics look impressive.",
  "Somewhere a recruiter just nodded.",
  "Another visitor. Another confidence boost.",
  "Your visit has been recorded for bragging purposes."
];

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  // --- STATE ---
  const [visitorInfo, setVisitorInfo] = useState({
    country: 'Detecting Location...',
    flag: '🌍',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    localTime: ''
  });
  const [visitorCount, setVisitorCount] = useState(0);
  const [displayedCount, setDisplayedCount] = useState(0);
  const prevCountRef = useRef(0);
  
  const [greeting, setGreeting] = useState('Welcome ☀️');
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const [funnyMsgIndex, setFunnyMsgIndex] = useState(0);
  const [isRefreshingMsg, setIsRefreshingMsg] = useState(false);

  // Layout / Tilt
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);
  const [lookAtCounter, setLookAtCounter] = useState(false);



  // Initialize particles
  useEffect(() => {
    const p = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 7 + 5
    }));
    setParticles(p);
  }, []);

  // Format flag helper
  const getFlagEmoji = (countryCode: string): string => {
    if (!countryCode || countryCode.length !== 2) return '🌍';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Timezone country inference fallback
  const inferCountryFromTimezone = (tz: string) => {
    const tzLower = tz.toLowerCase();
    if (tzLower.includes('kolkata') || tzLower.includes('india') || tzLower.includes('asia/calcutta')) return { name: 'India', flag: '🇮🇳' };
    if (tzLower.includes('london') || tzLower.includes('europe/london')) return { name: 'United Kingdom', flag: '🇬🇧' };
    if (tzLower.includes('new_york') || tzLower.includes('chicago') || tzLower.includes('denver') || tzLower.includes('los_angeles')) return { name: 'United States', flag: '🇺🇸' };
    if (tzLower.includes('tokyo') || tzLower.includes('asia/tokyo')) return { name: 'Japan', flag: '🇯🇵' };
    if (tzLower.includes('sydney') || tzLower.includes('australia')) return { name: 'Australia', flag: '🇦🇺' };
    if (tzLower.includes('paris') || tzLower.includes('europe/paris')) return { name: 'France', flag: '🇫🇷' };
    if (tzLower.includes('berlin')) return { name: 'Germany', flag: '🇩🇪' };
    if (tzLower.includes('singapore')) return { name: 'Singapore', flag: '🇸🇬' };
    if (tzLower.includes('toronto') || tzLower.includes('vancouver') || tzLower.includes('canada')) return { name: 'Canada', flag: '🇨🇦' };
    return { name: 'Global Network', flag: '🌍' };
  };

  // --- TIME/GREETING SYNC ---
  const updateGreeting = (tz: string) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: 'numeric',
        hour12: false
      });
      const hour = parseInt(formatter.format(new Date()), 10);
      if (hour >= 5 && hour < 12) setGreeting('Good Morning ☀️');
      else if (hour >= 12 && hour < 18) setGreeting('Good Afternoon 🌤️');
      else setGreeting('Good Evening 🌙');
    } catch {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setGreeting('Good Morning ☀️');
      else if (hour >= 12 && hour < 18) setGreeting('Good Afternoon 🌤️');
      else setGreeting('Good Evening 🌙');
    }
  };

  // --- RANDOM WELCOME MESSAGE ---
  const triggerRandomMessage = () => {
    setIsRefreshingMsg(true);
    setTimeout(() => {
      const filtered = WELCOME_MESSAGES.filter(m => m !== welcomeMsg);
      const randomMsg = filtered[Math.floor(Math.random() * filtered.length)];
      setWelcomeMsg(randomMsg);
      setIsRefreshingMsg(false);
    }, 200);
  };

  useEffect(() => {
    triggerRandomMessage();
  }, []);

  // Rotate funny message every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFunnyMsgIndex(prev => (prev + 1) % FUNNY_MESSAGES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // --- LOCATION & COUNT INITIALIZATION ---
  useEffect(() => {
    let active = true;
    const defaultTz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';

    const fetchGeoInfo = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Geo API failure');
        const data = await res.json();
        
        if (!active) return;
        
        const flag = getFlagEmoji(data.country_code);
        const country = data.country_name || 'Global Network';
        const timezone = data.timezone || defaultTz;

        setVisitorInfo(prev => ({ ...prev, country, flag, timezone }));
        updateGreeting(timezone);

        const visitResult = await recordUniqueVisit(country, timezone);
        setVisitorCount(visitResult.count);
      } catch (err) {
        console.warn('Welcome Modal geolocation lookup failed, using local detection:', err);
        if (!active) return;

        const fallback = inferCountryFromTimezone(defaultTz);
        setVisitorInfo(prev => ({
          ...prev,
          country: fallback.name,
          flag: fallback.flag,
          timezone: defaultTz
        }));
        updateGreeting(defaultTz);

        const visitResult = await recordUniqueVisit(fallback.name, defaultTz);
        setVisitorCount(visitResult.count);
      }
    };

    fetchGeoInfo();
    return () => {
      active = false;
    };
  }, []);

  // --- TIME TICKER ---
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: visitorInfo.timezone,
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setVisitorInfo(prev => ({ ...prev, localTime: timeStr }));
      } catch {
        setVisitorInfo(prev => ({ ...prev, localTime: new Date().toLocaleTimeString() }));
      }
    };

    updateTime();
    const clockTimer = setInterval(updateTime, 1000);
    return () => clearInterval(clockTimer);
  }, [visitorInfo.timezone]);

  // --- COUNTER TICK-UP ANIMATION ---
  useEffect(() => {
    if (visitorCount > 0) {
      setLookAtCounter(true);
      setTimeout(() => setLookAtCounter(false), 2500);

      const start = prevCountRef.current;
      const end = visitorCount;
      prevCountRef.current = visitorCount;

      if (start === end) {
        setDisplayedCount(end);
        return;
      }

      setDisplayedCount(start);

      const duration = 1600; // ms
      const interval = 25; // ms
      const steps = duration / interval;
      const stepVal = (end - start) / steps;

      let currentStep = 0;
      const countTimer = setInterval(() => {
        currentStep++;
        const next = Math.floor(start + currentStep * stepVal);
        if (currentStep >= steps || (stepVal > 0 ? next >= end : next <= end)) {
          clearInterval(countTimer);
          setDisplayedCount(end);
        } else {
          setDisplayedCount(next);
        }
      }, interval);

      return () => clearInterval(countTimer);
    }
  }, [visitorCount]);

  // --- REAL-TIME VISITOR COUNT POLLING ---
  useEffect(() => {
    // Poll every 3 seconds for live visitor updates
    const pollInterval = setInterval(async () => {
      try {
        const count = await getVisitorCount();
        if (count > 0) {
          setVisitorCount(count);
        }
      } catch (err) {
        console.warn('Real-time visitor count update failed:', err);
      }
    }, 3000); // 3 seconds for responsive feel

    return () => clearInterval(pollInterval);
  }, []);

  // --- AUTO-DISMISS TIMER (7.5s) ---
  useEffect(() => {
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, 7500); // 7.5 seconds

    return () => clearTimeout(autoCloseTimer);
  }, []);

  // --- ESCAPE KEY LISTENER ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('portfolio_welcome_dismissed', 'true');
    onClose();
  };

  // --- TILT LOGIC (Poster) ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4 select-none">
      
      {/* Click Outside Backdrop to Close */}
      <div className="absolute inset-0 z-10" onClick={handleClose} />

      {/* Main Modal Layout Card (Entrance animation) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="relative w-full max-w-[640px] flex items-center justify-center min-h-[460px] md:min-h-[500px] z-20 pointer-events-auto"
      >
        {/* Soft Glow behind everything */}
        <div
          className="absolute rounded-full blur-3xl opacity-35 pointer-events-none"
          style={{
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(255, 23, 68, 0.6) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}
        />

        {/* Mascot + Card Composition */}
        <div className="relative w-full flex items-center justify-end pr-2 md:pr-4">
          
          {/* Mascot peeking / holding poster */}
          <Mascot
            className="absolute -left-12 md:-left-20 top-1/2 -translate-y-1/2 w-44 md:w-56 h-auto z-20 pointer-events-auto"
            onClickShape={triggerRandomMessage}
            lookAtCounter={lookAtCounter}
          />

          {/* Glassmorphic Poster Board */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(12px)`,
              transition: 'transform 0.1s ease-out',
              transformStyle: 'preserve-3d',
              width: '82%',
              backgroundColor: 'rgba(17, 17, 17, 0.7)',
              border: '1.5px solid rgba(255, 23, 68, 0.3)',
              borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 23, 68, 0.08)'
            }}
            className="relative min-h-[380px] p-6 md:p-8 flex flex-col justify-between overflow-hidden z-10"
          >
            {/* Small visible close cross icon inside the card */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-[var(--accent-red)]/50 text-neutral-400 hover:text-white transition-all duration-200 cursor-pointer z-30 flex items-center justify-center"
              title="Dismiss Welcome Board"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Drifting particles backing */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {particles.map(p => (
                <motion.div
                  key={p.id}
                  className="absolute bg-white/20 rounded-full"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                  }}
                  animate={{
                    y: [0, -70, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Poster Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4 z-10">
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono">
                  GUEST DOSSIER
                </span>
                <span className="text-sm md:text-base font-extrabold text-white tracking-wide font-accent">
                  {greeting}
                </span>
              </div>
              
              {/* Pulse / Counter Badge */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5 bg-red-950/40 border border-red-500/30 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-extrabold text-red-400 uppercase tracking-widest font-mono">
                    LIVE
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400 mt-1 font-mono">
                  visitor #{displayedCount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Poster Welcome Message Box */}
            <div className="flex-grow flex flex-col justify-center py-4 relative z-10 min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={welcomeMsg}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="pr-6 text-left"
                >
                  <p className="text-base md:text-lg font-bold text-white leading-relaxed font-body">
                    "{welcomeMsg}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Refresh welcome message */}
              <button
                onClick={triggerRandomMessage}
                disabled={isRefreshingMsg}
                className="absolute right-0 bottom-2 p-1.5 text-neutral-400 hover:text-[var(--accent-red)] transition-colors duration-200"
                title="Random Message"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshingMsg ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Poster Footer: funny statement + timezone clocks */}
            <div className="border-t border-white/5 pt-4 mt-4 z-10 flex flex-col gap-3">
              <div className="min-h-[36px] flex items-center justify-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={funnyMsgIndex}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] md:text-xs text-neutral-400 leading-snug italic font-body text-left"
                  >
                    {FUNNY_MESSAGES[funnyMsgIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Network location details */}
              <div className="grid grid-cols-2 gap-2 bg-neutral-950/60 border border-white/5 rounded-xl p-2.5 text-[9px] md:text-[10px] text-neutral-400 font-mono">
                <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                  <MapPin className="w-3 h-3 text-[var(--accent-red)] flex-shrink-0" />
                  <span>{visitorInfo.flag} {visitorInfo.country}</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end">
                  <Clock className="w-3 h-3 text-[var(--accent-red)] flex-shrink-0" />
                  <span>{visitorInfo.localTime || '00:00:00 AM'}</span>
                </div>
                <div className="col-span-2 flex items-center gap-1.5 border-t border-white/5 pt-1.5 mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">
                  <Globe className="w-3 h-3 text-[var(--accent-red)] flex-shrink-0" />
                  <span>{visitorInfo.timezone}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
};
