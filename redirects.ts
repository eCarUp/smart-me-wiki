/**
 * Redirects von den alten Google-Sites-URLs (dok.smart-me.com) auf die neuen
 * Docusaurus-Pfade. Wird vom Migrationsskript gepflegt – siehe migration-report.md.
 */
export type Redirect = {from: string | string[]; to: string};

export const redirects: Redirect[] = [
  {from: '/home', to: '/'},
];
