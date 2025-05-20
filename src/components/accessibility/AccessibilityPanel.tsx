
import React, { useState, useEffect } from 'react';
import { 
  Sun,
  MoonStar, 
  Type, 
  ZoomIn, 
  ZoomOut,
  SpeakerWave,
  SpeakerX
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type AccessibilityState = {
  highContrast: boolean;
  fontSize: number;
  screenReader: boolean;
};

export const AccessibilityContext = React.createContext<{
  accessibilityState: AccessibilityState;
  setAccessibilityState: React.Dispatch<React.SetStateAction<AccessibilityState>>;
}>({
  accessibilityState: { highContrast: false, fontSize: 16, screenReader: false },
  setAccessibilityState: () => {},
});

export const useAccessibility = () => React.useContext(AccessibilityContext);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    highContrast: false,
    fontSize: 16,
    screenReader: false,
  });

  useEffect(() => {
    // Apply high contrast mode
    if (accessibilityState.highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }

    // Apply font size
    document.documentElement.style.fontSize = `${accessibilityState.fontSize}px`;
    
    // For screen reader announcements (simplified implementation)
    if (accessibilityState.screenReader) {
      // In a real implementation, this would integrate with a screen reader API
      document.body.setAttribute('aria-live', 'polite');
    } else {
      document.body.removeAttribute('aria-live');
    }
  }, [accessibilityState]);

  return (
    <AccessibilityContext.Provider value={{ accessibilityState, setAccessibilityState }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

const AccessibilityPanel = () => {
  const { accessibilityState, setAccessibilityState } = useAccessibility();
  
  const toggleHighContrast = () => {
    setAccessibilityState(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };
  
  const toggleScreenReader = () => {
    setAccessibilityState(prev => ({ ...prev, screenReader: !prev.screenReader }));
  };
  
  const changeFontSize = (newSize: number) => {
    setAccessibilityState(prev => ({ ...prev, fontSize: newSize }));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-md bg-primary text-white hover:bg-primary/90"
          aria-label="Accessibility options"
        >
          <span className="sr-only">Accessibility Options</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="m4.9 4.9 14.2 14.2"/>
            <path d="M12 3a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2Z"/>
            <path d="M12 19a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2Z"/>
            <path d="M19 12a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2Z"/>
            <path d="M5 12a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2Z"/>
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Accessibility Options</h3>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                {accessibilityState.highContrast ? <MoonStar size={18} /> : <Sun size={18} />}
                High Contrast Mode
              </span>
              <Toggle
                pressed={accessibilityState.highContrast}
                onPressedChange={toggleHighContrast}
                aria-label="Toggle high contrast mode"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                {accessibilityState.screenReader ? <SpeakerWave size={18} /> : <SpeakerX size={18} />}
                Screen Reader Support
              </span>
              <Toggle
                pressed={accessibilityState.screenReader}
                onPressedChange={toggleScreenReader}
                aria-label="Toggle screen reader support"
              />
            </div>
            
            <div className="space-y-2">
              <span className="flex items-center gap-2">
                <Type size={18} />
                Text Size
              </span>
              <div className="flex items-center gap-2">
                <ZoomOut size={16} />
                <Slider
                  value={[accessibilityState.fontSize]}
                  min={14}
                  max={24}
                  step={1}
                  onValueChange={(value) => changeFontSize(value[0])}
                  aria-label="Adjust text size"
                  className="flex-1"
                />
                <ZoomIn size={16} />
              </div>
              <div className="text-sm text-center">
                {accessibilityState.fontSize}px
              </div>
            </div>
          </div>
          
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              Keyboard navigation is enabled. Use Tab to navigate and Enter to select.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityPanel;
