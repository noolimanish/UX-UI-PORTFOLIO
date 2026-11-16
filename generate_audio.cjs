const fs = require('fs');
const path = require('path');

const sampleRate = 44100;
const bpm = 120;
const secondsPerBeat = 60 / bpm; // 0.5 sec
const totalBars = 8;
const totalBeats = totalBars * 4; // 32 beats
const duration = totalBeats * secondsPerBeat; // 16 seconds
const totalSamples = Math.floor(sampleRate * duration);

const left = new Float32Array(totalSamples);
const right = new Float32Array(totalSamples);

// Pseudo-random noise generator
let seed = 42;
function random() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

// 1. Synthesize Drums
// 32 beats total
for (let b = 0; b < totalBeats; b++) {
  const beatTime = b * secondsPerBeat;
  const beatStartSample = Math.floor(beatTime * sampleRate);

  // Kick on beat 0, 1.5, 2.75 in each 4-beat bar
  const barBeat = b % 4;
  const kicks = [0];
  if (barBeat === 1) kicks.push(0.5);
  if (barBeat === 2) kicks.push(0.75);

  kicks.forEach((kOffset) => {
    const kickSample = Math.floor((beatTime + kOffset * secondsPerBeat) * sampleRate);
    const kickLen = Math.floor(sampleRate * 0.28);
    for (let i = 0; i < kickLen && kickSample + i < totalSamples; i++) {
      const t = i / sampleRate;
      const freq = 160 * Math.exp(-t * 22) + 45;
      const env = Math.exp(-t * 12);
      const val = Math.sin(2 * Math.PI * freq * t) * env * 0.85;
      left[kickSample + i] += val;
      right[kickSample + i] += val;
    }
  });

  // Snare on beat 1 and 3 (2nd and 4th of 0,1,2,3)
  if (barBeat === 1 || barBeat === 3) {
    const snareSample = beatStartSample;
    const snareLen = Math.floor(sampleRate * 0.22);
    for (let i = 0; i < snareLen && snareSample + i < totalSamples; i++) {
      const t = i / sampleRate;
      const toneEnv = Math.exp(-t * 25);
      const tone = Math.sin(2 * Math.PI * 220 * t) * toneEnv * 0.35;
      const noiseEnv = Math.exp(-t * 16);
      const noise = (random() * 2 - 1) * noiseEnv * 0.45;
      left[snareSample + i] += tone + noise;
      right[snareSample + i] += tone + noise;
    }
  }

  // 16th note Hi-hats
  for (let h = 0; h < 4; h++) {
    const hatSample = Math.floor((beatTime + (h * 0.25) * secondsPerBeat) * sampleRate);
    const hatLen = Math.floor(sampleRate * 0.05);
    const accent = (h === 0 || h === 2) ? 0.22 : 0.12;
    for (let i = 0; i < hatLen && hatSample + i < totalSamples; i++) {
      const t = i / sampleRate;
      const env = Math.exp(-t * 80);
      const noise = (random() * 2 - 1) * env * accent;
      // Slight stereo spread
      left[hatSample + i] += noise * 0.8;
      right[hatSample + i] += noise * 1.1;
    }
  }
}

// 2. Synthesize Funky Bassline (D minor Pentatonic Groove)
// D2 = 73.42Hz, F2 = 87.31Hz, G2 = 98.00Hz, A2 = 110.00Hz, C3 = 130.81Hz
const bassPattern = [
  { note: 73.42, dur: 0.4, beat: 0 },
  { note: 73.42, dur: 0.2, beat: 0.75 },
  { note: 87.31, dur: 0.3, beat: 1.5 },
  { note: 98.00, dur: 0.4, beat: 2.0 },
  { note: 110.00, dur: 0.2, beat: 2.75 },
  { note: 130.81, dur: 0.3, beat: 3.5 },
];

for (let bar = 0; bar < totalBars; bar++) {
  bassPattern.forEach((bp) => {
    const noteStartBeat = bar * 4 + bp.beat;
    const noteSample = Math.floor(noteStartBeat * secondsPerBeat * sampleRate);
    const noteLen = Math.floor(bp.dur * sampleRate);
    const f0 = bp.note;

    for (let i = 0; i < noteLen && noteSample + i < totalSamples; i++) {
      const t = i / sampleRate;
      const env = Math.sin((Math.PI * i) / noteLen) * Math.exp(-t * 2);
      // Fundamental + 2nd harmonic + 3rd harmonic for rich warm bass
      const wave = Math.sin(2 * Math.PI * f0 * t) * 0.6 +
                   Math.sin(2 * Math.PI * f0 * 2 * t) * 0.3 +
                   Math.sin(2 * Math.PI * f0 * 3 * t) * 0.1;
      const val = wave * env * 0.55;
      left[noteSample + i] += val;
      right[noteSample + i] += val;
    }
  });
}

// 3. Synthesize Rhodes Chords & Melodic Chimes (Stereo Wide)
// Dm9: D4(293.66), F4(349.23), A4(440.0), C5(523.25), E5(659.25)
// Gm9: G4(392.0), Bb4(466.16), D5(587.33), F5(698.46)
const chords = [
  [293.66, 349.23, 440.0, 523.25], // Dm7
  [392.0, 466.16, 587.33, 698.46], // Gm7
  [349.23, 440.0, 523.25, 659.25], // Fmaj7
  [440.0, 554.37, 659.25, 783.99], // A7
];

for (let bar = 0; bar < totalBars; bar++) {
  const chord = chords[bar % chords.length];
  // Play on beat 0.5 and 2.5 of each bar
  [0.5, 2.5].forEach((offset) => {
    const startSample = Math.floor((bar * 4 + offset) * secondsPerBeat * sampleRate);
    const chordLen = Math.floor(0.85 * sampleRate);

    chord.forEach((freq, idx) => {
      const pan = idx % 2 === 0 ? 0.7 : 1.3;
      for (let i = 0; i < chordLen && startSample + i < totalSamples; i++) {
        const t = i / sampleRate;
        const env = Math.exp(-t * 3.5);
        // Soft electric piano tremolo
        const tremolo = 1 + 0.15 * Math.sin(2 * Math.PI * 6 * t);
        const tone = Math.sin(2 * Math.PI * freq * t) * env * 0.12 * tremolo;
        left[startSample + i] += tone * (2 - pan);
        right[startSample + i] += tone * pan;
      }
    });
  });
}

// 4. Master Limiter & Normalize
let maxVal = 0;
for (let i = 0; i < totalSamples; i++) {
  if (Math.abs(left[i]) > maxVal) maxVal = Math.abs(left[i]);
  if (Math.abs(right[i]) > maxVal) maxVal = Math.abs(right[i]);
}

const targetPeak = 0.92;
const scale = maxVal > 0 ? targetPeak / maxVal : 1;

// Write to 16-bit PCM WAV buffer
const wavBuffer = Buffer.alloc(44 + totalSamples * 4); // 2 channels * 2 bytes = 4 bytes per sample frame

// RIFF chunk descriptor
wavBuffer.write('RIFF', 0);
wavBuffer.writeUInt32LE(36 + totalSamples * 4, 4);
wavBuffer.write('WAVE', 8);

// fmt sub-chunk
wavBuffer.write('fmt ', 12);
wavBuffer.writeUInt32LE(16, 16); // subchunk1size (16 for PCM)
wavBuffer.writeUInt16LE(1, 20);  // audioformat (1 for PCM)
wavBuffer.writeUInt16LE(2, 22);  // numchannels (2 stereo)
wavBuffer.writeUInt32LE(sampleRate, 24);
wavBuffer.writeUInt32LE(sampleRate * 4, 28); // byterate
wavBuffer.writeUInt16LE(4, 32);  // blockalign
wavBuffer.writeUInt16LE(16, 34); // bitspersample (16)

// data sub-chunk
wavBuffer.write('data', 36);
wavBuffer.writeUInt32LE(totalSamples * 4, 40);

let offset = 44;
for (let i = 0; i < totalSamples; i++) {
  const lSample = Math.max(-1, Math.min(1, left[i] * scale));
  const rSample = Math.max(-1, Math.min(1, right[i] * scale));

  const lInt = lSample < 0 ? lSample * 32768 : lSample * 32767;
  const rInt = rSample < 0 ? rSample * 32768 : rSample * 32767;

  wavBuffer.writeInt16LE(Math.floor(lInt), offset);
  wavBuffer.writeInt16LE(Math.floor(rInt), offset + 2);
  offset += 4;
}

const outputPath = path.join(__dirname, 'public', 'audio', 'killin_em_scene.wav');
fs.writeFileSync(outputPath, wavBuffer);
console.log(`Generated high-quality audio file at: ${outputPath} (${(wavBuffer.length / 1024 / 1024).toFixed(2)} MB, ${duration}s)`);
