export default function OnlineCourseLunch() {
  return (
    <div 
      style={{ 
        width: '1080px', 
        height: '1500px',
        fontFamily: 'Montserrat, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Base background */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#154B54' }} />
      
      {/* Radial gradient overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 35%, rgba(1, 105, 56, 0.35) 0%, transparent 60%)'
        }}
      />
      
      {/* Diagonal dark band */}
      <div 
        style={{
          position: 'absolute',
          width: '1400px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(1, 105, 56, 0.2) 0%, rgba(0,0,0,0.3) 100%)',
          transform: 'rotate(-12deg)',
          top: '420px',
          left: '-100px'
        }}
      />
      
      {/* Glow effects */}
      <div 
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(94, 178, 41, 0.08) 0%, transparent 70%)',
          top: '-150px',
          right: '-100px',
          filter: 'blur(40px)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242, 201, 76, 0.1) 0%, transparent 70%)',
          bottom: '250px',
          left: '-100px',
          filter: 'blur(30px)'
        }}
      />
      
      {/* Dot pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '50px 60px'
      }}>
        
        {/* TOP: Logo + Pill */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Presents text */}
          <p style={{ 
            fontSize: '16px', 
            fontWeight: 600, 
            color: '#C3E2E5', 
            letterSpacing: '0.15em',
            marginBottom: '8px',
            textTransform: 'uppercase'
          }}>
            EduBridge Academy Presents
          </p>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <svg width="44" height="36" viewBox="0 0 40 32" fill="none">
              <path d="M4 28 L20 8 L36 28" stroke="#5EB229" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M10 28 L20 14 L30 28" stroke="#016938" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="20" cy="6" r="4" fill="#5EB229" />
            </svg>
            <div>
              <span style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', display: 'block' }}>
                EliteBridge Learning
              </span>
            </div>
          </div>
          
          {/* Pill */}
          <div 
            style={{
              padding: '14px 32px',
              borderRadius: '40px',
              backgroundColor: 'rgba(1, 105, 56, 0.4)',
              border: '1px solid rgba(94, 178, 41, 0.3)',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.05em' }}>
              E-Learning Platform Beta
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div style={{ textAlign: 'center', marginTop: '35px' }}>
          <h1 style={{ 
            fontSize: '56px', 
            fontWeight: 800, 
            color: '#5EB229',
            lineHeight: 1.1,
            letterSpacing: '0.01em',
            textShadow: '0 2px 20px rgba(94, 178, 41, 0.3)',
            margin: 0
          }}>
            Financial Instruments
          </h1>
          <p style={{ 
            fontSize: '26px', 
            fontWeight: 500, 
            color: '#FFFFFF',
            marginTop: '10px',
            opacity: 0.9
          }}>
            is the first course on our new e-learning platform
          </p>
        </div>

        {/* CENTRAL 3D SHAPES */}
        <div style={{ 
          position: 'relative', 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: '20px'
        }}>
          
          {/* Back ring - Green */}
          <div 
            style={{
              position: 'absolute',
              width: '520px',
              height: '320px',
              borderRadius: '50%',
              background: 'linear-gradient(120deg, #5EB229 0%, #016938 100%)',
              transform: 'rotate(-15deg)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.35), inset 0 5px 20px rgba(255,255,255,0.1)',
              left: '60px',
              top: '80px'
            }}
          />
          
          {/* Middle ring - Dark Green */}
          <div 
            style={{
              position: 'absolute',
              width: '480px',
              height: '300px',
              borderRadius: '50%',
              background: 'linear-gradient(120deg, #016938 0%, #154B54 100%)',
              transform: 'rotate(-15deg)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.3), inset 0 4px 15px rgba(255,255,255,0.08)',
              left: '100px',
              top: '120px'
            }}
          />
          
          {/* Front disc - Gold with Naira */}
          <div 
            style={{
              position: 'absolute',
              width: '360px',
              height: '260px',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom, #F2C94C 0%, #D4A832 100%)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4), inset 0 -5px 20px rgba(0,0,0,0.2)',
              right: '100px',
              top: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
                backgroundSize: '10px 10px'
              }}
            />
            <span style={{ 
              fontSize: '120px', 
              fontWeight: 900, 
              color: '#016938',
              position: 'relative',
              zIndex: 1,
              textShadow: '2px 2px 0 rgba(255,255,255,0.3)'
            }}>
              ₦
            </span>
          </div>

          {/* BIG TEXT */}
          <div 
            style={{
              position: 'absolute',
              textAlign: 'center',
              transform: 'rotate(-5deg)',
              zIndex: 10,
              width: '100%',
              top: '50%',
              left: '0',
              marginTop: '-70px'
            }}
          >
            <h2 style={{ 
              fontSize: '150px', 
              fontWeight: 900, 
              color: '#FFFFFF',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textShadow: '0 8px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)',
              margin: 0
            }}>
              FREE
            </h2>
            <h2 style={{ 
              fontSize: '150px', 
              fontWeight: 900, 
              color: '#FFFFFF',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textShadow: '0 8px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)',
              margin: 0
            }}>
              ACCESS
            </h2>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div style={{ textAlign: 'center', paddingBottom: '80px' }}>
          <p style={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
            We're launching our e-learning platform — come help us test it for free.
          </p>
          <p style={{ fontSize: '20px', fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
            Get <span style={{ color: '#5EB229', fontWeight: 700 }}>free access</span> to the <span style={{ color: '#F2C94C', fontWeight: 700 }}>'Financial Instruments'</span> course and <span style={{ color: '#5EB229', fontWeight: 700 }}>earn a certificate</span> when you complete it.
          </p>
          <p style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginTop: '12px' }}>
            Perfect for beginners and professionals looking to break into or grow in finance.
          </p>
          
          {/* URL */}
          <div style={{ marginTop: '30px' }}>
            <span style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', display: 'block', marginBottom: '12px' }}>
              Register here:
            </span>
            <div 
              style={{
                padding: '18px 40px',
                backgroundColor: '#5EB229',
                borderRadius: '35px',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(94, 178, 41, 0.4)'
              }}
            >
              <span style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF' }}>
                bit.ly/financeinst
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}