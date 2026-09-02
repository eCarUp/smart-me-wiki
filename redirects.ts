/**
 * Weiterleitungen von den alten Google-Sites-URLs (dok.smart-me.com).
 * Alle übrigen Pfade wurden 1:1 als Slug übernommen und brauchen keinen Redirect.
 * Erzeugt von scripts/migration/convert.ts.
 */
export type Redirect = {from: string | string[]; to: string};

export const redirects: Redirect[] = [
  {from: '/home', to: '/'},
];
