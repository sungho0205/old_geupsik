const schools = {
  이스터에그: '7031158',
  세종과학고: '7010816',
  서울국제고: '7010817',
  해성여자고: '7010818',
  경일중경영정보고: '7010823',
  구현고: '7010827',
  한강미디어고: '7010828',
  대동세무고: '7010833',
  경복비즈니스고: '7010835',
  서울방송고: '7010836',
  성암국제무역고: '7010837',
  한국한성화교중고: '7010838',
  일성여자고: '7010863',
  경일경영정보고: '7010865',
  청암고: '7010867',
  진형고: '7010869',
  성지고: '7010871',
  성지고: '7010873',
  신동신정보산업고: '7010875',
  한림실업고: '7010879',
  청량정보고: '7010880',
  한림초중실업연예예술고: '7010881',
  은평고: '7010882',
  진관고: '7010883',
  신도림고: '7010884',
  수명고: '7010885',
  성수고: '7010886',
  미양고: '7010887',
  서울문화고: '7010888',
  성동글로벌경영고: '7010889',
  서울공연예술고: '7010906',
  리라아트고: '7010908',
  선일이비즈니스고: '7010909',
  염광여자메디텍고: '7010910',
  한세사이버보안고: '7010911',
  한림연예예술고: '7010914',
  상일미디어고: '7010916',
  압구정고: '7010917',
  하나고: '7010918',
  강일고: '7010958',
  문현고: '7010959',
  서울아이티고: '7010960',
  신진자동차고: '7010961',
  은평메디텍고: '7010962',
  영락유헬스고: '7010963',
  서울금융고: '7010964',
  동양고: '7010965',
  국악고: '7010976',
  신도고: '7010983',
  선사고: '7010984',
  삼각산고: '7010985',
  세그루패션디자인고: '7011084',
  송곡관광고: '7011085',
  동구마케팅고: '7011086',
  홍익디자인고: '7011087',
  영신간호비즈니스고: '7011088',
  화곡보건경영고: '7011089',
  서울대학교사범대학부설고: '7011109',
  구암고: '7011111',
  잠일고: '7011112',
  휘봉고: '7011113',
  서울연희미용고: '7011114',
  현강정보고: '7011115',
  경일중경영정보고: '7011116',
  성지중고: '7011117',
  신동신중정보산업고: '7011118',
  서울연희미용고: '7011119',
  서울자동차고: '7011120',
  일성여자중고: '7011121',
  정암미용고: '7011122',
  진형중고: '7011124',
  청량정보고: '7011125',
  청암중고: '7011126',
  한국예술고: '7011127',
  한림초중실업연예예술고: '7011128',
  경일경영정보고: '7011133',
  성지중고: '7011134',
  성지고: '7011136',
  신동신정보산업고: '7011138',
  일성여자고: '7011140',
  진형고: '7011142',
  청암고: '7011144',
  한림실업고: '7011148',
  한림연예예술고: '7011149',
  청량정보고: '7011150',
  가재울고: '7011169',
  성덕고: '7011179',
  서울도시과학기술고: '7011180',
  예림디자인고: '7011184',
  동일여자상업고: '7011185',
  대일관광고: '7011186',
  서울컨벤션고: '7011213',
  서일국제경영고: '7011214',
  서울실용음악고: '7011216',
  대경상업고: '7011301',
  고명경영고: '7011303',
  서울항공비즈니스고: '7011311',
  계성고: '7011312',
  선정국제관광고: '7011315',
  신진과학기술고: '7011316',
  도선고: '7011318',
  금호고: '7011319',
  서울다솜관광고: '7011320',
  풍문고: '7011457',
  영락의료과학고: '7011482',
  서울의료보건고: '7011486',
  고명외식고: '7011487',
  광신방송예술고: '7011488',
  단국대학교부속소프트웨어고: '7011489',
  동명생활경영고: '7011490',
  서일문화예술고: '7011491',
  서울신정고: '7011492',
  인덕과학기술고: '7011493',
  서울동산고: '7011494',
  용산철도고: '7011495',
  해동공민고: '7061162',
  난나학교: '7010928',
  국악학교: '7010977',
  미래학교: '7011099',
  구로다애다문화학교: '7011194',
  가재울중학교: '7031261',
  아현중학교부설방송통신중학교: '7031272',
  천왕중학교: '7041238',
  항동중학교: '7041262',
  신길중학교: '7041263',
  한국삼육중학교: '7051259',
  성동여자중학교: '7061127',
  서울대학교사범대학부설여자중학교: '7061129',
  해동공민고: '7061162',
  강신중학교: '7081484',
  경서중학교: '7081485',
  공진중학교: '7081486',
  공항중학교: '7081487',
  금옥중학교: '7081488',
  등명중학교: '7081489',
  등원중학교: '7081490',
  목동중학교: '7081491',
  목운중학교: '7081492',
  목일중학교: '7081493',
  방원중학교: '7081494',
  방화중학교: '7081495',
  백석중학교: '7081496',
  삼정중학교: '7081497',
  성재중학교: '7081498',
  송정중학교: '7081499',
  수명중학교: '7081500',
  신남중학교: '7081501',
  신목중학교: '7081502',
  신서중학교: '7081503',
  신원중학교: '7081504',
  신월중학교: '7081505',
  신화중학교: '7081506',
  양강중학교: '7081507',
  양동중학교: '7081508',
  양서중학교: '7081509',
  양천중학교: '7081510',
  염경중학교: '7081511',
  염창중학교: '7081512',
  월촌중학교: '7081513',
  화원중학교: '7081514',
  마곡중학교: '7081515',
  덕원중학교: '7081516',
  등촌중학교: '7081517',
  마포중학교: '7081518',
  명덕여자중학교: '7081519',
  봉영여자중학교: '7081520',
  신정여자중학교: '7081521',
  양정중학교: '7081522',
  영도중학교: '7081523',
  화곡중학교: '7081524',
  마곡하늬중학교: '7081540',
  개원중학교: '7091420',
  개포중학교: '7091421',
  경원중학교: '7091422',
  구룡중학교: '7091423',
  대명중학교: '7091424',
  대왕중학교: '7091425',
  대청중학교: '7091426',
  대치중학교: '7091427',
  도곡중학교: '7091428',
  반포중학교: '7091429',
  방배중학교: '7091430',
  봉은중학교: '7091431',
  서운중학교: '7091432',
  서일중학교: '7091433',
  서초중학교: '7091434',
  수서중학교: '7091435',
  신구중학교: '7091436',
  신동중학교: '7091437',
  신반포중학교: '7091438',
  신사중학교: '7091439',
  압구정중학교: '7091440',
  언남중학교: '7091441',
  언북중학교: '7091442',
  언주중학교: '7091443',
  역삼중학교: '7091444',
  영동중학교: '7091445',
  원촌중학교: '7091446',
  이수중학교: '7091447',
  청담중학교: '7091448',
  단국대학교사범대학부속중학교: '7091449',
  동덕여자중학교: '7091450',
  서문여자중학교: '7091451',
  세화여자중학교: '7091452',
  숙명여자중학교: '7091453',
  은성중학교: '7091454',
  중동중학교: '7091455',
  진선여자중학교: '7091456',
  휘문중학교: '7091457',
  세곡중학교: '7091461',
  수송중학교: '7091466',
  세종중학교: '7091467',
  내곡중학교: '7091486',
  강북중학교: '7121341',
  개운중학교: '7121342',
  미양중학교: '7121343',
  번동중학교: '7121344',
  북악중학교: '7121345',
  삼각산중학교: '7121346',
  삼선중학교: '7121347',
  석관중학교: '7121348',
  수송중학교__1: '7121349',
  수유중학교: '7121350',
  용문중학교: '7121351',
  월곡중학교: '7121352',
  인수중학교: '7121353',
  장위중학교: '7121354',
  종암중학교: '7121355',
  화계중학교: '7121356',
  길음중학교: '7121357',
  고려대학교사범대학부속중학교: '7121358',
  고명중학교: '7121359',
  남대문중학교: '7121360',
  동구여자중학교: '7121361',
  서라벌중학교: '7121362',
  성신여자중학교: '7121363',
  성암여자중학교: '7121364',
  신일중학교: '7121365',
  창문여자중학교: '7121366',
  한성여자중학교: '7121367',
  홍익대학교사범대학부속중학교: '7121368',
  영훈국제중학교: '7121369',
  숭곡중학교: '7121370',
  서울대학교사범대학부설중학교: '7121371',
  가락중학교: '7130165',
  가원중학교: '7130166',
  강동중학교: '7130167',
  강명중학교: '7130168',
  강일중학교: '7130169',
  거원중학교: '7130170',
  고덕중학교: '7130171',
  동북중학교: '7130172',
  동신중학교: '7130173',
  둔촌중학교: '7130174',
  명일중학교: '7130175',
  문정중학교: '7130176',
  문현중학교: '7130177',
  방산중학교: '7130178',
  방이중학교: '7130179',
  배명중학교: '7130180',
  배재중학교: '7130181',
  보성중학교: '7130182',
  보인중학교: '7130183',
  상일여자중학교: '7130184',
  서울체육중학교: '7130185',
  석촌중학교: '7130186',
  성내중학교: '7130187',
  성덕여자중학교: '7130188',
  세륜중학교: '7130189',
  송례중학교: '7130190',
  송파중학교: '7130191',
  신명중학교: '7130192',
  신암중학교: '7130193',
  신천중학교: '7130194',
  아주중학교: '7130195',
  영파여자중학교: '7130196',
  오금중학교: '7130197',
  오륜중학교: '7130198',
  오주중학교: '7130199',
  일신여자중학교: '7130200',
  잠신중학교: '7130201',
  잠실중학교: '7134088',
  정신여자중학교: '7134089',
  천일중학교: '7134090',
  천호중학교: '7134091',
  풍납중학교: '7134092',
  풍성중학교: '7134093',
  한산중학교: '7134094',
  한영중학교: '7134095',
  가락일초중학교: '7134096',
  해누리중학교: '7134097',
  강빛중학교: '7134098',
  강남중학교: '7134099',
  강현중학교: '7134100',
  관악중학교: '7134101',
  광신중학교: '7134102',
  구암중학교: '7134103',
  국사봉중학교: '7134104',
  난우중학교: '7134105',
  남강중학교: '7134106',
  남서울중학교: '7134107',
  남성중학교: '7134108',
  당곡중학교: '7134109',
  대방중학교: '7134110',
  동양중학교: '7134111',
  동작중학교: '7134112',
  문창중학교: '7134113',
  미성중학교: '7134114',
  봉림중학교: '7134115',
  봉원중학교: '7134116',
  사당중학교: '7134117',
  삼성중학교: '7134118',
  상도중학교: '7134119',
  상현중학교: '7134120',
  서울문영여자중학교: '7134121',
  성남중학교: '7134122',
  성보중학교: '7134123',
  숭의여자중학교: '7134124',
  신관중학교: '7134125',
  신림중학교: '7134126',
  영등포중학교: '7134127',
  인헌중학교: '7134128',
  장승중학교: '7134129',
  중앙대학교사범대학부속중학교: '7134130',
  건국대학교사범대학부속중학교: '7134131',
  경수중학교: '7134132',
  경일중학교: '7134133',
  광남중학교: '7134134',
  광양중학교: '7134135',
  광장중학교: '7134136',
  광진중학교: '7134137',
  광희중학교: '7134138',
  구의중학교: '7134139',
  동국대학교사범대학부속여자중학교: '7134140',
  동마중학교: '7134141',
  대원국제중학교: '7134142',
  마장중학교: '7134143',
  무학중학교: '7134144',
  성수중학교: '7134145',
  성원중학교: '7134146',
  신양중학교: '7134147',
  양진중학교: '7134148',
  옥정중학교: '7134149',
  용곡중학교: '7134150',
  자양중학교: '7134151',
  한양대학교사범대학부속중학교: '7134152',
  행당중학교: '7134153',
  한마음미술학원: '7134154',
  선화예술중학교: '7134155',
  경희초: '7021079',
  금성초: '7021080',
  군자초: '7021082',
  답십리초: '7021083',
  동답초: '7021084',
  동원초: '7021085',
  망우초: '7021086',
  면남초: '7021087',
  면동초: '7021088',
  면목초: '7021089',
  면북초: '7021090',
  면일초: '7021091',
  면중초: '7021092',
  묵동초: '7021093',
  묵현초: '7021094',
  배봉초: '7021095',
  봉화초: '7021096',
  상봉초: '7021097',
  신내초: '7021098',
  신답초: '7021099',
  신묵초: '7021100',
  신현초: '7021101',
  안평초: '7021102',
  용두초: '7021103',
  원묵초: '7021104',
  이문초: '7021105',
  장평초: '7021106',
  전곡초: '7021107',
  전농초: '7021108',
  전동초: '7021109',
  종암초: '7021110',
  중곡초: '7021111',
  중랑초: '7021112',
  중목초: '7021113',
  중화초: '7021114',
  중흥초: '7021115',
  청량초: '7021116',
  홍릉초: '7021117',
  홍파초: '7021118',
  휘경초: '7021119',
  휘봉초: '7021120',
  은석초: '7021121',
  삼육초: '7021168',
  새솔초: '7021181',
  경기초: '7031110',
  명지초: '7031111',
  갈현초: '7031112',
  고은초: '7031113',
  공덕초: '7031114',
  구산초: '7031115',
  구현초: '7031116',
  금화초: '7031117',
  녹번초: '7031118',
  대신초: '7031119',
  대은초: '7031120',
  대조초: '7031121',
  동교초: '7031122',
  마포초: '7031123',
  망원초: '7031124',
  미동초: '7031125',
  북가좌초: '7031126',
  북성초: '7031127',
  북한산초: '7031128',
  불광초: '7031129',
  상신초: '7031130',
  상암초: '7031131',
  상지초: '7031132',
  서강초: '7031133',
  서교초: '7031134',
  서신초: '7031135',
  성산초: '7031136',
  성서초: '7031137',
  성원초: '7031138',
  소의초: '7031139',
  수색초: '7031140',
  신도초: '7031141',
  신북초: '7031142',
  신사초: '7031143',
  신석초: '7031144',
  아현초: '7031145',
  안산초: '7031146',
  역촌초: '7031147',
  연가초: '7031148',
  연광초: '7031149',
  연신초: '7031150',
  연은초: '7031151',
  연천초: '7031152',
  연희초: '7031153',
  염리초: '7031154',
  용강초: '7031155',
  은명초: '7031156',
  은진초: '7031157',
  은평초: '7031158',
  응암초: '7031159',
  인왕초: '7031160',
  중동초: '7031161',
  증산초: '7031162',
  진관초: '7031163',
  창서초: '7031164',
  창천초: '7031165',
  한서초: '7031166',
  홍연초: '7031167',
  홍은초: '7031168',
  홍제초: '7031169',
  선일초: '7031170',
  예일초: '7031172',
  은혜초: '7031173',
  이화여자대학교사범대학부속초: '7031174',
  추계초: '7031175',
  충암초: '7031176',
  홍익대학교사범대학부속초: '7031177',
  수리초: '7031230',
  하늘초: '7031231',
  은빛초: '7031232',
  가재울초: '7031278',
  어울초: '7031285',
  동광초: '7041099',
  가산초: '7041100',
  개명초: '7041101',
  개봉초: '7041102',
  개웅초: '7041103',
  고산초: '7041104',
  고원초: '7041105',
  고척초: '7041106',
  구로남초: '7041107',
  구로초: '7041108',
  구일초: '7041109',
  금동초: '7041110',
  금산초: '7041111',
  금천초: '7041112',
  당산초: '7041113',
  당서초: '7041114',
  당중초: '7041115',
  대길초: '7041116',
  대동초: '7041117',
  대방초: '7041118',
  대영초: '7041119',
  덕의초: '7041120',
  도림초: '7041121',
  도신초: '7041122',
  독산초: '7041123',
  동구로초: '7041124',
  두산초: '7041125',
  매봉초: '7041126',
  문교초: '7041127',
  문래초: '7041128',
  문백초: '7041129',
  문성초: '7041130',
  미래초: '7041131',
  백산초: '7041132',
  선유초: '7041133',
  세곡초: '7041134',
  시흥초: '7041135',
  신구로초: '7041136',
  신대림초: '7041137',
  신도림초: '7041138',
  신미림초: '7041139',
  신영초: '7041140',
  신흥초: '7041141',
  안천초: '7041142',
  여의도초: '7041143',
  영남초: '7041144',
  영동초: '7041145',
  영등포초: '7041146',
  영림초: '7041147',
  영문초: '7041148',
  영서초: '7041149',
  영신초: '7041150',
  영원초: '7041151',
  영일초: '7041152',
  영중초: '7041153',
  오류남초: '7041154',
  오류초: '7041155',
  오정초: '7041156',
  온수초: '7041157',
  우신초: '7041158',
  윤중초: '7041159',
  정심초: '7041160',
  탑동초: '7041161',
  천왕초: '7041209',
  천이초: '7041254',
  금나래초: '7041260',
  하늘숲초: '7041266',
  항동초: '7041267',
  동북초: '7051109',
  상명초: '7051110',
  가인초: '7051111',
  계상초: '7051112',
  공릉초: '7051113',
  공연초: '7051114',
  노원초: '7051115',
  노일초: '7051116',
  녹천초: '7051117',
  누원초: '7051118',
  당현초: '7051119',
  덕암초: '7051120',
  도봉초: '7051121',
  동일초: '7051122',
  방학초: '7051123',
  백운초: '7051124',
  불암초: '7051125',
  상경초: '7051126',
  상계초: '7051127',
  상곡초: '7051128',
  상수초: '7051129',
  상원초: '7051130',
  상월초: '7051131',
  상천초: '7051132',
  선곡초: '7051133',
  수락초: '7051134',
  수암초: '7051135',
  숭미초: '7051136',
  신계초: '7051137',
  신방학초: '7051138',
  신상계초: '7051139',
  신창초: '7051140',
  신학초: '7051141',
  신화초: '7051142',
  쌍문초: '7051143',
  연지초: '7051144',
  연촌초: '7051145',
  오봉초: '7051146',
  온곡초: '7051147',
  용동초: '7051148',
  용원초: '7051149',
  원광초: '7051150',
  월계초: '7051151',
  월천초: '7051152',
  을지초: '7051153',
  자운초: '7051154',
  중계초: '7051155',
  중원초: '7051156',
  중평초: '7051157',
  중현초: '7051158',
  창경초: '7051159',
  창도초: '7051160',
  창동초: '7051161',
  창림초: '7051162',
  창원초: '7051163',
  창일초: '7051164',
  청계초: '7051165',
  초당초: '7051166',
  태랑초: '7051167',
  태릉초: '7051168',
  한천초: '7051169',
  청원초: '7051170',
  태강삼육초: '7051171',
  한신초: '7051172',
  화랑초: '7051173',
  동산초: '7061054',
  리라초: '7061055',
  상명대학교사범대학부속초: '7061056',
  광희초: '7061057',
  교동초: '7061058',
  금양초: '7061059',
  남산초: '7061060',
  남정초: '7061061',
  덕수초: '7061062',
  독립문초: '7061063',
  매동초: '7061064',
  명신초: '7061065',
  보광초: '7061066',
  봉래초: '7061067',
  삼광초: '7061068',
  서빙고초: '7061069',
  세검정초: '7061070',
  숭신초: '7061071',
  신당초: '7061072',
  신용산초: '7061073',
  용산초: '7061074',
  용암초: '7061075',
  원효초: '7061076',
  이태원초: '7061077',
  장충초: '7061078',
  재동초: '7061079',
  창신초: '7061080',
  청구초: '7061081',
  청운초: '7061082',
  청파초: '7061083',
  충무초: '7061084',
  한강초: '7061085',
  한남초: '7061086',
  혜화초: '7061087',
  효제초: '7061088',
  후암초: '7061089',
  흥인초: '7061090',
  숭의초: '7061091',
  신광초: '7061092',
  운현초: '7061093',
  서울대학교사범대학부설초: '7061128',
  가곡초: '7081418',
  가양초: '7081419',
  갈산초: '7081420',
  강서초: '7081421',
  강신초: '7081422',
  강월초: '7081423',
  개화초: '7081424',
  경인초: '7081425',
  계남초: '7081426',
  공진초: '7081427',
  공항초: '7081428',
  남명초: '7081429',
  내발산초: '7081430',
  등마초: '7081431',
  등명초: '7081432',
  등서초: '7081433',
  등양초: '7081434',
  등원초: '7081435',
  등촌초: '7081436',
  등현초: '7081437',
  목동초: '7081438',
  목운초: '7081439',
  목원초: '7081440',
  발산초: '7081441',
  방화초: '7081442',
  백석초: '7081443',
  삼정초: '7081444',
  서정초: '7081445',
  송정초: '7081446',
  송화초: '7081447',
  수명초: '7081448',
  신강초: '7081449',
  신곡초: '7081450',
  신기초: '7081451',
  신남초: '7081452',
  신목초: '7081453',
  신서초: '7081454',
  신원초: '7081455',
  신월초: '7081456',
  신정초: '7081457',
  양강초: '7081458',
  양동초: '7081459',
  양명초: '7081460',
  양목초: '7081461',
  양원초: '7081462',
  양천초: '7081463',
  양화초: '7081464',
  염강초: '7081465',
  염경초: '7081466',
  염동초: '7081467',
  염창초: '7081468',
  영도초: '7081469',
  우장초: '7081470',
  월정초: '7081471',
  월촌초: '7081472',
  은정초: '7081473',
  장수초: '7081474',
  정곡초: '7081475',
  정목초: '7081476',
  지향초: '7081477',
  치현초: '7081478',
  탑산초: '7081479',
  화곡초: '7081480',
  화일초: '7081481',
  신은초: '7081482',
  유석초: '7081483',
  서울교육대학교부설초: '7091367',
  계성초: '7091368',
  개원초: '7091369',
  개일초: '7091370',
  개포초: '7091371',
  구룡초: '7091372',
  논현초: '7091373',
  대곡초: '7091374',
  대도초: '7091375',
  대모초: '7091376',
  대왕초: '7091377',
  대진초: '7091378',
  대청초: '7091379',
  대치초: '7091380',
  대현초: '7091381',
  도곡초: '7091382',
  도성초: '7091383',
  매헌초: '7091384',
  반원초: '7091385',
  반포초: '7091386',
  방배초: '7091387',
  방일초: '7091388',
  방현초: '7091389',
  봉은초: '7091390',
  삼릉초: '7091391',
  서래초: '7091392',
  서원초: '7091393',
  서이초: '7091394',
  서일초: '7091395',
  서초초: '7091396',
  수서초: '7091397',
  신구초: '7091398',
  신동초: '7091399',
  신중초: '7091400',
  압구정초: '7091401',
  양재초: '7091402',
  양전초: '7091403',
  언남초: '7091404',
  언북초: '7091405',
  언주초: '7091406',
  역삼초: '7091407',
  영희초: '7091408',
  왕북초: '7091409',
  우암초: '7091410',
  원명초: '7091411',
  원촌초: '7091412',
  이수초: '7091413',
  일원초: '7091414',
  잠원초: '7091415',
  청담초: '7091416',
  포이초: '7091417',
  학동초: '7091418',
  우면초: '7091419',
  세명초: '7091458',
  우솔초: '7091460',
  율현초: '7091468',
  자곡초: '7091469',
  개운초: '7121298',
  길원초: '7121299',
  길음초: '7121300',
  돈암초: '7121301',
  동신초: '7121302',
  미아초: '7121303',
  미양초: '7121304',
  번동초: '7121305',
  삼각산초: '7121306',
  삼선초: '7121307',
  삼양초: '7121308',
  석계초: '7121309',
  석관초: '7121310',
  성북초: '7121311',
  송중초: '7121312',
  송천초: '7121313',
  수송초: '7121314',
  수유초: '7121315',
  숭곡초: '7121316',
  숭덕초: '7121317',
  숭례초: '7121318',
  숭인초: '7121319',
  안암초: '7121320',
  오현초: '7121321',
  우이초: '7121322',
  월곡초: '7121323',
  유현초: '7121324',
  인수초: '7121325',
  일신초: '7121326',
  장곡초: '7121327',
  장월초: '7121328',
  장위초: '7121329',
  정덕초: '7121330',
  정릉초: '7121331',
  정수초: '7121332',
  청덕초: '7121333',
  화계초: '7121334',
  광운초: '7121335',
  대광초: '7121336',
  매원초: '7121337',
  성신초: '7121338',
  영훈초: '7121339',
  우촌초: '7121340',
  가동초: '7130101',
  가락초: '7130102',
  가원초: '7130103',
  가주초: '7130104',
  강덕초: '7130105',
  강동초: '7130106',
  강명초: '7130107',
  강일초: '7130108',
  개롱초: '7130109',
  거여초: '7130110',
  거원초: '7130111',
  고덕초: '7130112',
  고명초: '7130113',
  고일초: '7130114',
  길동초: '7130115',
  남천초: '7130116',
  대명초: '7130117',
  둔촌초: '7130118',
  마천초: '7130119',
  명덕초: '7130120',
  명원초: '7130121',
  명일초: '7130122',
  묘곡초: '7130123',
  문덕초: '7130124',
  문정초: '7130125',
  문현초: '7130126',
  방산초: '7130127',
  방이초: '7130128',
  버들초: '7130129',
  삼전초: '7130130',
  상일초: '7130131',
  석촌초: '7130132',
  선린초: '7130133',
  선사초: '7130134',
  성내초: '7130135',
  성일초: '7130136',
  세륜초: '7130137',
  송례초: '7130138',
  송전초: '7130139',
  송파초: '7130140',
  신가초: '7130141',
  신명초: '7130142',
  신암초: '7130143',
  신천초: '7130144',
  아주초: '7130145',
  영풍초: '7130146',
  오금초: '7130147',
  오륜초: '7130148',
  위례초: '7130149',
  잠동초: '7130150',
  잠신초: '7130151',
  잠실초: '7130152',
  잠일초: '7130153',
  잠전초: '7130154',
  잠현초: '7130155',
  중대초: '7130156',
  천동초: '7130157',
  천일초: '7130158',
  천호초: '7130159',
  토성초: '7130160',
  평화초: '7130161',
  풍납초: '7130162',
  풍성초: '7130163',
  한산초: '7130164',
  위례별초: '7130245',
  강솔초: '7130251',
  해누리초: '7130255',
  강빛초: '7130266',
  강남초: '7132080',
  관악초: '7132081',
  구암초: '7132082',
  난곡초: '7132083',
  난우초: '7132084',
  난향초: '7132085',
  남부초: '7132086',
  남사초: '7132087',
  남성초: '7132088',
  노량진초: '7132089',
  당곡초: '7132090',
  대림초: '7132091',
  동작초: '7132092',
  문창초: '7132093',
  미성초: '7132094',
  보라매초: '7132095',
  본동초: '7132096',
  봉천초: '7132097',
  봉현초: '7132098',
  사당초: '7132099',
  삼성초: '7132100',
  삼일초: '7132101',
  상도초: '7132102',
  상현초: '7132103',
  신길초: '7132104',
  신남성초: '7132105',
  신림초: '7132106',
  신봉초: '7132107',
  신상도초: '7132108',
  신성초: '7132109',
  신우초: '7132110',
  영본초: '7132111',
  영화초: '7132112',
  원당초: '7132113',
  원신초: '7132114',
  은로초: '7132115',
  은천초: '7132116',
  인헌초: '7132117',
  조원초: '7132118',
  청룡초: '7132119',
  행림초: '7132120',
  흑석초: '7132121',
  중앙대학교사범대학부속초: '7132122',
  경복초: '7134077',
  경동초: '7134078',
  경수초: '7134079',
  경일초: '7134080',
  광남초: '7134081',
  광장초: '7134082',
  광진초: '7134083',
  구남초: '7134084',
  구의초: '7134085',
  금북초: '7134086',
  금옥초: '7134087',
  금호초: '7134088',
  동명초: '7134089',
  동의초: '7134090',
  동자초: '7134091',
  동호초: '7134092',
  마장초: '7134093',
  무학초: '7134094',
  사근초: '7134095',
  성수초: '7134096',
  성자초: '7134097',
  송원초: '7134098',
  신양초: '7134099',
  신자초: '7134100',
  양남초: '7134101',
  양진초: '7134102',
  옥수초: '7134103',
  옥정초: '7134104',
  용곡초: '7134105',
  용답초: '7134106',
  용마초: '7134107',
  응봉초: '7134108',
  자양초: '7134109',
  장안초: '7134110',
  중광초: '7134111',
  중마초: '7134112',
  행당초: '7134113',
  행현초: '7134114',
  화양초: '7134115',
  성동초: '7134116',
  세종초: '7134117',
  한양초: '7134118',
  숭신초: '7134150',
};

export default schools;
