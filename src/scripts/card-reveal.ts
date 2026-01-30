/**
 * card-reveal.ts - Tap-to-reveal behavior for touch devices
 * 
 * Handles cards with [data-card-reveal] attribute:
 * - First tap: reveal overlay (add .active class)
 * - Second tap on action: execute link
 * - Tap outside: close overlay
 * 
 * On desktop: does nothing, hover states work normally via CSS
 */

// Prevent multiple initializations
let isInitialized = false;

function initCardReveal(): void {
  // Guard against multiple initializations
  if (isInitialized) return;
  
  const cards = document.querySelectorAll<HTMLElement>('[data-card-reveal]');
  if (cards.length === 0) return;
  
  // Detect touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (!isTouchDevice) return;
  
  isInitialized = true;

  // Use event delegation on document for better performance
  document.addEventListener('click', handleDocumentClick);
  
  function handleDocumentClick(e: Event): void {
    const target = e.target as HTMLElement;
    const card = target.closest<HTMLElement>('[data-card-reveal]');
    
    // Clicked outside any card - close all
    if (!card) {
      closeAllCards();
      return;
    }
    
    const isActionLink = target.closest('.card-action');
    
    // If clicking the action link and card is active, allow default behavior
    if (isActionLink && card.classList.contains('active')) {
      return; // Let the link work
    }
    
    // If clicking the action link but card is not active, prevent and activate
    if (isActionLink && !card.classList.contains('active')) {
      e.preventDefault();
      closeAllCards();
      card.classList.add('active');
      return;
    }
    
    // Toggle card state
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
      closeAllCards();
      card.classList.add('active');
    }
  }

  function closeAllCards(): void {
    document.querySelectorAll<HTMLElement>('[data-card-reveal].active').forEach(c => {
      c.classList.remove('active');
    });
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCardReveal);
} else {
  initCardReveal();
}

// Re-initialize on View Transitions (reset flag since page changed)
document.addEventListener('astro:before-swap', () => {
  isInitialized = false;
});

document.addEventListener('astro:page-load', initCardReveal);
