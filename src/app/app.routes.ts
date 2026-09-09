import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: "ADA / WCAG Code Templates - Home"
  },
  {
    path: 'getting-started',
    loadComponent: () => import('./pages/getting-started/getting-started.component').then((m) => m.GettingStartedComponent),
    title: "Getting Started - ADA / WCAG Code Templates"
  },
  {
    path: 'semantic-html',
    loadComponent: () => import('./pages/semantic-html/semantic-html.component').then((m) => m.SemanticHtmlComponent),
    title: "Semantic HTML - ADA / WCAG Code Templates"
  },
  {
    path: 'buttons',
    loadComponent: () => import('./pages/buttons/buttons.component').then((m) => m.ButtonsComponent),
    title: "Buttons - ADA / WCAG Code Templates"
  },
  {
    path: 'links',
    loadComponent: () => import('./pages/links/links.component').then((m) => m.LinksComponent),
    title: "Links - ADA / WCAG Code Templates"
  },
  {
    path: 'form-fields',
    loadComponent: () => import('./pages/form-fields/form-fields.component').then((m) => m.FormFieldsComponent),
    title: "Form Fields - ADA / WCAG Code Templates"
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.component').then((m) => m.CheckboxComponent),
    title: "Checkbox - ADA / WCAG Code Templates"
  },
  {
    path: 'radio-buttons',
    loadComponent: () => import('./pages/radio-buttons/radio-buttons.component').then((m) => m.RadioButtonsComponent),
    title: "Radio Buttons - ADA / WCAG Code Templates"
  },
  {
    path: 'dropdown',
    loadComponent: () => import('./pages/dropdown/dropdown.component').then((m) => m.DropdownComponent),
    title: "Dropdown / ng-select - ADA / WCAG Code Templates"
  },
  {
    path: 'angular-material',
    loadComponent: () => import('./pages/angular-material/angular-material.component').then((m) => m.AngularMaterialComponent),
    title: "Angular Material - ADA / WCAG Code Templates"
  },
  {
    path: 'tables',
    loadComponent: () => import('./pages/tables/tables.component').then((m) => m.TablesComponent),
    title: "Tables - ADA / WCAG Code Templates"
  },
  {
    path: 'headings',
    loadComponent: () => import('./pages/headings/headings.component').then((m) => m.HeadingsComponent),
    title: "Headings - ADA / WCAG Code Templates"
  },
  {
    path: 'aria',
    loadComponent: () => import('./pages/aria/aria.component').then((m) => m.AriaComponent),
    title: "ARIA - ADA / WCAG Code Templates"
  },
  {
    path: 'screen-reader',
    loadComponent: () => import('./pages/screen-reader/screen-reader.component').then((m) => m.ScreenReaderComponent),
    title: "Screen Reader - ADA / WCAG Code Templates"
  },
  {
    path: 'keyboard',
    loadComponent: () => import('./pages/keyboard/keyboard.component').then((m) => m.KeyboardComponent),
    title: "Keyboard - ADA / WCAG Code Templates"
  },
  {
    path: 'focus-management',
    loadComponent: () => import('./pages/focus-management/focus-management.component').then((m) => m.FocusManagementComponent),
    title: "Focus Management - ADA / WCAG Code Templates"
  },
  {
    path: 'dialog',
    loadComponent: () => import('./pages/dialog/dialog.component').then((m) => m.DialogComponent),
    title: "Dialog / Modal - ADA / WCAG Code Templates"
  },
  {
    path: 'tooltip',
    loadComponent: () => import('./pages/tooltip/tooltip.component').then((m) => m.TooltipComponent),
    title: "Tooltip - ADA / WCAG Code Templates"
  },
  {
    path: 'images',
    loadComponent: () => import('./pages/images/images.component').then((m) => m.ImagesComponent),
    title: "Images & Icons - ADA / WCAG Code Templates"
  },
  {
    path: 'dynamic-content',
    loadComponent: () => import('./pages/dynamic-content/dynamic-content.component').then((m) => m.DynamicContentComponent),
    title: "Dynamic Content - ADA / WCAG Code Templates"
  },
  {
    path: 'directives',
    loadComponent: () => import('./pages/directives/directives.component').then((m) => m.DirectivesComponent),
    title: "Directives - ADA / WCAG Code Templates"
  },
  {
    path: 'css-focus',
    loadComponent: () => import('./pages/css-focus/css-focus.component').then((m) => m.CssFocusComponent),
    title: "CSS & Focus - ADA / WCAG Code Templates"
  },
  {
    path: 'color-contrast',
    loadComponent: () => import('./pages/color-contrast/color-contrast.component').then((m) => m.ColorContrastComponent),
    title: "Color Contrast - ADA / WCAG Code Templates"
  },
  {
    path: 'zoom-reflow',
    loadComponent: () => import('./pages/zoom-reflow/zoom-reflow.component').then((m) => m.ZoomReflowComponent),
    title: "Zoom / Reflow - ADA / WCAG Code Templates"
  },
  {
    path: 'print',
    loadComponent: () => import('./pages/print/print.component').then((m) => m.PrintComponent),
    title: "Print / PDF - ADA / WCAG Code Templates"
  },
  {
    path: 'live-regions',
    loadComponent: () => import('./pages/live-regions/live-regions.component').then((m) => m.LiveRegionsComponent),
    title: "Live Regions - ADA / WCAG Code Templates"
  },
  {
    path: 'error-handling',
    loadComponent: () => import('./pages/error-handling/error-handling.component').then((m) => m.ErrorHandlingComponent),
    title: "Error Handling - ADA / WCAG Code Templates"
  },
  {
    path: 'loading-states',
    loadComponent: () => import('./pages/loading-states/loading-states.component').then((m) => m.LoadingStatesComponent),
    title: "Loading States - ADA / WCAG Code Templates"
  },
  {
    path: 'empty-states',
    loadComponent: () => import('./pages/empty-states/empty-states.component').then((m) => m.EmptyStatesComponent),
    title: "Empty States - ADA / WCAG Code Templates"
  },
  {
    path: 'expand-collapse',
    loadComponent: () => import('./pages/expand-collapse/expand-collapse.component').then((m) => m.ExpandCollapseComponent),
    title: "Expand / Collapse - ADA / WCAG Code Templates"
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.component').then((m) => m.SearchComponent),
    title: "Search - ADA / WCAG Code Templates"
  },
  {
    path: 'sonarqube',
    loadComponent: () => import('./pages/sonarqube/sonarqube.component').then((m) => m.SonarqubeComponent),
    title: "SonarQube Fixes - ADA / WCAG Code Templates"
  },
  {
    path: 'ada-checklist',
    loadComponent: () => import('./pages/ada-checklist/ada-checklist.component').then((m) => m.AdaChecklistComponent),
    title: "ADA Checklist - ADA / WCAG Code Templates"
  },
  { path: '**', redirectTo: '' }
];
