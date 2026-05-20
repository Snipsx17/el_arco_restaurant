"usa client"

import { ReactNode, useEffect } from 'react'

export default function Overlay({ children, handleCloseOverlay }: { children: ReactNode, handleCloseOverlay: () => void }) {

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            console.log('Esc key pressed!');
              handleCloseOverlay()
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseOverlay]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={handleCloseOverlay}
        >
            {children}
        </div>
    )
}
