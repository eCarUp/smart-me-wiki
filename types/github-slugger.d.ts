/**
 * github-slugger bringt keine Typdeklaration mit. Deklariert wird nur, was die
 * Migration braucht – es ist dieselbe Bibliothek, die auch Docusaurus für seine
 * Überschriften-Anker verwendet.
 */
declare module 'github-slugger' {
  export default class GithubSlugger {
    slug(value: string, maintainCase?: boolean): string;
    reset(): void;
  }
}
