export const PRODUCTION_STATIONS = ["Laser Cutting","Plasma","Press Brake","Mobile Welding","Fan Welding","Compact Welding","Project Welding","Duct Welding","Washing","Sandblasting","Painting","Assembly","Electrical Assembly","Final Inspection","Packaging & Shipping","Warehouse"] as const;
export const DEPARTMENTS = ["Production","Product Design","Electrical Design","Production Planning","Purchasing","Sales","R&D","Projects"] as const;
export const WORKFLOW_STATUSES = ["New","Committee Review","Action Assigned","Waiting for Action","Root Cause Submitted","Committee Approval","Closed"] as const;
export const SEVERITIES = ["Low","Medium","High","Critical"] as const;
export const FAILURE_CATEGORIES = ["Dimensional Deviation","Welding Defect","Surface Finish","Material Defect","Assembly Error","Documentation Error","Electrical Fault","Supplier Nonconformity"] as const;
export const FAILURE_FAMILIES = ["Process","Machine","Material","Method","Human Factor","Measurement"] as const;
export const COMMITTEE_MEMBERS = [
 {name:"M. Aydın",role:"Production Director"},{name:"S. Kaya",role:"Quality Manager"},{name:"E. Demir",role:"Production Manager"},{name:"B. Yılmaz",role:"Product Design Lead"},{name:"T. Çelik",role:"Operations Director"}
] as const;
export const PERSONNEL = ["E. Demir","S. Kaya","M. Aydın","B. Yılmaz","T. Çelik","A. Şahin","K. Öztürk","H. Arslan"] as const;
export const ANALYTICS_CONFIG = { repeatThreshold: 2, heatMapThresholds: { low: 1, medium: 3, high: 6 }, trendWeeks: 8 } as const;
export const OPEN_STATUSES = WORKFLOW_STATUSES.filter((s) => s !== "Closed");
export const DATA_SOURCE = { label: "Microsoft Lists", lists: ["Nonconformities", "Root Cause Analysis"], mode: "read-only" } as const;
export const ATTACHMENT_KINDS = [
 {key:"photo",label:"Photos",extensions:["jpg","png"]},{key:"document",label:"Documents",extensions:["docx","xlsx"]},{key:"pdf",label:"PDF",extensions:["pdf"]},{key:"email",label:"Email",extensions:["msg","eml"]},{key:"other",label:"Other",extensions:["dwg","step"]}
] as const;
export const AI_MODULES = [
 {key:"repeat-failures",name:"Tekrarlayan Uygunsuzluklar",summary:"Aynı kök nedenin farklı ürün, proje ve vardiyalarda tekrarını tespit eder.",status:"Planlandı"},
 {key:"pareto",name:"Pareto Analizi",summary:"Uygunsuzlukların %80'ini oluşturan kritik az sayıdaki nedeni öne çıkarır.",status:"Planlandı"},
 {key:"department-performance",name:"Departman Performansı",summary:"Departman bazında açılma, kapanma ve gecikme performansını karşılaştırır.",status:"Planlandı"},
 {key:"station-performance",name:"İstasyon Performansı",summary:"16 üretim istasyonunun risk, tekrar ve eğilim performansını izler.",status:"Planlandı"},
 {key:"root-cause",name:"Kök Neden Analizi",summary:"5 Neden / Ishikawa mantığıyla kök neden taslakları üretir.",status:"Planlandı"},
 {key:"action-performance",name:"Aksiyon Performansı",summary:"Hangi düzeltici aksiyonların tekrarı gerçekten önlediğini puanlar.",status:"Planlandı"},
 {key:"risk-forecast",name:"Risk Tahmini",summary:"Önümüzdeki dönemde riskin yoğunlaşacağı alanları öngörür.",status:"Planlandı"},
 {key:"trend-analysis",name:"Trend Analizi",summary:"Haftalık ve aylık kalite eğilimlerini sadeleştirilmiş şekilde sunar.",status:"Planlandı"},
 {key:"best-solutions",name:"En Başarılı Çözümler",summary:"Geçmişte en yüksek etkiyi sağlayan çözümleri kütüphaneye dönüştürür.",status:"Planlandı"},
 {key:"knowledge-base",name:"Bilgi Havuzu",summary:"Kalite bilgisini aranabilir kurumsal hafızaya dönüştürür.",status:"Planlandı"}
] as const;
export const REFERENCE_NOW = Date.UTC(2026,7,4,9,0,0);
