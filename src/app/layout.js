import { Playfair_Display, Lato } from 'next/font/google';

// 1. Configure the fonts
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair', // Defines the CSS variable name
  display: 'swap',
});

const lato = Lato({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-lato',     // Defines the CSS variable name
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Your Existing Variables */}
        <style>{`
          :root {
            /* Your Maroon Variables */
            --maroon: 345, 59%, 28%;
            --maroon-dark: 345, 65%, 20%;
          }
          
          /* Ensures the fonts work globally */
          body {
            font-family: var(--font-lato), sans-serif;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-playfair), serif;
          }

          .bg-gradient-hero {
            background: linear-gradient(135deg, hsl(var(--maroon)), hsl(var(--maroon-dark)));
            color: white;
          }
        `}</style>

        {/* Tailwind Configuration */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    // 2. Register the fonts in Tailwind
                    fontFamily: {
                      serif: ['var(--font-playfair)', 'serif'],
                      sans: ['var(--font-lato)', 'sans-serif'],
                    },
                    colors: {
                      brand: {
                        maroon: 'hsl(var(--maroon))',
                        gold: 'hsl(var(--gold))',
                        cream: '#FDFBF7',
                      }
                    }
                  }
                }
              }
            `
          }} 
        />
      </head>
      
      {/* 3. Inject font variables into the body */}
      <body className={`antialiased ${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}