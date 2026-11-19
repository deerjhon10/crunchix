import { Injectable } from '@angular/core';

export type Language = 'fr' | 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentLang: Language = 'fr';

  private dictionary: Record<string, Record<Language, string>> = {
    // --- NAVIGATION & FOOTER ---
    'nav.home': {
      fr: 'À propos de nous',
      en: 'About us',
      ar: 'من نحن'
    },
    'nav.products': {
      fr: 'Nos produits',
      en: 'Our products',
      ar: 'منتجاتنا'
    },
    'nav.contact': {
      fr: 'Nous contacter',
      en: 'Contact us',
      ar: 'اتصل بنا'
    },
    'nav.partner': {
      fr: 'Devenir partenaire',
      en: 'Become a partner',
      ar: 'كن شريكاً'
    },
    'footer.slogan': {
      fr: 'Produits. Livrés. Garantis.',
      en: 'Products. Delivered. Guaranteed.',
      ar: 'منتجات. مُسلّمة. مضمونة.'
    },
    'footer.desc': {
      fr: 'Production et distribution alimentaire. France et international.',
      en: 'Food production and distribution. France and international.',
      ar: 'إنتاج وتوزيع المواد الغذائية. في فرنسا ودولياً.'
    },
    'footer.discover': {
      fr: 'DÉCOUVRIR',
      en: 'DISCOVER',
      ar: 'اكتشف'
    },
    'footer.distribution': {
      fr: 'Distribution',
      en: 'Distribution',
      ar: 'التوزيع'
    },
    'footer.about': {
      fr: 'À propos',
      en: 'About',
      ar: 'حول الشركة'
    },
    'footer.exchange': {
      fr: 'ÉCHANGEONS',
      en: 'LET’S TALK',
      ar: 'لنتواصل'
    },
    'footer.legal': {
      fr: 'Mentions légales',
      en: 'Legal notice',
      ar: 'إشعار قانوني'
    },
    'footer.privacy': {
      fr: 'Confidentialité',
      en: 'Privacy policy',
      ar: 'الخصوصية'
    },

    // --- PAGE ACCUEIL (HOME) ---
    'home.hero.eyebrow': {
      fr: 'Production & distribution alimentaire',
      en: 'Food production & distribution',
      ar: 'إنتاج وتوزيع المواد الغذائية'
    },
    'home.hero.title1': {
      fr: 'Produits.',
      en: 'Products.',
      ar: 'منتجات.'
    },
    'home.hero.title2': {
      fr: 'Livrés.',
      en: 'Delivered.',
      ar: 'مُسلّمة.'
    },
    'home.hero.title3': {
      fr: 'Garantis.',
      en: 'Guaranteed.',
      ar: 'مضمونة.'
    },
    'home.hero.desc': {
      fr: 'Nous développons et distribuons des produits alimentaires pour les professionnels, en France et à l’international.',
      en: 'We develop and distribute food products for professionals, in France and internationally.',
      ar: 'نطور ونوزع المنتجات الغذائية للمحترفين، في فرنسا وعلى الصعيد الدولي.'
    },
    'home.hero.promise': {
      fr: 'Une offre claire. Une relation durable.',
      en: 'A clear offer. A lasting relationship.',
      ar: 'عرض واضح. علاقة مستدامة.'
    },
    'home.showcase.eyebrow': {
      fr: 'Notre marque propre',
      en: 'Our own brand',
      ar: 'علامتنا التجارية الخاصة'
    },
    'home.showcase.subtitle': {
      fr: 'Snacks cuits au four',
      en: 'Oven-baked snacks',
      ar: 'مقرمشات مخبوزة في الفرن'
    },
    'flavor.sweet_pepper': {
      fr: 'Poivron doux',
      en: 'Sweet Pepper',
      ar: 'فلفل حلو'
    },
    'flavor.cheddar': {
      fr: 'Cheddar',
      en: 'Cheddar',
      ar: 'جبنة شيدر'
    },
    'flavor.hot_fire': {
      fr: 'Piment intense',
      en: 'Hot Fire',
      ar: 'فلفل حار قوي'
    },
    'home.showcase.footer': {
      fr: 'Développée et commercialisée par AMDAL FOOD',
      en: 'Developed and marketed by AMDAL FOOD',
      ar: 'تم تطويرها وتسويقها بواسطة AMDAL FOOD'
    },
    'home.stats.brand': {
      fr: 'notre marque propre',
      en: 'our own brand',
      ar: 'علامتنا التجارية الخاصة'
    },
    'home.stats.pack': {
      fr: 'conditionnement par carton',
      en: 'packaging per carton',
      ar: 'التعبئة لكل كرتون'
    },
    'home.stats.origin': {
      fr: 'société française',
      en: 'French company',
      ar: 'شركة فرنسية'
    },
    'home.partner.eyebrow': {
      fr: 'LE PARTENAIRE DE VOTRE OFFRE',
      en: 'YOUR OFFER PARTNER',
      ar: 'شريك عرضك التجاري'
    },
    'home.partner.title1': {
      fr: 'Des produits.',
      en: 'Products.',
      ar: 'منتجات.'
    },
    'home.partner.title2': {
      fr: 'Un partenaire pour les développer.',
      en: 'A partner to develop them.',
      ar: 'شريك لتطويرها.'
    },
    'home.partner.summary': {
      fr: 'AMDAL FOOD développe sa propre marque et distribue des gammes alimentaires auprès des professionnels. Notre objectif : construire des collaborations commerciales durables.',
      en: 'AMDAL FOOD develops its own brand and distributes food ranges to professionals. Our goal: building lasting commercial collaborations.',
      ar: 'تطور AMDAL FOOD علامتها الخاصة وتوزع تشكيلات غذائية للمحترفين. هدفنا: بناء شراكات تجارية مستدامة.'
    },
    'home.card1.label': {
      fr: '01 / PRODUITS.',
      en: '01 / PRODUCTS.',
      ar: '01 / منتجات.'
    },
    'home.card1.title1': {
      fr: 'Une offre',
      en: 'A clear',
      ar: 'عرض'
    },
    'home.card1.title2': {
      fr: 'claire.',
      en: 'offer.',
      ar: 'واضح.'
    },
    'home.card1.desc': {
      fr: 'CRUNCHIX et d’autres gammes alimentaires choisies pour répondre aux besoins des professionnels.',
      en: 'CRUNCHIX and other selected food ranges to meet the needs of professionals.',
      ar: 'CRUNCHIX وتشكيلات غذائية أخرى مختارة لتلبية احتياجات المحترفين.'
    },
    'home.card2.label': {
      fr: '02 / LIVRÉS.',
      en: '02 / DELIVERED.',
      ar: '02 / مُسلّمة.'
    },
    'home.card2.title1': {
      fr: 'Une distribution',
      en: 'Direct',
      ar: 'توزيع'
    },
    'home.card2.title2': {
      fr: 'directe.',
      en: 'distribution.',
      ar: 'مباشر.'
    },
    'home.card2.desc': {
      fr: 'Une commercialisation auprès des enseignes, distributeurs, grossistes et détaillants.',
      en: 'Marketing to retail chains, distributors, wholesalers, and retailers.',
      ar: 'تسويق مباشر للمتاجر الكبرى، الموزعين، تجار الجملة والتجزئة.'
    },
    'home.card3.label': {
      fr: '03 / GARANTIS.',
      en: '03 / GUARANTEED.',
      ar: '03 / مضمونة.'
    },
    'home.card3.title1': {
      fr: 'Une relation',
      en: 'A lasting',
      ar: 'علاقة'
    },
    'home.card3.title2': {
      fr: 'durable.',
      en: 'relationship.',
      ar: 'مستدامة.'
    },
    'home.card3.desc': {
      fr: 'Des échanges clairs et un accompagnement commercial pour développer votre référencement.',
      en: 'Clear communication and commercial support to grow your product listing.',
      ar: 'تواصل واضح ومواكبة تجارية لتطوير إدراج منتجاتكم.'
    },
    'home.offer.eyebrow': {
      fr: 'NOTRE OFFRE',
      en: 'OUR OFFER',
      ar: 'عرضنا'
    },
    'home.offer.title': {
      fr: 'CRUNCHIX, notre marque de snacks.',
      en: 'CRUNCHIX, our snack brand.',
      ar: 'CRUNCHIX، علامتنا التجارية للمقرمشات.'
    },
    'home.offer.subtitle': {
      fr: 'Une marque développée par AMDAL FOOD pour les circuits de distribution.',
      en: 'A brand developed by AMDAL FOOD for distribution channels.',
      ar: 'علامة تجارية طورتها AMDAL FOOD لقنوات التوزيع.'
    },
    'home.offer.panel_eyebrow': {
      fr: 'UNE MARQUE AMDAL FOOD',
      en: 'AN AMDAL FOOD BRAND',
      ar: 'علامة تجارية من AMDAL FOOD'
    },
    'home.offer.details_eyebrow': {
      fr: 'SNACKS DE MAÏS / 150 G',
      en: 'CORN SNACKS / 150 G',
      ar: 'مقرمشات الذرة / 150 غ'
    },
    'home.offer.details_title1': {
      fr: 'Cuits au four.',
      en: 'Oven-baked.',
      ar: 'مخبوزة في الفرن.'
    },
    'home.offer.details_title2': {
      fr: 'Prêts pour vos rayons.',
      en: 'Ready for your shelves.',
      ar: 'جاهزة لرفوف متاجركم.'
    },
    'home.offer.details_desc': {
      fr: 'Des bâtonnets de maïs proposés dans un conditionnement professionnel, avec une commercialisation directe par AMDAL FOOD.',
      en: 'Corn sticks offered in professional packaging, directly marketed by AMDAL FOOD.',
      ar: 'أصابع ذرة مقرمشة مقدمة في تعبئة احترافية، مع تسويق مباشر من طرف AMDAL FOOD.'
    },
    'home.offer.packs': {
      fr: 'paquets par carton',
      en: 'packs per carton',
      ar: 'كيساً في الكرتون'
    },
    'home.offer.per_carton': {
      fr: 'par carton',
      en: 'per carton',
      ar: 'لكل كرتون'
    },
    'home.offer.discover_btn': {
      fr: 'Découvrir CRUNCHIX',
      en: 'Discover CRUNCHIX',
      ar: 'اكتشف CRUNCHIX'
    },
    'home.offer.conditions': {
      fr: 'Références et conditions :',
      en: 'References and terms:',
      ar: 'المراجع والشروط:'
    },
    'home.dist.eyebrow': {
      fr: 'DISTRIBUTION & ACCOMPAGNEMENT',
      en: 'DISTRIBUTION & SUPPORT',
      ar: 'التوزيع والمواكبة'
    },
    'home.dist.title1': {
      fr: 'Du produit',
      en: 'From the product',
      ar: 'من المنتج'
    },
    'home.dist.title2': {
      fr: 'à votre marché.',
      en: 'to your market.',
      ar: 'إلى سوقكم.'
    },
    'home.dist.summary': {
      fr: 'Nous accompagnons nos partenaires dans leur référencement et le développement de leurs opportunités commerciales.',
      en: 'We support our partners in product listing and developing their business opportunities.',
      ar: 'نواكب شركاءنا في إدراج المنتجات وتطوير فرصهم التجارية.'
    },
    'home.step1.title': {
      fr: 'Sélectionner',
      en: 'Select',
      ar: 'الاختيار'
    },
    'home.step1.desc': {
      fr: 'Une offre adaptée aux besoins de votre marché.',
      en: 'An offer tailored to your market needs.',
      ar: 'عرض متأقلم مع احتياجات سوقكم.'
    },
    'home.step2.title': {
      fr: 'Distribuer',
      en: 'Distribute',
      ar: 'التوزيع'
    },
    'home.step2.desc': {
      fr: 'Une commercialisation directe auprès des professionnels.',
      en: 'Direct marketing to professionals.',
      ar: 'تسويق مباشر لدى المهنيين والمحترفين.'
    },
    'home.step3.title': {
      fr: 'Référencer',
      en: 'List',
      ar: 'الإدراج'
    },
    'home.step3.desc': {
      fr: 'Un accompagnement pour intégrer vos circuits de vente.',
      en: 'Support to integrate your sales channels.',
      ar: 'مواكبة للاندماج في قنوات البيع الخاصة بكم.'
    },
    'home.step4.title': {
      fr: 'Développer',
      en: 'Develop',
      ar: 'التطوير'
    },
    'home.step4.desc': {
      fr: 'Une collaboration commerciale pensée pour durer.',
      en: 'A business collaboration built to last.',
      ar: 'تعاون تجاري مصمم ليستمر.'
    },
    'home.b2b.title1': {
      fr: 'À chaque acteur,',
      en: 'For every player,',
      ar: 'لكل فاعل اقتصادي،'
    },
    'home.b2b.title2': {
      fr: 'un échange dédié.',
      en: 'a dedicated exchange.',
      ar: 'تواصل مخصص.'
    },
    'home.b2b.desc': {
      fr: 'Une approche B2B pour vos circuits de distribution.',
      en: 'A B2B approach for your distribution channels.',
      ar: 'مقاربة B2B مخصصة لقنوات التوزيع الخاصة بكم.'
    },
    'home.actor1': { fr: 'Centrales d’achat', en: 'Buying groups', ar: 'مراكز الشراء' },
    'home.actor2': { fr: 'Enseignes', en: 'Retail chains', ar: 'المتاجر الكبرى' },
    'home.actor3': { fr: 'Distributeurs', en: 'Distributors', ar: 'الموزعون' },
    'home.actor4': { fr: 'Grossistes', en: 'Wholesalers', ar: 'تجار الجملة' },
    'home.actor5': { fr: 'Détaillants', en: 'Retailers', ar: 'تجار التجزئة' },
    'home.actor6': { fr: 'Franchisés', en: 'Franchisees', ar: 'أصحاب الامتياز' },
    'home.int.eyebrow': {
      fr: 'FRANCE & INTERNATIONAL',
      en: 'FRANCE & INTERNATIONAL',
      ar: 'فرنسا ودولياً'
    },
    'home.int.title1': {
      fr: 'Ancrés en France.',
      en: 'Rooted in France.',
      ar: 'متجذرون في فرنسا.'
    },
    'home.int.title2': {
      fr: 'Ouverts sur le monde.',
      en: 'Open to the world.',
      ar: 'منفتحون على العالم.'
    },
    'home.int.desc': {
      fr: 'Basés en Île-de-France, nous développons CRUNCHIX en France. D’autres gammes alimentaires, notamment les conserves, sont déjà commercialisées à l’international.',
      en: 'Based in Île-de-France, we develop CRUNCHIX in France. Other food ranges, including canned goods, are already marketed internationally.',
      ar: 'مقرنا في إيل دو فرانس، ونقوم بتطوير CRUNCHIX في فرنسا. كما يتم تسويق تشكيلات غذائية أخرى، لا سيما المعلبات، على الصعيد الدولي.'
    },
    'home.int.m1_desc': {
      fr: 'Une présence développée auprès des professionnels en France.',
      en: 'A strong presence among professionals in France.',
      ar: 'حضور متطور لدى المهنيين في فرنسا.'
    },
    'home.int.m2_title': {
      fr: 'Europe & international',
      en: 'Europe & international',
      ar: 'أوروبا ودولياً'
    },
    'home.int.m2_desc': {
      fr: 'De nouvelles collaborations à construire.',
      en: 'New collaborations to build.',
      ar: 'شراكات جديدة قيد البناء.'
    },
    'home.int.origin': {
      fr: 'NOTRE POINT DE DÉPART',
      en: 'OUR STARTING POINT',
      ar: 'نقطة انطلاقنا'
    },
    'home.cta.eyebrow': {
      fr: 'PARLONS DE VOTRE MARCHÉ',
      en: 'LET’S TALK ABOUT YOUR MARKET',
      ar: 'لنتحدث عن سوقكم'
    },
    'home.cta.title1': {
      fr: 'Développons votre',
      en: 'Let’s develop your',
      ar: 'لنطور سوقكم'
    },
    'home.cta.title2': {
      fr: 'marché ensemble.',
      en: 'market together.',
      ar: 'معاً.'
    },
    'home.cta.desc': {
      fr: 'Vous distribuez ou référencez des produits alimentaires ? Construisons une offre adaptée à votre activité.',
      en: 'Do you distribute or list food products? Let’s build an offer tailored to your business.',
      ar: 'هل توزعون أو تدرجون منتجات غذائية؟ لنبنِ عرضاً يناسب نشاطكم.'
    },

    // --- PAGE PRODUITS (PRODUCTS) ---
    'prod.hero.desc': {
      fr: 'Des bâtonnets de maïs cuits au four, pensés pour les moments qui méritent plus de croquant.',
      en: 'Oven-baked corn sticks, designed for moments that deserve more crunch.',
      ar: 'أصابع ذرة مخبوزة في الفرن، مصممة للحظات التي تستحق قرمشة أكثر.'
    },
    'prod.spirit.title1': {
      fr: 'La vie mérite',
      en: 'Life deserves',
      ar: 'الحياة تستحق'
    },
    'prod.spirit.title2': {
      fr: 'un peu plus',
      en: 'a little more',
      ar: 'القليل من'
    },
    'prod.spirit.title3': {
      fr: 'de crunch.',
      en: 'crunch.',
      ar: 'القرمشة الإضافية.'
    },
    'prod.spirit.desc': {
      fr: 'CRUNCHIX est né d’une idée simple : rendre les petits moments du quotidien plus savoureux, plus fun et plus mémorables.',
      en: 'CRUNCHIX was born from a simple idea: making everyday moments tastier, more fun, and more memorable.',
      ar: 'ولدت CRUNCHIX من فكرة بسيطة: جعل اللحظات اليومية الصغيرة أكثر لذة، أكثر متعة ولا تُنسى.'
    },
    'prod.spirit.closing': {
      fr: 'On ouvre. On croque. On profite.',
      en: 'Open. Crunch. Enjoy.',
      ar: 'نفتح. نقرمش. نستمتع.'
    },
    'prod.process.subtitle': {
      fr: 'Un produit simple. Une expérience nette.',
      en: 'A simple product. A clean experience.',
      ar: 'منتج بسيط. تجربة واضحة.'
    },
    'prod.process.c1_title': { fr: 'MAÏS', en: 'CORN', ar: 'ذرة' },
    'prod.process.c1_desc': {
      fr: 'Une base croustillante et familière.',
      en: 'A crispy and familiar base.',
      ar: 'قاعدة مقرمشة ومألوفة.'
    },
    'prod.process.c2_title': { fr: 'CUIT AU FOUR', en: 'OVEN-BAKED', ar: 'مخبوز في الفرن' },
    'prod.process.c2_desc': {
      fr: 'Une cuisson pensée pour garder le crunch.',
      en: 'Baked to lock in the crunch.',
      ar: 'طهي في الفرن للحفاظ على القرمشة.'
    },
    'prod.process.c3_title': { fr: 'ASSAISONNÉ', en: 'SEASONED', ar: 'متبّل' },
    'prod.process.c3_desc': {
      fr: 'Des saveurs franches et reconnaissables.',
      en: 'Bold and recognizable flavors.',
      ar: 'نكهات قوية ومميزة.'
    },
    'prod.process.c4_desc': {
      fr: 'Un snack qui a du caractère.',
      en: 'A snack with character.',
      ar: 'وجبة خفيفة ذات طابع قوي.'
    },
    'prod.hot.tagline': {
      fr: 'Le croquant qui monte en température.',
      en: 'The crunch that turns up the heat.',
      ar: 'القرمشة التي ترفع درجة الحرارة.'
    },
    'prod.hot.desc': {
      fr: 'Des bâtonnets de maïs cuits au four, croustillants et généreusement relevés, pour une expérience intense et pleine de caractère.',
      en: 'Oven-baked corn sticks, crispy and generously spiced, for an intense and bold experience.',
      ar: 'أصابع ذرة مخبوزة في الفرن، مقرمشة ومتبلة بسخاء، لتجربة قوية ومليئة بالحماس.'
    },
    'prod.sweet.tagline': {
      fr: 'Une fraîcheur douce à chaque bouchée.',
      en: 'A sweet freshness in every bite.',
      ar: 'انتعاش لطيف في كل قضمة.'
    },
    'prod.sweet.desc': {
      fr: 'Une saveur de poivron doux, équilibrée et colorée, avec le crunch signature de CRUNCHIX pour un snack facile à aimer et à partager.',
      en: 'A balanced and colorful sweet pepper flavor with the signature CRUNCHIX crunch, easy to love and share.',
      ar: 'نكهة الفلفل الحلو المتوازنة والملونة، مع قرمشة CRUNCHIX المميزة لوجبة خفيفة يسهل حبها ومشاركتها.'
    },
    'prod.cheddar.tagline': {
      fr: 'Le plaisir du fromage à chaque bouchée.',
      en: 'The pleasure of cheese in every bite.',
      ar: 'متعة الجبن في كل قضمة.'
    },
    'prod.cheddar.desc': {
      fr: 'Une saveur généreuse, ronde et gourmande, avec le crunch signature de CRUNCHIX.',
      en: 'A generous, rich, and indulgent flavor with the signature CRUNCHIX crunch.',
      ar: 'نكهة غنية، متكاملة وشهية، مع قرمشة CRUNCHIX المميزة.'
    },
    'prod.carton.badge': { fr: 'FORMAT CARTON', en: 'CARTON FORMAT', ar: 'حجم الكرتون' },
    'prod.carton.title1': { fr: 'DU CRUNCH,', en: 'CRUNCH,', ar: 'قرمشة،' },
    'prod.carton.title2': { fr: 'PAR CARTON.', en: 'BY THE CARTON.', ar: 'بالكرتون.' },
    'prod.carton.desc': {
      fr: '12 sachets de 150 g, réunis dans un même carton.',
      en: '12 bags of 150 g, packed in a single carton.',
      ar: '12 كيساً بوزن 150 غ، مجمعة في كرتون واحد.'
    },
    'prod.carton.per': { fr: 'PAR CARTON', en: 'PER CARTON', ar: 'لكل كرتون' },
    'prod.carton.weight': { fr: 'POIDS NET TOTAL', en: 'TOTAL NET WEIGHT', ar: 'الوزن الصافي الإجمالي' },
    'prod.lantico.badge': { fr: 'GAMME CAFÉ', en: 'COFFEE RANGE', ar: 'تشكيلة القهوة' },
    'prod.lantico.title2': { fr: 'L’ESPRESSO ITALIEN.', en: 'THE ITALIAN ESPRESSO.', ar: 'الإسبريسو الإيطالي.' },
    'prod.lantico.tagline': {
      fr: 'L’intensité et le savoir-faire d’une torréfaction traditionnelle.',
      en: 'The intensity and craftsmanship of traditional roasting.',
      ar: 'قوة وخبرة التحميص التقليدي الأصيل.'
    },
    'prod.lantico.desc': {
      fr: 'Sélectionné et distribué par AMDAL FOOD, L’Antico propose des capsules et cafés d’exception pensés pour les professionnels, commerces et amateurs d’espresso authentique.',
      en: 'Selected and distributed by AMDAL FOOD, L’Antico offers exceptional capsules and coffees designed for professionals, retailers, and lovers of authentic espresso.',
      ar: 'تم اختيارها وتوزيعها بواسطة AMDAL FOOD، تقدم L’Antico كبسولات وقهوة استثنائية مصممة للمحترفين، المتاجر وعشاق الإسبريسو الأصيل.'
    },
    'prod.lantico.spec1': { fr: 'ARÔME INTENSE', en: 'INTENSE AROMA', ar: 'نكهة قوية' },
    'prod.lantico.spec2': { fr: 'CONDITIONNEMENT ADAPTÉ', en: 'TAILORED PACKAGING', ar: 'تعبئة ملائمة' },
    'prod.lantico.btn': { fr: 'Référencer L’Antico', en: 'List L’Antico', ar: 'إدراج قهوة L’Antico' },

    // --- PAGE CONTACT ---
    'contact.breadcrumb': { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
    'contact.eyebrow': { fr: 'NOUS CONTACTER', en: 'CONTACT US', ar: 'اتصل بنا' },
    'contact.title1': { fr: 'Échangeons sur', en: 'Let’s talk about', ar: 'لنتناقش حول' },
    'contact.title2': { fr: 'votre marché.', en: 'your market.', ar: 'سوقكم.' },
    'contact.subtitle': {
      fr: 'Vous souhaitez référencer CRUNCHIX ou L’Antico, distribuer nos produits ou développer une collaboration ? Présentez-nous votre besoin.',
      en: 'Want to list CRUNCHIX or L’Antico, distribute our products, or develop a collaboration? Tell us about your needs.',
      ar: 'هل ترغبون في إدراج CRUNCHIX أو L’Antico، توزيع منتجاتنا أو تطوير شراكة تجارية؟ اعرضوا علينا احتياجاتكم.'
    },
    'contact.aside.eyebrow1': { fr: 'UN ÉCHANGE PROFESSIONNEL', en: 'A PROFESSIONAL EXCHANGE', ar: 'تواصل احترافي' },
    'contact.aside.title': {
      fr: 'Votre marché. Notre prochain échange.',
      en: 'Your market. Our next conversation.',
      ar: 'سوقكم. حوارنا القادم.'
    },
    'contact.aside.desc': {
      fr: 'Référencement, distribution ou partenariat : parlez-nous de votre activité et de vos besoins.',
      en: 'Product listing, distribution, or partnership: tell us about your business and needs.',
      ar: 'الإدراج، التوزيع أو الشراكة: حدثونا عن نشاطكم واحتياجاتكم.'
    },
    'contact.aside.eyebrow2': { fr: 'VOTRE DEMANDE PEUT CONCERNER', en: 'YOUR INQUIRY MAY CONCERN', ar: 'قد يتعلق طلبكم بـ' },
    'contact.aside.li1': { fr: 'Le référencement de CRUNCHIX & L’Antico', en: 'Listing CRUNCHIX & L’Antico', ar: 'إدراج منتجات CRUNCHIX و L’Antico' },
    'contact.aside.li2': { fr: 'La distribution de nos gammes', en: 'Distributing our ranges', ar: 'توزيع تشكيلاتنا الغذائية' },
    'contact.aside.li3': { fr: 'Une collaboration commerciale', en: 'A commercial collaboration', ar: 'تعاون أو شراكة تجارية' },
    'contact.loc.eyebrow': { fr: 'NOTRE IMPLANTATION', en: 'OUR LOCATION', ar: 'موقعنا' },
    'contact.loc.desc': {
      fr: 'Une société française, ouverte aux échanges en France et à l’international.',
      en: 'A French company, open to business in France and internationally.',
      ar: 'شركة فرنسية، منفتحة على التبادل التجاري في فرنسا ودولياً.'
    },
    'contact.form.title': { fr: 'Présentez-nous votre besoin.', en: 'Tell us about your needs.', ar: 'اعرضوا علينا احتياجاتكم.' },
    'contact.form.required': {
      fr: 'Les champs marqués d’un astérisque sont obligatoires.',
      en: 'Fields marked with an asterisk are required.',
      ar: 'الحقول التي تحمل علامة النجمة (*) إلزامية.'
    },
    'contact.form.name': { fr: 'Nom et prénom *', en: 'Full name *', ar: 'الاسم الكامل *' },
    'contact.form.company': { fr: 'Entreprise *', en: 'Company *', ar: 'الشركة *' },
    'contact.form.country': { fr: 'Pays *', en: 'Country *', ar: 'الدولة *' },
    'contact.form.activity': { fr: 'Votre activité', en: 'Your business activity', ar: 'نشاطكم التجاري' },
    'contact.form.legend': { fr: 'Comment vous contacter ? *', en: 'How can we contact you? *', ar: 'كيف يمكننا التواصل معكم؟ *' },
    'contact.form.contact_help': {
      fr: 'Renseignez au moins un moyen de contact : e-mail ou téléphone.',
      en: 'Provide at least one contact method: email or phone.',
      ar: 'يرجى إدخال وسيلة تواصل واحدة على الأقل: البريد الإلكتروني أو الهاتف.'
    },
    'contact.form.email': { fr: 'E-mail professionnel', en: 'Business email', ar: 'البريد الإلكتروني المهني' },
    'contact.form.phone': { fr: 'Téléphone', en: 'Phone', ar: 'الهاتف' },
    'contact.form.message': { fr: 'Votre message *', en: 'Your message *', ar: 'رسالتكم *' },
    'contact.form.submit': { fr: 'Envoyer ma demande', en: 'Send my inquiry', ar: 'إرسال طلبي' }
  };

  setLanguage(lang: Language | string): void {
    if (lang === 'fr' || lang === 'en' || lang === 'ar') {
      this.currentLang = lang;
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      }
    }
  }

  getLanguage(): Language {
    return this.currentLang;
  }

  translate(key: string): string {
    return this.dictionary[key]?.[this.currentLang] || key;
  }
}