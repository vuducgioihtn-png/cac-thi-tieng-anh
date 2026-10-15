/**
 * Web Speech API wrapper for English pronunciation
 */

let synth: SpeechSynthesis | null = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  synth = window.speechSynthesis;
}

export const playAudio = (text: string, rate: number = 0.95): Promise<void> => {
  return new Promise((resolve) => {
    if (!synth) {
      resolve();
      return;
    }

    try {
      synth.cancel(); // Stop any pending utterance
      const cleanText = text.replace(/[_]+/g, '').replace(/\[.*?\]/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Try selecting an English voice
      const voices = synth.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith('en-US') || v.lang.startsWith('en-GB') || v.lang.startsWith('en'));
      if (enVoice) {
        utterance.voice = enVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      synth.speak(utterance);
    } catch {
      resolve();
    }
  });
};

export const stopAudio = () => {
  if (synth) {
    synth.cancel();
  }
};
