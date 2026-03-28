import React from 'react';
import { motion } from 'motion/react';

export const AboutView: React.FC = () => {
  return (
    <div className="view-section pt-24 pb-20 overflow-hidden">
      <section className="px-12 py-20 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-secondary font-label tracking-widest uppercase text-xs font-bold">About Potease / 关于我们</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-background">
            Precision <br/>
            <span className="text-secondary">Architected</span> for Life.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            为生活构建精准。自 2025 年起，浦泰斯 (Potease) 致力于将工业级的精密技术与人类生活的情感深度完美融合，打造卓越的供应链奇迹。
          </p>
          <div className="pt-8 flex gap-6 flex-wrap">
            <div className="bg-surface-container-low px-8 py-6 rounded-xl smile-curve hover:bg-surface-container-highest">
              <div className="text-4xl font-bold text-secondary">300+</div>
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">Global Clients / 全球客户</div>
            </div>
            <div className="bg-surface-container-low px-8 py-6 rounded-xl smile-curve hover:bg-surface-container-highest">
              <div className="text-4xl font-bold text-secondary">200+</div>
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">Strategic Partners / 战略伙伴</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYyHb80TII-irEeIrCbrgb0c9MNIvLMqy5Iug4qlOZnuDu5WsguQnnGnu6FnS9JexLKSncmhC6md5p77EtABhXSClDNXOov2m3nOVDytRX0k2-CrANZpxCE8QbxbNYEawYtKzylWX8EeDkxQEnuFdGszS7JlqbQMwLzaVU2VqgT6_bCxH8qP7_NeevLs_hfrCdJX1oCSOKUTMgoT_4fUbt2qe7fJLHCDvBxte3v4u_P9Kstto-xSqtg2w3quiVGf7NMRuaATa6eKpD" alt="Architecture"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs border border-outline-variant/15 hidden md:block">
            <p className="font-headline font-bold text-lg mb-2 italic">"Technology is the skeleton, but human experience is the soul."</p>
            <p className="text-sm text-on-surface-variant">— JingYu Wang, Founder</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">我们的理念 / Philosophy</h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">architecture</span>
              <h3 className="text-xl font-bold mb-4">Industrial Power<br/><span className="text-sm font-normal text-on-surface-variant">工业力量</span></h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">以严苛的工业标准定义每一个环节。我们的供应链不仅是物流的流转，更是精密工程的全球协作。</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">favorite</span>
              <h3 className="text-xl font-bold mb-4">Smart Living<br/><span className="text-sm font-normal text-on-surface-variant">智能生活</span></h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">技术不应是冰冷的。我们关注每一个零售触点的温度，让智能科技服务于真实的居家体验。</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">hub</span>
              <h3 className="text-xl font-bold mb-4">Global Precision<br/><span className="text-sm font-normal text-on-surface-variant">全球精准</span></h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">通过数字化架构实现全球资源的毫秒级匹配。浦泰斯，链接生产的源头与生活的尽头。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-32">
        <div className="max-w-[1400px] mx-auto bg-neutral-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
          <div className="lg:w-1/2 p-16 flex flex-col justify-center space-y-8">
            <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
              Let’s Build the <br/><span className="text-secondary-fixed-dim">Future of Precision</span> Together.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              联系我们，开启您的供应链升级之旅。无论您身在何处，浦泰斯的精准服务触手可及。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <span className="text-secondary-fixed-dim text-xs font-label uppercase tracking-widest block">Shanghai Office / 上海总部</span>
                <p className="text-white font-medium">Shanghai, China</p>
              </div>
              <div className="space-y-2">
                <span className="text-secondary-fixed-dim text-xs font-label uppercase tracking-widest block">Direct Reach / 直接联系</span>
                <p className="text-white font-medium">+86 13817925550</p>
              </div>
              <div className="space-y-2">
                <span className="text-secondary-fixed-dim text-xs font-label uppercase tracking-widest block">Email / 电子邮件</span>
                <a href="mailto:257870817@qq.com" className="text-white font-medium hover:text-secondary-fixed-dim transition-colors">257870817@qq.com</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2o05JWKWKlWZyfZqEHtdPUbGBbjHx1x1-yX5DD7k-YEIkRPmRk0SsLkh4RwFNd6ICHiFuJ-hbNxPK2EVPzwvoDWHVrwhT5xQh9r48-s-7p3c4FiGUeIMZgVkc-mvgT23pxjxWEjotejLKF2NCE3TNnEjQUWpLC7a7LHgi5pAyLryFWtegFqdVyQAinpBHKL1nA2gR5Kdx_3TyWx9Vh7r9UYOOlH7Jg-0HwcNAaPR5gaxJVt3O1fHHTGhonIxhOjjPZPojZQQCe653" alt="Factory"/>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
