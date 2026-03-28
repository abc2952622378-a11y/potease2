import React from 'react';
import { motion } from 'motion/react';

export const HomeView: React.FC<{ onNavigate: (view: any) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState('precision');

  return (
    <div className="view-section active">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 z-10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMg3HjrVtIip8k1v38unmGRJNCt2ul0iX9EjXyuPPKET0ov2-gcC8EXdg7r017c3DL4su8Ivk3krBLtrpIwza9X_lViSb0SWC6ZvttaoKpfAz1AbMczx7xA9dURyFFDpIh3rApNfxTZ504r1lSE5hw-3xEiOo1A6dj_dS2FviUlDRDKEok1VQPl7-yAriQ6c_8j9v0e783nUN-3w7mA1Txlv87HeJVl6gdf_kKtURsP_FHoR0CXj0x9Ft0UVS616z1Z1kEOHTtbh5"
            alt="Robotic arm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-12 md:px-24 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Founded in 2025 · 始于2025
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-on-background leading-[0.9] mb-8 drop-shadow-md"
          >
            Precision Engineering.<br/>
            <span className="text-secondary">Global Supply.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12"
          >
            Potease (浦泰斯) integrates high-end manufacturing with intelligent logistics. Delivering technical trust at a global scale.
            <span className="block text-sm mt-2 opacity-80 font-medium">浦泰斯整合高端制造与智能物流，在全球范围内传递技术信任。</span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 relative z-20"
          >
            <button 
              onClick={() => onNavigate('products')}
              className="inline-block bg-secondary text-on-secondary px-10 py-5 rounded-full text-lg font-bold smile-curve hover:scale-105 shadow-xl shadow-secondary/30"
            >
              Explore Products / 探索产品
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="inline-block bg-surface-container-lowest text-on-surface px-10 py-5 rounded-full text-lg font-bold smile-curve border border-outline-variant/20 hover:bg-surface-container-high transition-colors shadow-sm"
            >
              Partnership / 合作伙伴
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 inline-block bg-surface-container-lowest/80 backdrop-blur-lg p-6 rounded-2xl border border-outline-variant/20 shadow-2xl animate-float relative z-30 group cursor-pointer hover:bg-surface-container-lowest transition-colors"
          >
            <p className="font-headline font-bold text-xl mb-2 italic text-on-background group-hover:text-secondary transition-colors">"技术，让生活更美好"</p>
            <p className="text-sm text-on-surface-variant font-medium">— YiChen Wang, 联合创始人 (Co-founder)</p>
          </motion.div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 px-12 md:px-24 bg-surface relative z-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-label tracking-widest uppercase text-xs font-bold">Why Potease</span>
            <h2 className="text-4xl font-black tracking-tight text-on-background mt-2">我们的核心优势 / Core DNA</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'precision', label: '精密制造 Precision' },
              { id: 'smart', label: '智能物流 Smart Logistics' },
              { id: 'eco', label: '可持续生态 Eco-System' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all smile-curve ${
                  activeTab === tab.id 
                    ? 'bg-secondary text-on-secondary shadow-md' 
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/10 min-h-[400px]">
            {activeTab === 'precision' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-3xl font-bold font-headline">微米级工艺控制</h3>
                  <p className="text-on-surface-variant leading-relaxed">我们引入了全自动化的高精度数控机床与光学检测设备，确保每一件产品出厂公差控制在微米级别。从航空航天配件到重型工业机柜锁，品质始终如一。</p>
                  <ul className="space-y-2 mt-4 text-sm font-medium">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> ISO 9001:2015 质量体系认证</li>
                    <li className="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> 100% 出厂前自动化光学检测 (AOI)</li>
                    <li className="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-sm">check_circle</span> 原材料光谱分析追溯</li>
                  </ul>
                </div>
                <div className="md:w-1/2 rounded-2xl overflow-hidden h-64">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ28QDyO9jiYvz2NmjQt-FViPSAgGpl_vATpcKOKTmgf_3aUbAU_upB8lA3PrAV8-IxKQCe7ylGHbAD9uiALJmK9B7_11s-l3X8iGRH6IRV98FTx4Y6IAcsTUnPqEdDKoo6803YuEvOU2dxTbCnFO1EyZ0F1gYhPLt_3MZ0lI0guHusZmjL9pwRsLiQk0CZgZkua2PjtqskhQAFcuqQEPYFU-q8xTWnOomoc6g_qRtehTLIEJglKeQ3TejFLLWB0k_no2R711ye1fR" className="w-full h-full object-cover" alt="Precision"/>
                </div>
              </motion.div>
            )}
            {activeTab === 'smart' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-3xl font-bold font-headline">全链路数字化追踪</h3>
                  <p className="text-on-surface-variant leading-relaxed">打破传统供应链黑盒，依托自研的云端物流神经中枢，浦泰斯实现了从原材料入库到终端客户签收的全程可视化监控，让交付时间精确到小时。</p>
                  <ul className="space-y-2 mt-4 text-sm font-medium">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">timeline</span> API 直连 50+ 全球主流承运商</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">speed</span> AI 智能动态库存预测</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">verified_user</span> 零接触区块链数字防伪溯源</li>
                  </ul>
                </div>
                <div className="md:w-1/2 rounded-2xl overflow-hidden h-64 bg-neutral-900 flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-6xl text-secondary animate-pulse">satellite_alt</span>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                </div>
              </motion.div>
            )}
            {activeTab === 'eco' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-3xl font-bold font-headline">绿色制造与可持续发展</h3>
                  <p className="text-on-surface-variant leading-relaxed">我们坚信“技术让生活更美好”的前提是保护我们赖以生存的环境。通过优化合金配方与升级废气过滤系统，我们在保证性能的同时大幅降低了碳排放。</p>
                  <ul className="space-y-2 mt-4 text-sm font-medium">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">eco</span> 采用 100% 可回收环保包装材料</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">factory</span> 生产环节碳排放逐年降低 15%</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">energy_savings_leaf</span> 厂区太阳能覆盖率达到 40%</li>
                  </ul>
                </div>
                <div className="md:w-1/2 rounded-2xl overflow-hidden h-64 bg-green-900 flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-green-300 opacity-50">compost</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* Product Showcase Summary */}
      <section className="py-24 px-12 md:px-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black tracking-tight text-on-background mb-4">Technical Excellence / 卓越技术</h2>
              <p className="text-on-surface-variant text-lg">Our product range spans from precision robotics to high-efficiency industrial components, engineered for the future.</p>
            </div>
            <button 
              onClick={() => onNavigate('products')}
              className="text-secondary font-bold flex items-center gap-2 group"
            >
              View All Products <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, name: "P-Series Sensor", sub: "High-Precision Optical Matrix", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBELlYnTW9gucpALs_5mWqjytvfrUb0mqMRF759DFbOqntdn2yLdsqX8cWs3t4ZgRZFT06fEGBvtUr2j0O3h4DWvNziyjESLoZG1IdWt0cW5jo5EeHmRzD7q2Mm9P0RU9hbCLvqhNj46Sx2yhsAxHPOdllIYEglg544grKbmXBZ-Kl0_Rx8Or301mCFz0GwfdWrKMWLk0vTMgYLbZU7tqXV1KsBTKKlkuNTEH6S7TLpc6xm8wYBtLav-K5in0CNlqk9-sMGe_0O7a7Y", isNew: true },
              { id: 2, name: "Flux Flow Valve", sub: "Industrial Fluid Control", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrYsm1fa9z9WUoL0oN0hqz0HFdAxfW4ODIr824JmxJX1iE0yb6EToeqVfqDWJyhtU9YkFPk_JkSXKbYXmvgRONN6OgFb8x_eL1gHYplGLsQbRAz6RYjCCSpB_RI0AWhw6LeKWCVKmTMYcQ05rl0I2xneXBbqiVSB9Pnp5ElOcNWtJIY9TIu0EIsmhSY41PMNbQCGxHGdxJtxDiJUqo69Vn3fW9QMX0O6H6mXXZpP8NEUic9yLXhK0KDnpxNQTwMDNAfEZNhgGadMQu" },
              { id: 3, name: "Core Logic Unit", sub: "Embedded Intelligence", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsw3LIm0GPL9fS6QldvVm3K8hWR8gJ295cjXX5zqRf1pqDpLde9jjvmrEty8ajxIEmWSKRgTuI-wuSXNloswZkUC0MtI1qkicDxyJdTbaH_wASAh-M6khpRKBesOAzgj23yfaui2eIWhSbH_4gQZ7bTbMVMA64qCxgJuzS33is4I9CJr9BOgK16a--qlj6Gh8ccwT-Wsuziis5503kpbyhPhk-rsr1kEocy_shURjYDg84KMj_yCah7Wz-0pD8NDpJ-XTf5tlFK1Pq" },
              { id: 4, name: "Omni Gripper", sub: "End-of-Arm Tooling", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtYXS3UWfc0RcTqpnBqOLhaXdD_YkcqUSZQ1aC188vbM2LKc1pm28IOMU47DbmfxSirm8luO3GoGO7ZyB9rSXQxRK2iHX1XK4QQl1uYc4LuL1bPG6Hc9338Bb7ytmkQFJzn8u04Y_eQ_aj0uUp2MWlAnESE-StyTkqJEKobW2bOuKRX_xP2irHpmT-x64b_TxjRCsoJyIRCkBqEVzSlQTiZj0DogO19uhrju2Gy3jBfJH1YhwwR5d_j_D4hl3jvo6F6QUfBLOod07A" }
            ].map(product => (
              <div 
                key={product.id}
                onClick={() => onNavigate('products')}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 smile-curve cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={product.img} alt={product.name}/>
                  {product.isNew && <div className="absolute top-4 right-4 bg-secondary text-on-secondary text-[10px] px-2 py-1 rounded-full font-bold">NEW</div>}
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-1">{product.name}</h4>
                  <p className="text-on-surface-variant text-sm mb-4">{product.sub}</p>
                  <span className="text-secondary text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">Details <span className="material-symbols-outlined text-sm">arrow_right_alt</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
