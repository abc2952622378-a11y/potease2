import React from 'react';
import { motion } from 'motion/react';

export const GlobalLayoutView: React.FC = () => {
  const [activeRegion, setActiveRegion] = React.useState('shanghai');

  const regions = [
    { id: 'shanghai', label: 'Shanghai, China', sub: 'Global Headquarters', items: [
      { icon: 'engineering', title: '核心工程研发中心', desc: '负责新产品开发、开模与核心技术攻关。超 20,000 平米高精度制造车间。' },
      { icon: 'warehouse', title: '亚太区总仓', desc: '日均吞吐量 15,000+ SKU，辐射整个亚洲与大洋洲地区。' }
    ]},
    { id: 'europe', label: 'Frankfurt, Germany', sub: 'European Logistics Hub', items: [
      { icon: 'flight_land', title: '欧洲极速达空运枢纽', desc: '依托法兰克福机场，保障欧洲核心工业国（德、法、意等） 72小时交付。' },
      { icon: 'support_agent', title: '本地化技术支持', desc: '配备多语种工程师团队，提供现场安装指导与售后响应。' }
    ]},
    { id: 'na', label: 'Los Angeles, USA', sub: 'North America Distribution', items: [
      { icon: 'directions_boat', title: '北美海运前置仓', desc: '承接跨太平洋海运大宗货物，有效降低美洲客户的采购物流成本。' },
      { icon: 'inventory_2', title: '标准件常备库存', desc: '备有最畅销的机柜锁与铰链现货，支持美国境内即日发货。' }
    ]}
  ];

  return (
    <div className="view-section pt-24 pb-20">
      <header className="px-12 py-16 max-w-[1920px] mx-auto text-center">
        <span className="text-secondary font-label tracking-widest uppercase text-xs font-bold mb-4 block">Our Global Footprint</span>
        <h1 className="text-5xl lg:text-7xl font-extrabold font-headline tracking-tighter text-on-background mb-6">
          Borderless <span className="text-outline">Precision.</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">点击下方地图节点，查看浦泰斯在全球不同区域的服务能力与仓储布局。</p>
      </header>

      <section className="pb-24 px-12 md:px-24 relative">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-stretch gap-12">
          <div className="w-full lg:w-1/3 bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-xl flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-error animate-ping"></span>
              <span className="font-bold text-sm tracking-widest text-on-surface uppercase">Live Operations Data</span>
            </div>
            
            {regions.map(region => region.id === activeRegion && (
              <motion.div key={region.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex-grow">
                <h2 className="text-3xl font-black tracking-tight text-on-background mb-2">{region.label}</h2>
                <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold mb-6">{region.sub}</span>
                
                <ul className="space-y-6">
                  {region.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary bg-surface-container-low p-2 rounded-lg">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="w-full lg:w-2/3 min-h-[500px] bg-neutral-900 rounded-3xl overflow-hidden relative shadow-inner flex items-center justify-center border border-neutral-800">
            <img className="w-full h-auto object-contain opacity-40 mix-blend-screen px-8" src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map"/>
            
            <button onClick={() => setActiveRegion('shanghai')} className={`absolute top-[40%] left-[80%] group flex flex-col items-center transition-all ${activeRegion === 'shanghai' ? 'scale-125' : 'opacity-70'}`}>
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-secondary opacity-40 animate-ping-slow"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary ring-4 ring-neutral-900"></span>
              </div>
              <span className="text-white text-xs font-bold mt-2 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Shanghai</span>
            </button>

            <button onClick={() => setActiveRegion('europe')} className={`absolute top-[30%] left-[52%] group flex flex-col items-center transition-all ${activeRegion === 'europe' ? 'scale-125' : 'opacity-70'}`}>
              <div className="relative flex items-center justify-center">
                <span className={`absolute inline-flex h-8 w-8 rounded-full bg-secondary opacity-20 ${activeRegion === 'europe' ? 'animate-ping-slow' : ''}`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ring-4 ring-neutral-900 ${activeRegion === 'europe' ? 'bg-secondary' : 'bg-surface-variant'}`}></span>
              </div>
              <span className="text-white text-xs font-bold mt-2 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Frankfurt</span>
            </button>

            <button onClick={() => setActiveRegion('na')} className={`absolute top-[35%] left-[18%] group flex flex-col items-center transition-all ${activeRegion === 'na' ? 'scale-125' : 'opacity-70'}`}>
              <div className="relative flex items-center justify-center">
                <span className={`absolute inline-flex h-8 w-8 rounded-full bg-secondary opacity-20 ${activeRegion === 'na' ? 'animate-ping-slow' : ''}`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ring-4 ring-neutral-900 ${activeRegion === 'na' ? 'bg-secondary' : 'bg-surface-variant'}`}></span>
              </div>
              <span className="text-white text-xs font-bold mt-2 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Los Angeles</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
