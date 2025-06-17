"use client";
import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: string; // Tailwind delay class e.g., 'delay-200'
}

const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  className,
  delay = 'delay-0' // Default no delay
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current; // Capture current value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (element) { 
            observer.unobserve(element); // Disconnect observer after animation
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]); // Re-run effect if delay changes, though typically it won't.

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out', // Base transition
        delay, // Apply delay
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5', // Animation states
        className // Allow additional classes
      )}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
