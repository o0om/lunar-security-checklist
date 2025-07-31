import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/furniture/hero";
import SectionLinkGrid from "~/components/psc/section-link-grid";
import Progress from "~/components/psc/progress";

import { ChecklistContext } from '~/store/checklist-context';

export default component$(() => { 
  const checklists = useContext(ChecklistContext);

  return (
    <>
      <Hero />
      <Progress />
      <SectionLinkGrid sections={checklists.value || []} />
    </>
  );
});

export const head: DocumentHead = {
  title: "🌙 Lunar Security Checklist",
  meta: [
    {
      name: "description",
      content: "The ultimate personal security checklist, for securing your digital life and protecting your privacy.",
    },
  ],
};
