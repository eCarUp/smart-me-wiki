import MDXComponents from '@theme-original/MDXComponents';
import Embed from '@site/src/components/Embed';
import Video from '@site/src/components/Video';
import {Kachel, Kacheln} from '@site/src/components/Kacheln';

/**
 * Global in allen Markdown-Dateien verfügbare Komponenten – so brauchen die
 * migrierten Wiki-Seiten keine Import-Zeilen.
 */
export default {
  ...MDXComponents,
  Embed,
  Video,
  Kacheln,
  Kachel,
};
