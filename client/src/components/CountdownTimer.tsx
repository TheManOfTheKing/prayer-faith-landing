import { useEffect, useState } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  hours?: number;
  className?: string;
}

export default function CountdownTimer({ 
  hours = 24,
  className = '' 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: hours,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + (hours * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hoursLeft = Math.floor(distance / (1000 * 60 * 60));
      const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hours]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-card border border-primary/30 rounded-lg p-4 min-w-[80px] glow-effect">
        <div className="text-4xl md:text-5xl font-bold text-gradient glow-text">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className={`flex gap-4 justify-center items-center ${className}`}>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-3xl text-primary font-bold mb-6">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-3xl text-primary font-bold mb-6">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
