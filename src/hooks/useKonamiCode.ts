import { useState, useEffect } from 'react';

export function useKonamiCode() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
    ];
    let position = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[position]) {
        position++;
        if (position === konamiCode.length) {
          setSuccess(true);
          position = 0; // reset
        }
      } else {
        position = 0; // reset
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { success, setSuccess };
}
