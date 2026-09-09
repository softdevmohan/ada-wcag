export interface NavItem {
  path: string;
  icon: string;
  label: string;
  title: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { path: '/', icon: 'home', label: 'Home', title: 'ADA / WCAG Code Templates - Home' },
  { path: '/getting-started', icon: 'compass', label: 'Getting Started', title: 'Getting Started - ADA / WCAG Code Templates' },
  { path: '/semantic-html', icon: 'code-2', label: 'Semantic HTML', title: 'Semantic HTML - ADA / WCAG Code Templates' },
  { path: '/buttons', icon: 'play-square', label: 'Buttons', title: 'Buttons - ADA / WCAG Code Templates' },
  { path: '/links', icon: 'link', label: 'Links', title: 'Links - ADA / WCAG Code Templates' },
  { path: '/form-fields', icon: 'check-square', label: 'Form Fields', title: 'Form Fields - ADA / WCAG Code Templates' },
  { path: '/checkbox', icon: 'check-circle-2', label: 'Checkbox', title: 'Checkbox - ADA / WCAG Code Templates' },
  { path: '/radio-buttons', icon: 'disc', label: 'Radio Buttons', title: 'Radio Buttons - ADA / WCAG Code Templates' },
  { path: '/dropdown', icon: 'chevron-down-square', label: 'Dropdown / ng-select', title: 'Dropdown / ng-select - ADA / WCAG Code Templates' },
  { path: '/angular-material', icon: 'shield', label: 'Angular Material', title: 'Angular Material - ADA / WCAG Code Templates' },
  { path: '/tables', icon: 'table', label: 'Tables', title: 'Tables - ADA / WCAG Code Templates' },
  { path: '/headings', icon: 'heading', label: 'Headings', title: 'Headings - ADA / WCAG Code Templates' },
  { path: '/aria', icon: 'code', label: 'ARIA', title: 'ARIA - ADA / WCAG Code Templates' },
  { path: '/screen-reader', icon: 'volume-2', label: 'Screen Reader', title: 'Screen Reader - ADA / WCAG Code Templates' },
  { path: '/keyboard', icon: 'keyboard', label: 'Keyboard', title: 'Keyboard - ADA / WCAG Code Templates' },
  { path: '/focus-management', icon: 'rotate-ccw', label: 'Focus Management', title: 'Focus Management - ADA / WCAG Code Templates' },
  { path: '/dialog', icon: 'layout', label: 'Dialog / Modal', title: 'Dialog / Modal - ADA / WCAG Code Templates' },
  { path: '/tooltip', icon: 'message-square', label: 'Tooltip', title: 'Tooltip - ADA / WCAG Code Templates' },
  { path: '/images', icon: 'image', label: 'Images & Icons', title: 'Images & Icons - ADA / WCAG Code Templates' },
  { path: '/dynamic-content', icon: 'sliders', label: 'Dynamic Content', title: 'Dynamic Content - ADA / WCAG Code Templates' },
  { path: '/directives', icon: 'cpu', label: 'Directives', title: 'Directives - ADA / WCAG Code Templates' },
  { path: '/css-focus', icon: 'paint-bucket', label: 'CSS & Focus', title: 'CSS & Focus - ADA / WCAG Code Templates' },
  { path: '/color-contrast', icon: 'palette', label: 'Color Contrast', title: 'Color Contrast - ADA / WCAG Code Templates' },
  { path: '/zoom-reflow', icon: 'zoom-in', label: 'Zoom / Reflow', title: 'Zoom / Reflow - ADA / WCAG Code Templates' },
  { path: '/print', icon: 'printer', label: 'Print / PDF', title: 'Print / PDF - ADA / WCAG Code Templates' },
  { path: '/live-regions', icon: 'radio', label: 'Live Regions', title: 'Live Regions - ADA / WCAG Code Templates' },
  { path: '/error-handling', icon: 'alert-circle', label: 'Error Handling', title: 'Error Handling - ADA / WCAG Code Templates' },
  { path: '/loading-states', icon: 'loader-2', label: 'Loading States', title: 'Loading States - ADA / WCAG Code Templates' },
  { path: '/empty-states', icon: 'inbox', label: 'Empty States', title: 'Empty States - ADA / WCAG Code Templates' },
  { path: '/expand-collapse', icon: 'chevrons-up-down', label: 'Expand / Collapse', title: 'Expand / Collapse - ADA / WCAG Code Templates' },
  { path: '/search', icon: 'search', label: 'Search', title: 'Search - ADA / WCAG Code Templates' },
  { path: '/sonarqube', icon: 'file-code-2', label: 'SonarQube Fixes', title: 'SonarQube Fixes - ADA / WCAG Code Templates' },
  { path: '/ada-checklist', icon: 'clipboard-check', label: 'ADA Testing Checklist', title: 'ADA Checklist - ADA / WCAG Code Templates' }
];
