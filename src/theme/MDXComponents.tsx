import MDXComponents from '@theme-original/MDXComponents';
import Ablauf from '@site/src/components/Ablauf';
import Embed from '@site/src/components/Embed';
import Menueweg from '@site/src/components/Menueweg';
import Video from '@site/src/components/Video';
import {Kachel, Kacheln} from '@site/src/components/Kacheln';
import NurFuer from '@site/src/components/NurFuer';

/**
 * Global in allen Markdown-Dateien verfügbare Komponenten – so brauchen die
 * migrierten Wiki-Seiten keine Import-Zeilen.
 */
export default {
  ...MDXComponents,
  Ablauf,
  Embed,
  Menueweg,
  Video,
  Kacheln,
  Kachel,
  NurFuer,
};
