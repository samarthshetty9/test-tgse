import React from 'react';

const statItems = [
  { label: 'Students Enrolled', value: '10,000+' },
  { label: 'Years of Excellence', value: '30+' },
  { label: 'Qualified Teachers', value: '50+' },
  { label: 'Pass Rate', value: '100%' },
];

const Stats = () => (
  // Container: Floats up (-mt-12) to bridge the Hero and Features
  <div className="relative z-20 container mx-auto px-4 -mt-12 mb-12">

    {/* DESIGN CHANGE: 
       Instead of a grid of 4 distinct cards, we use ONE wide container.
       - bg-[#5D1528]: Deep Maroon background
       - rounded-3xl: Smooth corners (not boxy)
       - shadow-2xl: Heavy shadow to make it 'pop' off the screen
    */}
    <div className="bg-[#5D1528] rounded-3xl shadow-[0_20px_50px_rgba(93,21,40,0.3)] p-6 md:p-10 border border-[#F3D03E]/30">

      {/* Inner Layout: 
         - Uses 'divide' classes to create the lines between items automatically.
         - On Mobile: Horizontal lines (divide-y)
         - On Desktop: Vertical lines (divide-x)
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#F3D03E]/20">

        {statItems.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-center px-4 group">

            {/* The Number: Huge Gold Text */}
            <span className="text-4xl md:text-5xl font-serif font-bold text-[#F3D03E] mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </span>

            {/* The Label: Clean White Text */}
            <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
              {stat.label}
            </span>

          </div>
        ))}

      </div>
    </div>
  </div>
);

export default Stats;