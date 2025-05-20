import React from 'react';

function Home() {
  return (
    <div>
      <div>
      <p>


Welcome to The Elecronic Store 
We specialize in buying used and new phones and laptops at competitive prices. <br />
 Whether you're upgrading your device or simply looking to sell, we make the process quick, secure, and hassle-free. <br />

        Buy the Best Quality Today !  You Can Contact us 
      </p>
        <br />
      </div>


      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe 
          // src="https://www.youtube.com/embed/JSKpbNNla_M"
src="https://www.youtube.com/embed/QCgOjXYRW7o"

          

          title="YouTube video"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default Home;

