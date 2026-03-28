import React from 'react';
import { motion } from 'motion/react';

export const SupplyChainView: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const steps = [
    { id: 1, label: '智能采购', title: '1. AI预测与智能采购', icon: 'model_training', desc: '我们通过机器学习算法分析历史订单与市场趋势，提前进行原材料储备。对于稀缺金属或定制化组件，系统会自动触发供应商竞价与质量评估模型，确保源头材料的稳定性与成本最优。' },
    { id: 2, label: '精密制造', title: '2. 数字化精密制造', icon: 'precision_manufacturing', desc: '订单下达后，数据直连车间 MES (制造执行系统)。每一台数控机床的操作参数、加工时长及质检数据都会实时同步至云端。客户可随时通过专属门户查看产品处于“压铸”、“抛光”还是“装配”阶段。' },
    { id: 3, label: '仓储调拨', title: '3. 自动化立体仓储调拨', icon: 'inventory', desc: '成品进入 VNA (窄巷道) 自动化立体仓库，由 AGV 机器人完成上架与拣选。系统根据客户所在地及紧急程度，智能计算是从上海总仓直发，还是从法兰克福/洛杉矶前置仓就近调拨。' },
    { id: 4, label: '全球交付', title: '4. 最后一公里全球交付', icon: 'local_shipping', desc: '与 DHL、FedEx 及马士基等顶级承运商 API 深度集成。系统自动处理报关清关文件，并提供微信/邮件多渠道的实时物流节点推送，直到货物安全抵达您的工厂或仓库。' },
  ];

  return (
    <div className="view-section pt-24 pb-20">
      <header className="px-12 py-16 max-w-[1920px] mx-auto text-center bg-surface">
        <span className="text-secondary font-label tracking-widest uppercase text-xs font-bold block mb-4">Seamless Integration</span>
        <h1 className="text-5xl lg:text-7xl font-extrabold font-headline tracking-tighter text-on-background mb-6">
          Supply Chain <br/><span className="text-secondary opacity-80 text-4xl mt-2 block">Orchestration / 全链路调度</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          浦泰斯提供从精密制造到全球终端交付的一站式供应链调度服务。通过数字化系统，消除物理距离带来的不确定性。
        </p>
      </header>

      <section className="py-16 px-12 md:px-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">End-to-End Process / 供应链工作流</h2>
            <p className="text-on-surface-variant mt-2">点击下方步骤查看我们如何保障交付</p>
          </div>
          
          <div className="flex justify-between items-center relative mb-12 max-w-4xl mx-auto">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-container-highest z-0"></div>
            
            {steps.map(step => (
              <button 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className="relative z-10 flex flex-col items-center gap-3 group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-110 shadow-lg ring-4 ring-surface-container-low ${
                  activeStep === step.id ? 'bg-secondary text-on-secondary' : 'bg-surface-container-highest text-on-surface-variant'
                }`}>
                  {step.id}
                </div>
                <span className={`text-sm ${activeStep === step.id ? 'font-bold text-on-background' : 'font-medium text-on-surface-variant group-hover:text-on-background'}`}>
                  {step.label}
                </span>
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-sm border border-outline-variant/10">
            {steps.map(step => activeStep === step.id && (
              <motion.div key={step.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="interactive-content active">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">{step.icon}</span> 
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">{step.desc}</p>
                {step.id === 1 && (
                  <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 p-4 rounded-xl inline-flex">
                    <span><span className="text-on-surface-variant font-normal">平均采购周期缩短</span> 30%</span>
                    <span className="border-l border-secondary/30 pl-4"><span className="text-on-surface-variant font-normal">原材料合格率</span> &gt;99.8%</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-12 md:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: 'corporate_fare', target: '300', label: 'Enterprise Clients', zh: '全球企业客户', suffix: '+' },
            { icon: 'handshake', target: '200', label: 'Supply Partners', zh: '供应链合作伙伴', suffix: '+' },
            { icon: 'speed', target: '99', label: 'On-time Delivery', zh: '准时交付率', suffix: '%' },
            { icon: 'public', target: '50', label: 'Countries Covered', zh: '业务覆盖国家', suffix: '+' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:shadow-lg transition-all">
              <div className="material-symbols-outlined text-4xl text-secondary mb-4">{stat.icon}</div>
              <div className="text-5xl font-black text-on-surface mb-2 tracking-tighter">{stat.target}</div>
              <div className="text-secondary font-bold text-xl">{stat.suffix}</div>
              <p className="text-sm text-on-surface-variant mt-2 uppercase tracking-widest font-bold">{stat.label}<br/><span className="font-normal opacity-70">{stat.zh}</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
