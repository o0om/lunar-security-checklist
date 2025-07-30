import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/o0om/lunar-security-checklist/';
  const licenseLink = 'https://github.com/o0om/lunar-security-checklist/blob/main/LICENSE';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>Licensed under <a href={licenseLink} class="link link-primary">MIT</a> -
      © Lunar Security Team 2024 - 
      View source on <a href={ghLink} class="link link-primary">GitHub</a></p>
    </aside>
  </footer>
  );
});
