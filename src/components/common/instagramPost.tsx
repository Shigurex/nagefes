'use client';
import { useEffect } from 'react';

export const InstagramPost = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/DAN_BBEvLkh/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow:
            '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '226px',
          padding: 0,
          width: '100%',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a
            href="https://www.instagram.com/p/DAN_BBEvLkh/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            【なげるフェスティバル】大会公式アカウント(@nageru_festival)がシェアした投稿
          </a>
        </div>
      </blockquote>
    </div>
  );
};