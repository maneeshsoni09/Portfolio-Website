class OceanAudioEngine {
  private ctx: AudioContext | null = null;
  private ambientGain: GainNode | null = null;
  private ambientOsc: OscillatorNode | null = null;
  private ambientLFO: OscillatorNode | null = null;
  private isEnabled: boolean = false;

  constructor() {
    // Audio context is lazy initialized on user interaction to comply with browser autoplay policies.
  }

  private init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    } catch (e) {
      console.warn("Web Audio API not supported in this browser.", e);
    }
  }

  public toggle(): boolean {
    this.init();
    if (!this.ctx) return false;

    if (this.isEnabled) {
      this.stopAmbient();
      this.isEnabled = false;
    } else {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.startAmbient();
      this.isEnabled = true;
      // Play an initial sonar ping to welcome the user
      this.playPing();
    }
    return this.isEnabled;
  }

  public getStatus(): boolean {
    return this.isEnabled;
  }

  private startAmbient() {
    if (!this.ctx) return;

    try {
      // Create main gain node for ambient hum
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.06, this.ctx.currentTime);

      // Create low frequency oscillator for ocean rumble
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientOsc.type = 'sine';
      this.ambientOsc.frequency.setValueAtTime(45, this.ctx.currentTime); // Deep hum (45Hz)

      // Create a low pass filter to keep it dark and warm
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(70, this.ctx.currentTime);

      // Create an LFO to simulate rhythmic ocean swells (tide swell)
      this.ambientLFO = this.ctx.createOscillator();
      this.ambientLFO.type = 'sine';
      this.ambientLFO.frequency.setValueAtTime(0.15, this.ctx.currentTime); // Swells every 6.6 seconds

      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(0.02, this.ctx.currentTime);

      // Connect LFO to modulate filter frequency
      this.ambientLFO.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // Connect source to filter, then gain, then destination
      this.ambientOsc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      // Start oscillators
      this.ambientOsc.start();
      this.ambientLFO.start();
    } catch (err) {
      console.error("Error starting ambient synthesizer:", err);
    }
  }

  private stopAmbient() {
    try {
      if (this.ambientOsc) {
        this.ambientOsc.stop();
        this.ambientOsc.disconnect();
        this.ambientOsc = null;
      }
      if (this.ambientLFO) {
        this.ambientLFO.stop();
        this.ambientLFO.disconnect();
        this.ambientLFO = null;
      }
      if (this.ambientGain) {
        this.ambientGain.disconnect();
        this.ambientGain = null;
      }
    } catch (e) {
      console.warn("Error disconnecting audio nodes:", e);
    }
  }

  public playPing() {
    this.init();
    if (!this.ctx || !this.isEnabled) return;

    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;

      // Sonar Ping Oscillator (high frequency tone)
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);

      // Gain Envelope for natural sonar decay
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.12, now);
      // Exponential decay over 3.2 seconds
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      // Bandpass Filter with high resonance for an echoic "metallic water cylinder" effect
      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(750, now);
      bandpass.Q.setValueAtTime(12, now);

      // Sweep filter frequency down to simulate sound spreading under water pressure
      bandpass.frequency.exponentialRampToValueAtTime(350, now + 2.5);

      // Connect nodes
      osc.connect(bandpass);
      bandpass.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      // Start and schedule stop
      osc.start(now);
      osc.stop(now + 3.3);
    } catch (err) {
      console.error("Error playing sonar ping:", err);
    }
  }

  public playClick() {
    this.init();
    if (!this.ctx || !this.isEnabled) return;

    try {
      const now = this.ctx.currentTime;
      
      // Fast, short impulse of high-frequency sound to mock typing mechanism clicks
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.04);

      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.02, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (err) {
      // Fail silently for subtle interface clicks
    }
  }
}

export const audioEngine = new OceanAudioEngine();
