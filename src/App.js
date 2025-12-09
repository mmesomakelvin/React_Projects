import React, { useRef } from 'react';
import { toPng, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import OnlineCourseLunch from './Onlinecourse_lunch';

export default function App() {
  const designRef = useRef(null);

  const exportAsPng = async () => {
    if (designRef.current) {
      const dataUrl = await toPng(designRef.current, {
        width: 1080,
        height: 1080,
        pixelRatio: 2
      });
      saveAs(dataUrl, 'edubridge-flier.png');
    }
  };

  const exportAsSvg = async () => {
    if (designRef.current) {
      const dataUrl = await toSvg(designRef.current, {
        width: 1080,
        height: 1080
      });
      saveAs(dataUrl, 'edubridge-flier.svg');
    }
  };

  return (
    <div style={{ background: '#111', minHeight: '100vh', padding: '20px' }}>
      {/* Export Buttons */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={exportAsPng}
          style={{
            padding: '12px 24px',
            background: '#5EB229',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Export as PNG
        </button>
        <button 
          onClick={exportAsSvg}
          style={{
            padding: '12px 24px',
            background: '#F2C94C',
            color: '#154B54',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Export as SVG
        </button>
      </div>

      {/* Design Canvas */}
      <div style={{ display: 'flex', justifyContent: 'center', transform: 'scale(0.6)', transformOrigin: 'top center' }}>
        <div ref={designRef}>
          <OnlineCourseLunch />
        </div>
      </div>
    </div>
  );
}