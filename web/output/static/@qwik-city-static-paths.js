const staticPaths = new Set(["/@qwik-city-plan.mjs","/entry.ssr.js","/entry.ssr.mjs","/public/articles/0_Why_It_Matters.md","/public/articles/2_TLDR_Short_List.md","/public/articles/Secure-Messaging.md","/public/personal-security-checklist.yml","/q-DbcKc947.js"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };