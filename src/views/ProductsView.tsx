import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS_DATA, TAOBAO_LINK } from '../constants';
import { Product } from '../types';

export const ProductsView: React.FC = () => {
  const [currentCategory, setCurrentCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [materialFilter, setMaterialFilter] = React.useState('');

  const categories = [
    { id: 'All', label: '全部产品 All Products' },
    { id: '机柜锁具', label: '机柜锁具 Cabinet Locks' },
    { id: '工业铰链', label: '工业铰链 Industrial Hinges' },
    { id: '精密拉手', label: '精密拉手 Precision Handles' },
    { id: '电子转舌锁', label: '电子转舌锁 Cam Locks' },
    { id: '密封配件', label: '密封配件 Sealing Solutions' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter(p => {
    const matchCategory = currentCategory === 'All' || p.category === currentCategory;
    const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchMaterial = !materialFilter || p.material === materialFilter;
    return matchCategory && matchSearch && matchMaterial;
  });

  return (
    <div className="view-section pt-24 pb-20">
      <header className="px-12 py-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-on-background">
              产品中心 <span className="text-secondary opacity-80 block text-2xl font-medium tracking-normal mt-2">Product Center</span>
            </h1>
            <p className="mt-4 text-on-surface-variant max-w-xl">
              始于2025年，浦泰斯致力于为全球300多家行业领军企业提供精密工程与供应链协同方案。
              <br/><span className="text-xs uppercase tracking-widest font-semibold mt-2 block">Precision Engineering Since 2025 | 300+ Global Partners</span>
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">inventory_2</span>
              <div>
                <div className="text-xs text-on-surface-variant">总产品数</div>
                <div className="font-bold">1,200+ SKU</div>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <div>
                <div className="text-xs text-on-surface-variant">质量认证</div>
                <div className="font-bold">ISO 9001:2015</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-12 pb-24 max-w-[1920px] mx-auto grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-outline mb-4">分类目录 CATEGORIES</h3>
            <ul className="space-y-1">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button 
                    onClick={() => setCurrentCategory(cat.id)}
                    className={`w-full flex justify-between items-center py-3 px-4 rounded-lg transition-all smile-easing ${
                      currentCategory === cat.id 
                        ? 'bg-surface-container-highest text-secondary font-semibold' 
                        : 'hover:bg-surface-container-low text-on-surface-variant'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary to-secondary-dim text-on-secondary">
            <h4 className="font-bold text-lg mb-2">大宗采购?</h4>
            <p className="text-xs opacity-90 leading-relaxed mb-4">针对B2B客户提供专属批发价及快速物流通道。</p>
            <a href="#about" className="block text-center w-full py-2 bg-on-secondary text-secondary rounded-full font-bold text-xs hover:scale-105 smile-easing transition-all">立即询价 Inquiry Now</a>
          </div>
        </aside>

        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="mb-8 flex flex-wrap gap-4 items-center justify-between bg-surface-container-low p-4 rounded-2xl">
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold text-on-surface-variant">筛选 Filtered by:</span>
              <div className="flex gap-2">
                {materialFilter && (
                  <span className="bg-surface-container-lowest px-3 py-1 rounded-full text-xs border border-outline-variant/20 flex items-center gap-2 transition-all">
                    材质: {materialFilter} 
                    <span onClick={() => setMaterialFilter('')} className="material-symbols-outlined text-xs cursor-pointer hover:text-error transition-colors">close</span>
                  </span>
                )}
                {!materialFilter && <span className="text-xs text-outline italic">无 None</span>}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={materialFilter}
                onChange={(e) => setMaterialFilter(e.target.value)}
                className="bg-surface-container-highest border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-secondary/20 text-on-surface-variant cursor-pointer outline-none"
              >
                <option value="">材质 Material</option>
                <option value="锌合金">锌合金 Zinc Alloy</option>
                <option value="不锈钢">不锈钢 Stainless Steel</option>
                <option value="铝合金">铝合金 Aluminum</option>
                <option value="复合材料">复合材料 Composite</option>
              </select>
              <div className="relative">
                <input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-surface-container-highest border-none rounded-full px-6 py-2 text-sm focus:ring-2 focus:ring-secondary/20 w-64 outline-none" 
                  placeholder="搜索型号 Search Model..." 
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full py-16 text-center text-on-surface-variant">
                <span className="material-symbols-outlined text-6xl opacity-50 mb-4 block">search_off</span>
                <p className="text-lg font-bold">未找到符合条件的产品</p>
                <p className="text-sm opacity-80 mt-2">请尝试更改搜索词或清除筛选条件。</p>
              </div>
            ) : (
              filteredProducts.map(product => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden bg-surface-container-high">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={product.img} alt={product.name}/>
                    {product.featured && <div className="absolute top-4 left-4"><span className="bg-secondary text-on-secondary text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">FEATURED</span></div>}
                    {product.isNew && <div className="absolute top-4 right-4 bg-error text-on-error text-[10px] px-2 py-1 rounded-full font-bold">NEW</div>}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-headline font-bold text-lg text-on-background">{product.name}</h3>
                        <span className="text-xs text-on-surface-variant font-mono">MODEL: {product.model}</span>
                      </div>
                      <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary cursor-pointer transition-colors">favorite</span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">{product.desc}</p>
                    <div className="mt-auto pt-6 border-t border-surface-container">
                      <div className="grid grid-cols-2 gap-4">
                        <div><span className="text-[10px] text-outline block uppercase font-bold tracking-tighter">零售价 Retail</span><span className="text-lg font-bold text-on-background">¥{product.retail} <span className="text-xs font-normal">{product.unit}</span></span></div>
                        <div><span className="text-[10px] text-secondary block uppercase font-bold tracking-tighter">批发价 Wholesale</span><span className="text-lg font-black text-secondary">¥{product.wholesale} <span className="text-xs font-normal">{product.wholesaleQty}</span></span></div>
                      </div>
                      <a href={TAOBAO_LINK} target="_blank" rel="noreferrer" className="w-full mt-4 bg-surface-container-high hover:bg-secondary hover:text-on-secondary py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">shopping_cart_checkout</span>前往淘宝购买 Buy Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
