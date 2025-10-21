export default function Logo() {
    return(
     <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <svg className="w-32 sm:w-40 h-auto cursor-pointer" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="logo-icon">
            <circle cx="40" cy="40" r="32" fill="url(#glowGradient)" opacity="0.3"/>
            <circle cx="40" cy="40" r="28" fill="url(#bgGradient)"/>
            
            <path d="M 40 25 L 52 37 L 48 37 L 40 29 Z" fill="white" opacity="0.9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0 0"
                to="2 2"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </path>
            
            <path d="M 35 35 L 50 50 L 46 50 L 35 39 Z" fill="white">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0 0"
                to="3 3"
                dur="1.5s"
                begin="0.2s"
                repeatCount="indefinite"
              />
            </path>
            
            <path d="M 30 45 L 48 63 L 44 63 L 30 49 Z" fill="url(#arrowGradient)" opacity="0.8">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0 0"
                to="4 4"
                dur="1.5s"
                begin="0.4s"
                repeatCount="indefinite"
              />
            </path>

            <circle cx="48" cy="32" r="4" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
            <circle cx="32" cy="48" r="4" fill="none" stroke="#0ea5e9" strokeWidth="2" opacity="0.7"/>
            <line x1="46" y1="34" x2="34" y2="46" stroke="url(#linkGradient)" strokeWidth="2" opacity="0.6"/>
          </g>
          
          <g id="logo-text">
            <text x="85" y="48" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="800" fill="white" letterSpacing="-0.5">
              Swift
            </text>
            
            <text x="165" y="48" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="800" fill="url(#textGradient)" letterSpacing="-0.5">
              Chain
            </text>
            
            <text x="85" y="62" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="500" fill="#0ea5e9" letterSpacing="1" opacity="0.8">
              SEND • SWAP • SECURE
            </text>
          </g>
          
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#0ea5e9", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#0284c7", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#38bdf8", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#0ea5e9", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#ffffff", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#0ea5e9", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:"#0ea5e9", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#38bdf8", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#ffffff", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#0ea5e9", stopOpacity:1}} />
            </linearGradient>
          </defs>
        </svg>
      </div>)
}