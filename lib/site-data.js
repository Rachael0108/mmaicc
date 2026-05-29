export const navItems = [
  { label: "首页", href: "/" },
  {
    label: "产品解决方案",
    href: "/product",
    children: [
      {
        label: "智能随访系统",
        href: "/product",
      },
      {
        label: "门诊智能语音机器人",
        href: "/product/clinic-robot",
      },
      { label: "患者运营方案", href: "/product/patient-ops" },
      { label: "慢病管理方案", href: "/product/chronic-disease" },
      { label: "体检中心管理方案", href: "/product/health-checkup" },
      { label: "AI病历质控", href: "/product/medical-record-qa" },
    ],
  },
  // { label: "AI 智能应用", href: "/ai" },
  { label: "客户案例", href: "/user" },
  { label: "新闻资讯", href: "/news" },
  { label: "关于我们", href: "/aboutUs" },
  { label: "预约演示", href: "/appointment" },
];

export const stats = [
  { value: "800万+", label: "累计服务患者" },
  { value: "100+", label: "覆盖医疗机构" },
  { value: "10倍", label: "随访效率提升" },
  { value: "95%", label: "患者满意度" },
];

export const solutions = [
  {
    title: "MiCare 院后智慧健康管理平台",
    text: "围绕院后随访、健康宣教、风险预警、复诊提醒和患者服务闭环，帮助医院把康复管理做得更连续。",
    image: "/mmaicc/assets/img/pro/one/2_07.png",
  },
  {
    title: "AI 电话随访机器人",
    text: "将标准化随访问卷、语音交互和结果结构化结合，提升护士团队触达效率，沉淀可追踪的患者数据。",
    image: "/mmaicc/assets/img/ai/fl4/phone-ai.png",
  },
  {
    title: "AI 预问诊系统",
    text: "面向门诊场景采集症状、病史和就诊诉求，为医生提供清晰的问诊前信息摘要。",
    image: "/mmaicc/assets/img/ai/fl4/question.png",
  },
  {
    title: "慢病管理系统",
    text: "支持指标监测、分层干预、复诊提醒和长期健康档案，适配多病种慢病管理路径。",
    image: "/mmaicc/assets/img/ai/fl4/manage.png",
  },
];

export const advantages = [
  "医疗业务场景深度适配",
  "多渠道患者触达",
  "随访质控与数据留痕",
  "病种路径灵活配置",
  "AI 语音交互与文本结构化",
  "数据看板辅助运营决策",
];

export const honors = [
  {
    icon: "leader",
    title: "姑苏创新创业领军人才",
    desc: "苏州市科技局认定",
  },
  {
    icon: "leader",
    title: "高新区科技创新创业领军人才",
    desc: "苏州高新区认定",
  },
  {
    icon: "enterprise",
    title: "江苏省民营科技企业",
    desc: "江苏省科技厅认定",
  },
  {
    icon: "medal",
    title: "中国（上海）国际发明创新展览会铜奖",
    desc: "发明创新奖",
  },
  {
    icon: "patent",
    title: "30+ 发明及软著",
    desc: "自主知识产权",
  },
  {
    icon: "quality",
    title: "质量管理体系认证证书",
    desc: "ISO 9001:2015",
  },
  {
    icon: "security",
    title: "信息安全管理体系认证证书",
    desc: "ISO/IEC 27001",
  },
];

export const partnerHospitals = [
  {
    category: "公立三甲",
    items: [
      { name: "复旦大学附属浦东医院", logo: "/mmaicc/assets/logos/logo1.png" },
      { name: "复旦大学附属中山医院", logo: "/mmaicc/assets/logos/logo-08.png" },
      { name: "复旦大学附属肿瘤医院", logo: "/mmaicc/assets/logos/logo-03.png" },
      { name: "复旦大学附属妇产科医院", logo: null },
      { name: "同济大学附属第一妇婴保健院", logo: "/mmaicc/assets/logos/logo6.png" },
      {
        name: "海军军医大学第一附属医院（上海长海医院）",
        logo: "/mmaicc/assets/logos/logo-04.png",
      },
    ],
  },
  {
    category: "综合医院",
    items: [
      { name: "江苏省苏州市立医院", logo: null },
      { name: "苏州市妇幼保健院", logo: null },
      { name: "山东省济南市人民医院", logo: "/mmaicc/assets/logos/logo4.png" },
      { name: "江西省赣州市人民医院", logo: null },
      { name: "苏州九龙医院", logo: "/mmaicc/assets/logos/logo3.png" },
      { name: "新疆维吾尔族自治区第三人民医院", logo: null },
    ],
  },
];

export const newsItems = [
  {
    title: "米鹊科技持续推进智慧健康管理产品升级",
    date: "2026-04-18",
    image: "/mmaicc/assets/pics/bg_09.png",
    summary:
      "围绕院后健康管理、AI 随访和患者服务闭环，产品能力继续向精细化运营和多病种场景延展。",
  },
  {
    title: "AI 电话随访在门诊与院后场景中的应用价值",
    date: "2026-03-22",
    image: "/mmaicc/assets/img/ai/bg/video.png",
    summary:
      "通过语音交互、话术配置、任务调度和结果结构化，AI 随访正在成为医院提升服务效率的重要工具。",
  },
  {
    title: "以患者为中心的连续健康管理实践",
    date: "2026-02-28",
    image: "/mmaicc/assets/pics/bg_address.jpg",
    summary:
      "从出院到复诊，从宣教到风险预警，连续健康管理让患者服务不再停留在单次就诊。",
  },
];

export const coreProducts = [
  {
    tag: "院后管理核心",
    icon: "follow",
    title: "智能随访系统",
    desc: "基于NLP+大模型的全病程随访平台，覆盖出院、慢病、专病、个案管理、临床试验、MTM六大场景。",
    bullets: [
      "AI自动完成用药提醒、复诊通知、康复指导及满意度调查，处理90%以上常规随访",
      "智能识别患者语音回答，异常症状自动标记并实时预警",
      "1台设备日呼800+通，覆盖能力相当于八九名专职护士",
    ],
    stats: ["日呼800+通", "处理90%+随访", "等效8-9名护士"],
  },
  {
    tag: "院前咨询入口",
    icon: "mic",
    title: "门诊智能语音机器人",
    desc: "千亿参数医疗大模型与医院本地知识库双引擎驱动，部署于门诊咨询热线。",
    bullets: [
      "7×24小时秒级接听，接通率从不足65%提升至99%以上",
      "科室专家参与构建知识库，覆盖挂号、就诊流程、医保等高频问题",
      "支持方言识别，复杂问题无缝转接人工",
    ],
    stats: ["接通率99%+", "7×24小时", "支持方言识别"],
  },
  {
    tag: "运营方法论",
    icon: "users",
    title: "患者运营方案",
    desc: 'AI系统与专业运营团队协同，以"盘活存量患者、做稳持续营收"为目标。',
    bullets: [
      "基于就诊记录与活跃度自动分层，精准锁定高复诊潜质人群",
      "按病种匹配话术、按最佳时机精准邀约，告别群发短信",
      "高满意度患者引导转介绍，高风险流失患者主动挽留",
    ],
    stats: ["自动患者分层", "复诊率↑20-27%", "精准邀约触达"],
  },
  {
    tag: "慢病全程管理",
    icon: "heart",
    title: "慢病管理方案",
    desc: '面向高血压、糖尿病、冠心病、慢阻肺等高发病种，构建"监测-随访-预警"慢病管理闭环。',
    bullets: [
      "患者居家自测数据自动同步，系统按周期持续跟踪",
      "基于指南规则自动评估控制情况，异常波动即时预警",
      "按病种、分期、风险等级自动推送个性化宣教与用药提醒",
    ],
    stats: ["数据自动同步", "异常实时预警", "个性化宣教"],
  },
  {
    tag: "体检全流程",
    icon: "clipboard",
    title: "体检中心管理方案",
    desc: "打通检前预约、检中导检、检后回访全流程。",
    bullets: [
      "AI批量完成体检通知、到检提醒、报告解读引导及复查邀约",
      "异常指标自动分层预警，精准推送个性化健康建议",
      "持续跟踪异常客户复诊情况，提升检后转化与客户粘性",
    ],
    stats: ["全流程打通", "异常分层预警", "检后转化↑"],
  },
  {
    tag: "质控合规",
    icon: "shield",
    title: "AI病历质控",
    desc: "基于大模型与自然语言处理技术，对病历进行智能化质量监控。",
    bullets: [
      "内涵质控（诊断逻辑、诊疗规范性）与形式质控（缺项、错填、前后矛盾）双重覆盖",
      "自动定位问题病历并生成质控报告，从事后抽查转向实时监测",
      "支持诊断与手术编码自动校验，满足绩效考核与医保支付要求",
    ],
    stats: ["双重质控覆盖", "实时监测预警", "编码自动校验"],
  },
];

export const caseStudies = [
  {
    tag: "三甲",
    name: "复旦大学附属浦东医院",
    subtitle: "智能随访系统全院覆盖",
    desc: "三年实现全院覆盖，年随访10万+人次，随访数据反哺临床科研，为科室论文发表提供真实临床数据。",
    stats: [
      { value: "10万+", label: "年随访量" },
      { value: "99.3%", label: "AI随访率" },
      { value: "4年", label: "覆盖时间" },
    ],
    award: "应用成果论文发表于《中外医学研究杂志》2025年第4卷第10期",
  },
  {
    tag: "三甲综合",
    name: "苏州市立医院",
    subtitle: "门诊智能语音机器人系统",
    desc: '破解门诊电话"接不通、答不准"的行业难题，接通率提升至99%以上，问题解决率稳定在95%。',
    stats: [
      { value: "99%", label: "接通率" },
      { value: "80%+", label: "月接听量增长" },
      { value: "95%+", label: "问题解决率" },
    ],
    award: "应用成果获第八届江苏省智慧医疗创新大赛三等奖",
  },
  {
    tag: "民营医院",
    name: "上海邮电医院",
    subtitle: "智能随访系统多场景全覆盖",
    desc: "从体检回访、住院随访到药剂科、中医科等专科随访，100+场景话术适配，AI批量触达释放人力。",
    stats: [
      { value: "10+", label: "覆盖场景" },
      { value: "数十万", label: "服务患者人次" },
      { value: "5年+", label: "稳定运行" },
    ],
    award: null,
  },
];

export const productModules = [
  {
    title: "随访任务管理",
    text: "支持任务创建、自动分配、进度跟踪和异常提醒。",
  },
  {
    title: "患者健康档案",
    text: "整合随访结果、指标记录、宣教记录和复诊信息。",
  },
  {
    title: "病种路径配置",
    text: "按专科和病种配置随访问卷、时间节点和干预策略。",
  },
  {
    title: "运营数据看板",
    text: "实时呈现触达率、完成率、异常分布和服务质量。",
  },
];

export const aiModules = [
  {
    title: "自然语音交互",
    text: "贴近真实通话语境，支持多轮问答和关键字段识别。",
  },
  {
    title: "智能任务调度",
    text: "按人群、时间、优先级和失败重试策略执行随访任务。",
  },
  {
    title: "风险识别预警",
    text: "对异常症状、指标波动和重点词进行提醒与归类。",
  },
  {
    title: "结构化结果沉淀",
    text: "将通话结果转化为可检索、可统计、可追溯的数据。",
  },
];
