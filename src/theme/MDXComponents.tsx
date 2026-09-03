import MDXComponents from '@theme-original/MDXComponents';
import Embed from '@site/src/components/Embed';
import Video from '@site/src/components/Video';

/**
 * Global in allen Markdown-Dateien verfügbare Komponenten – so brauchen die
 * migrierten Wiki-Seiten keine Import-Zeilen.
 */
export default {
  ...MDXComponents,
  Embed,
  Video,
};
