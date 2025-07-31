import { component$, useStyles$, useContextProvider, useSignal, useOnWindow, $ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import tailwind from './styles/tailwind.css?inline';

import "./styles/global.css";
import { ChecklistContext } from "./store/checklist-context";
import type { Sections } from "./types/PSC";
import jsyaml from 'js-yaml';

export default component$(() => {

  useStyles$(tailwind);
  
  // Create a signal for the checklist data
  const checklistSignal = useSignal<Sections>([]);
  
  // Provide the context
  useContextProvider(ChecklistContext, checklistSignal);
  
  // Load checklist data
  const fetchChecklist = $(async () => {
    try {
      console.log('Fetching checklist data...');
      const response = await fetch('/personal-security-checklist.yml');
      const yamlText = await response.text();
      console.log('YAML loaded, length:', yamlText.length);
      const checklist = jsyaml.load(yamlText) as Sections;
      console.log('Checklist parsed, sections:', checklist.length);
      checklistSignal.value = checklist;
    } catch (error) {
      console.error('Failed to load checklist data:', error);
    }
  });

  // Load checklist data on window load
  useOnWindow('load', fetchChecklist);
  
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" data-theme="dark" class="flex flex-col justify-between min-h-screen">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
