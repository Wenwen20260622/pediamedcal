// ════════════════════════════════════════════════════════════
//  研缽 · 藥品資料檔  （這是你唯一需要編輯的檔案）
//  每一筆 = 一個藥品，欄位說明：
//    code  : 醫令代碼
//    cat   : 分類（腸胃 / 感冒 / 抗生素 / 心臟）
//    gen   : 學名        brand : 商品名        zh : 中文名
//    freq  : 常用頻率（TID、BID…）
//    unit  : 劑量單位，預設「顆」；粉劑或顆粒填「包」
//    fmin  : 每次「最小」劑量公式，w 代表體重(kg)
//    fmax  : 每次「最大」劑量公式；若只有單一值，fmax 留成 ""
//  範例：fmin:"w*25/250" 代表 體重×25÷250；fmin:"w/40" 代表 體重÷40
//  要新增藥品，複製一段 { ... } 貼在最後、改內容即可。
// ════════════════════════════════════════════════════════════
window.DRUGS = [
  {
    "code": "TACETM53",
    "cat": "感冒",
    "gen": "Acetaminophen 500mg/T",
    "brand": "Lactam 500mg/Tab",
    "zh": "利克痛錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "PACETYG",
    "cat": "感冒",
    "gen": "Acetylcysteine(粉劑) 200mg/3g/Pack",
    "brand": "Actein granule 200mg/3g/Pack",
    "zh": "【粉劑】愛克痰顆粒",
    "freq": "TID/QID",
    "unit": "包",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TACYCL4",
    "cat": "抗生素",
    "gen": "Acyclovir(錠劑)四百mg/Tab",
    "brand": "Acylo 400mg/Tab",
    "zh": "克皰疹錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w*10/400",
    "fmax": "w*20/400"
  },
  {
    "code": "TAMBROX2",
    "cat": "感冒",
    "gen": "Ambroxol HCl 30mg/Tab",
    "brand": "Ambroxol 30mg/Tab",
    "zh": "安嗽錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TAMINOP3",
    "cat": "感冒",
    "gen": "Aminophylline  100mg/Tab(片裝)",
    "brand": "Aminophylline  100mg/Tab(片裝)",
    "zh": "氨基非林錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/60",
    "fmax": ""
  },
  {
    "code": "TAMOXIC1",
    "cat": "抗生素",
    "gen": "Amoxicillin 250mg/Cap",
    "brand": "Amoxicillin 250mg/Cap",
    "zh": "安謀黴素膠囊",
    "freq": "TID",
    "unit": "顆",
    "fmin": "w*25/250",
    "fmax": "w*90/250"
  },
  {
    "code": "TASPI103",
    "cat": "心臟",
    "gen": "ASPirin(錠劑非緩釋)  一百mg/Tab",
    "brand": "ASPirin(錠劑非緩釋)  一百mg/Tab",
    "zh": "\"強生\"阿斯匹林膜衣錠",
    "freq": "QD",
    "unit": "顆",
    "fmin": "w*1/100",
    "fmax": "w*5/100"
  },
  {
    "code": "TAZITHR",
    "cat": "抗生素",
    "gen": "AZITHROMYCIN(錠劑) 250mg/Tab",
    "brand": "ZITHROMAX 250mg/Tab",
    "zh": "日舒",
    "freq": "QD",
    "unit": "顆",
    "fmin": "w*10/250",
    "fmax": ""
  },
  {
    "code": "TBAKTAR",
    "cat": "抗生素",
    "gen": "Baktar 400mg/Tab (複方)",
    "brand": "Baktar Tab 400mg(複方)",
    "zh": "撲菌特錠",
    "freq": "BID",
    "unit": "顆",
    "fmin": "w*8/80",
    "fmax": "w*12/80"
  },
  {
    "code": "TCEFIXI2",
    "cat": "抗生素",
    "gen": "Cefixime 100mg/Cap",
    "brand": "Cefixmycin 100mg/Cap",
    "zh": "喜復黴素膠囊",
    "freq": "BID",
    "unit": "顆",
    "fmin": "w*7/100",
    "fmax": "w*9/100"
  },
  {
    "code": "TCEPHR51",
    "cat": "抗生素",
    "gen": "CEPHRADINE 五百mg/Cap",
    "brand": "Lisacef 五百mg/Cap",
    "zh": "利速復膠囊",
    "freq": "TID",
    "unit": "顆",
    "fmin": "w*25/500",
    "fmax": "w*75/500"
  },
  {
    "code": "TCETIRI3",
    "cat": "感冒",
    "gen": "Cetirizine(錠劑) 10mg/Tab",
    "brand": "Cetirizine 10mg/Tab",
    "zh": "杏止敏 膜衣錠",
    "freq": "QD/BID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TCIPRO5",
    "cat": "抗生素",
    "gen": "CIPROfloxacin  500mg/Tab",
    "brand": "Ciflogen  500mg/Tab",
    "zh": "喜伏菌膜衣錠 500 毫克",
    "freq": "BID",
    "unit": "顆",
    "fmin": "w*10/500",
    "fmax": "w*20/500"
  },
  {
    "code": "TCLARI5",
    "cat": "抗生素",
    "gen": "Clarithromycin F.C.500mg/Tab",
    "brand": "Klaricid F.C. 500mg/Tab",
    "zh": "開羅理黴素膜衣錠",
    "freq": "BID",
    "unit": "顆",
    "fmin": "w*15/500",
    "fmax": "w*30/500"
  },
  {
    "code": "TCYPRO1",
    "cat": "腸胃",
    "gen": "Cyproheptadine HCl 4mg/Tab",
    "brand": "PILIAN 4mg/Tab",
    "zh": "佩你安錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/60",
    "fmax": "w/40"
  },
  {
    "code": "TDIMETH",
    "cat": "腸胃",
    "gen": "Dimethyl polysiloxane 40mg/Tab",
    "brand": "Gaslan 40mg/Tab",
    "zh": "加斯朗錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": "w/20"
  },
  {
    "code": "TMOTIL",
    "cat": "腸胃",
    "gen": "Domperidone(錠劑) 10mg/Tab",
    "brand": "Emetrol 10mg/Tab",
    "zh": "癒吐寧錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TDOXYCY2",
    "cat": "抗生素",
    "gen": "Doxycycline 100mg/Cap",
    "brand": "Doxycycline 100mg/Cap",
    "zh": "獨克士黴素膠囊",
    "freq": "BID",
    "unit": "顆",
    "fmin": "w*2.2/100",
    "fmax": "w*4.4/100"
  },
  {
    "code": "TFAMOTI5",
    "cat": "腸胃",
    "gen": "Famotidine 20mg/Tab",
    "brand": "Famotidine F.C. 20mg/Tab",
    "zh": "(啡莫替定)景樂寧膜衣錠",
    "freq": "BID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TFENOTE1",
    "cat": "感冒",
    "gen": "Fenoterol (錠劑) 2.5mg/Tab",
    "brand": "Asmatin  2.5mg/Tab",
    "zh": "喘必定錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/60",
    "fmax": ""
  },
  {
    "code": "TISONIA1",
    "cat": "抗生素",
    "gen": "Isoniazid 100mg/Tab",
    "brand": "Isoniazide 100mg/Tab",
    "zh": "異菸生僉醯月井錠",
    "freq": "QD",
    "unit": "顆",
    "fmin": "w*10/100",
    "fmax": ""
  },
  {
    "code": "TLYSOZY",
    "cat": "感冒",
    "gen": "Lysozyme 30mg/Tab",
    "brand": "Lysozyme chloride 30mg/Tab",
    "zh": "來縮酵素錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TMAG-O",
    "cat": "腸胃",
    "gen": "Magnesium Oxide 250mg/Tab",
    "brand": "Magnesium Oxide 250mg/Tab",
    "zh": "氧化鎂錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": "w/20"
  },
  {
    "code": "TMETOCL1",
    "cat": "腸胃",
    "gen": "Metoclopramide 3.84mg/Tab(片裝",
    "brand": "Promeran 3.84mg/Tab(片裝)",
    "zh": "胃明朗膜衣錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TMETRON2",
    "cat": "抗生素",
    "gen": "Metronidazole(膠囊) 250mg/Cap",
    "brand": "Tolizole 250mg/Cap",
    "zh": "德利治癒膠囊",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w*7.5/250",
    "fmax": "w*10/250"
  },
  {
    "code": "TMOSAPR1",
    "cat": "腸胃",
    "gen": "Mosapride  5mg/Tab",
    "brand": "Mopride  5mg/Tab",
    "zh": "摩舒胃清錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TDEXTR1",
    "cat": "感冒",
    "gen": "Nospan 30mg/Tab",
    "brand": "DEXTROmethorphan 30mg/Tab",
    "zh": "樂咳坦錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TPEACE",
    "cat": "感冒",
    "gen": "Peace Tab(複方)",
    "brand": "Peace Tab",
    "zh": "鼻福錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TPROPRA",
    "cat": "心臟",
    "gen": "Propranolol 10mg/Tab(鋁箔)",
    "brand": "Propranolol HCl 10 mg/Tab 心律錠",
    "zh": "心律錠",
    "freq": "BID/TID",
    "unit": "顆",
    "fmin": "w*1/10",
    "fmax": "w*3/10"
  },
  {
    "code": "TRIFAM31",
    "cat": "抗生素",
    "gen": "Rifampicin 300mg/Cap",
    "brand": "Rifampicin 300mg/Cap",
    "zh": "立泛黴素膠囊",
    "freq": "QD",
    "unit": "顆",
    "fmin": "w*10/300",
    "fmax": "w*20/300"
  },
  {
    "code": "TSODICO",
    "cat": "感冒",
    "gen": "Sodicon-G Tab(複方)",
    "brand": "Sodicon-G Tab",
    "zh": "嗽必康治錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TSTROCA",
    "cat": "腸胃",
    "gen": "Strocain Tab(複方)",
    "brand": "Strocain Tab",
    "zh": "息痛佳音錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TDEXCHL",
    "cat": "感冒",
    "gen": "Tomin 2mg/Tab",
    "brand": "Dexchlorpheniramine 2mg/Tab",
    "zh": "妥敏錠",
    "freq": "TID/QID",
    "unit": "顆",
    "fmin": "w/40",
    "fmax": ""
  },
  {
    "code": "TURSOD2",
    "cat": "腸胃",
    "gen": "Ursodeoxycholic Acid 100mg/Tab",
    "brand": "Genurso 100mg/Tab",
    "zh": "健膽舒錠",
    "freq": "TID",
    "unit": "顆",
    "fmin": "15*w/100/3",
    "fmax": ""
  },
  {
    "code": "TVALACI",
    "cat": "抗生素",
    "gen": "Valaciclovir 500mg/Tab",
    "brand": "Valtrex 500mg/Tab",
    "zh": "袪疹易錠",
    "freq": "BID/TID",
    "unit": "顆",
    "fmin": "w*10/500",
    "fmax": "w*20/500"
  }
];
