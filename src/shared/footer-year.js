/** Fill the footer copyright year (element #y) with the current year. */
export function setFooterYear(id = 'y') {
  const el = document.getElementById(id);
  if (el) el.textContent = String(new Date().getFullYear());
}
