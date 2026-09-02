import React from 'react';
import styles from './styles.module.css';

type VideoProps = {
  /** YouTube-Video-ID oder vollständige Embed-URL. */
  src: string;
  title?: string;
};

/**
 * Eingebettetes Video aus dem alten Wiki. Hält das 16:9-Verhältnis auch auf
 * schmalen Viewports und lädt den iframe erst beim Scrollen.
 */
export default function Video({src, title = 'Video'}: VideoProps): React.ReactElement {
  const url = src.startsWith('http') ? src : `https://www.youtube-nocookie.com/embed/${src}`;
  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
