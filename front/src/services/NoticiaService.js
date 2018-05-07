import moment from 'moment';

const noticiasTitulos = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sic enim censent, oport",
    "Teneo, inquit, finem illi videri nihil dolere. Primum quid tu dicis breve? Est, ",
    "Omnis enim est natura diligens sui. Oratio me istius philosophi non offendit; ",
    "Tibi hoc incredibile, quod beatissimum. Pollicetur certe. Equidem e Cn. Quid ad ",
    "Pauca mutat vel plura sane; Primum in nostrane potestate est, quid meminerimus? ",
    "Deprehensus omnem poenam contemnet. Memini vero, inquam; Hoc tu nunc in illo pro",
    "Reguli reiciendam; Nos commodius agimus. Et quidem, inquit, vehementer errat; ",
    "Vestri haec verecundius, illi fortasse constantius. Age sane, inquam. Quibusnam ",
    "An est aliquid, quod te sua sponte delectet? Vitiosum est enim in dividendo part",
    "Nihil enim hoc differt. Conferam tecum, quam cuique verso rem subicias; Mihi eni",
    "Itaque his sapiens semper vacabit. Omnia contraria, quos etiam insanos esse vult",
    "Tum Torquatus: Prorsus, inquit, assentior; In schola desinis. Quod iam a me expe"
];

const noticiasCorpos = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illis videtur, qui illu\
    d non dubitant bonum dicere -; Duo Reges: constructio interrete. Nam diligi et c\
    arum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem ef\
    ficit. Est autem eius generis actio quoque quaedam, et quidem talis, ut ratio po\
    stulet agere aliquid et facere eorum. Quid censes eos esse facturos, qui omnino \
    virtutem a bonorum fine segregaverunt, Epicurum, Hieronymum, illos etiam, si qui\
    Carneadeum finem tueri volunt? Nam, ut saepe iam dixi, in infirma aetate inbeci\
    llaque mente vis naturae quasi per caliginem cernitur; Neque solum ea communia, \
    verum etiam paria esse dixerunt. De quibus etsi a Chrysippo maxime est elaboratu\
    m, tamen a Zenone minus multo quam ab antiquis; Sed non alienum est, quo faciliu\
    s vis verbi intellegatur, rationem huius verbi faciendi Zenonis exponere. Alteru\
    m autem genus est magnarum verarumque virtutum, quas appellamus voluntarias, ut \
    prudentiam, temperantiam, fortitudinem, iustitiam et reliquas eiusdem generis. S\
    ic vester sapiens magno aliquo emolumento commotus cicuta, si opus erit, dimicab\
    it. Voluptatis causa, etiam si eam non consequare, aut non dolendi, etiam si id \
    assequi nequeas, aut eorum, quae secundum naturam sunt, adipiscendi, etiam si ni\
    hil consequare.",
    "Cur haec eadem Democritus? Nam nisi hoc optineatur, id solum bonum esse, quod ho\
    nestum sit, nullo modo probari possit beatam vitam virtute effici. Quod enim vit\
    uperabile est per se ipsum, id eo ipso vitium nominatum puto, vel etiam a vitio \
    dictum vituperari. Nam de summo mox, ut dixi, videbimus et ad id explicandum dis\
    putationem omnem conferemus. An vero displicuit ea, quae tributa est animi virtu\
    tibus tanta praestantia? Quare hoc videndum est, possitne nobis hoc ratio philos\
    ophorum dare. Hi curatione adhibita levantur in dies, valet alter plus cotidie, \
    alter videt. Nec enim figura corporis nec ratio excellens ingenii humani signifi\
    cat ad unam hanc rem natum hominem, ut frueretur voluptatibus. Duarum enim vitar\
    um nobis erunt instituta capienda. ",
    "Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi. Audax ne\
    gotium, dicerem impudens, nisi hoc institutum postea translatum ad philosophos n\
    ostros esset. Illud urgueam, non intellegere eum quid sibi dicendum sit, cum dol\
    orem summum malum esse dixerit. Itaque sensibus rationem adiunxit et ratione eff\
    ecta sensus non reliquit. Materiam vero rerum et copiam apud hos exilem, apud il\
    los uberrimam reperiemus. Sed quod proximum fuit non vidit. Fadio Gallo, cuius i\
    n testamento scriptum esset se ab eo rogatum ut omnis hereditas ad filiam perven\
    iret. Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ulla\
    m aut fugiendam aut expetendam. Sed ad haec, nisi molestum est, habeo quae velim\
    . ",
    "Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. Nullus \
    est igitur cuiusquam dies natalis. Eodem modo is enim tibi nemo dabit, quod, exp\
    etendum sit, id esse laudabile. Atque etiam valítudinem, vires, vacuitatem dolor\
    is non propter utilitatem solum, sed etiam ipsas propter se expetemus. Studet en\
    im meus is audire Cicero quaenam sit istius veteris, quam commemoras, Academiae \
    de finibus bonorum Peripateticorumque sententia. Ad corpus diceres pertinere-, s\
    ed ea, quae dixi, ad corpusne refers? Non potes, nisi retexueris illa. Haec non \
    erant eius, qui innumerabilis mundos infinitasque regiones, quarum nulla esset o\
    ra, nulla extremitas, mente peragravisset. Cum sciret confestim esse moriendum e\
    amque mortem ardentiore studio peteret, quam Epicurus voluptatem petendam putat\
    . Non enim ipsa genuit hominem, sed accepit a natura inchoatum. ",
    "Esto, fecerit, si ita vis, Torquatus propter suas utilitatesmalo enim dicere qua\
    m voluptates, in tanto praesertim viro-, num etiam eius collega P. In motu et in\
    statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet? Inqu\
    it, an parum disserui non verbis Stoicos a Peripateticis, sed universa re et tot\
    a sententia dissidere? Crassus fuit, qui tamen solebat uti suo bono, ut hodie es\
    t noster Pompeius, cui recte facienti gratia est habenda; Nemo igitur esse beatu\
    s potest. Nam bonum ex quo appellatum sit, nescio, praepositum ex eo credo, quod\
    praeponatur aliis. ",
    "Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaeda\
    m describit attentius, ne patriam quidem captam esse senserit? Et adhuc quidem i\
    ta nobis progresso ratio est, ut ea duceretur omnis a prima commendatione natura\
    e. Non potes ergo ista tueri, Torquate, mihi crede, si te ipse et tuas cogitatio\
    nes et studia perspexeris; Commoda autem et incommoda in eo genere sunt, quae pr\
    aeposita et reiecta diximus; Cur id non ita fit? Et nunc quidem quod eam tuetur,\
    ut de vite potissimum loquar, est id extrinsecus; Modo etiam paulum ad dexteram\
    de via declinavi, ut ad Pericli sepulcrum accederem. Animi enim quoque dolores \
    percipiet omnibus partibus maiores quam corporis. At modo dixeras nihil in istis\
    rebus esse, quod interesset. Ab his oratores, ab his imperatores ac rerum publi\
    carum principes extiterunt. Varietates autem iniurasque fortunae facile veteres \
    philosophorum praeceptis instituta vita superabat. Aliter homines, aliter philos\
    ophos loqui putas oportere? ",
    "Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Audeo dicere, i\
    nquit. Est autem a te semper dictum nec gaudere quemquam nisi propter corpus nec\
    dolere. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Hic\
    si Peripateticus fuisset, permansisset, credo, in sententia, qui dolorem malum \
    dicunt esse, de asperitate autem eius fortiter ferenda praecipiunt eadem, quae S\
    toici. Habent enim et bene longam et satis litigiosam disputationem. ",
    "Non enim in selectione virtus ponenda erat, ut id ipsum, quod erat bonorum ultim\
    um, aliud aliquid adquireret. Sed fortuna fortis; Rem unam praeclarissimam omniu\
    m maximeque laudandam, penitus viderent, quonam gaudio complerentur, cum tantope\
    re eius adumbrata opinione laetentur? Non ego tecum iam ita iocabor, ut isdem hi\
    s de rebus, cum L. An vero, inquit, quisquam potest probare, quod perceptfum, qu\
    od. Ut id aliis narrare gestiant? ",
    "Cuius similitudine perspecta in formarum specie ac dignitate transitum est ad ho\
    nestatem dictorum atque factorum. Sin autem est in ea, quod quidam volunt, nihil\
    impedit hanc nostram comprehensionem summi boni. Neque enim disputari sine repr\
    ehensione nec cum iracundia aut pertinacia recte disputari potest. An vero, inqu\
    it, quisquam potest probare, quod perceptfum, quod. ",
    "Nam et ille apud Trabeam voluptatem animi nimiam laetitiam dicit eandem, quam il\
    le Caecilianus, qui omnibus laetitiis laetum esse se narrat. Quia dolori non vol\
    uptas contraria est, sed doloris privatio. In omni enim arte vel studio vel quav\
    is scientia vel in ipsa virtute optimum quidque rarissimum est. Res tota, Torqua\
    te, non doctorum hominum, velle post mortem epulis celebrari memoriam sui nomini\
    s. Ratio quidem vestra sic cogit. Quis animo aequo videt eum, quem inpure ac fla\
    gitiose putet vivere? Verum tamen cum de rebus grandioribus dicas, ipsae res ver\
    ba rapiunt; Ne tum quidem te respicies et cogitabis sibi quemque natum esse et s\
    uis voluptatibus? Ita relinquet duas, de quibus etiam atque etiam consideret. ",
    "Deinde concludebas summum malum esse dolorem, summum bonum voluptatem! Lucius Th\
    orius Balbus fuit, Lanuvinus, quem meminisse tu non potes. Peccata autem partim \
    esse tolerabilia, partim nullo modo, propterea quod alia peccata plures, alia pa\
    uciores quasi numeros officii praeterirent. Crassus fuit, qui tamen solebat uti \
    suo bono, ut hodie est noster Pompeius, cui recte facienti gratia est habenda; P\
    erspicuum est enim, nisi aequitas, fides, iustitia proficiscantur a natura, et s\
    i omnia haec ad utilitatem referantur, virum bonum non posse reperiri; Praeterea\
    et appetendi et refugiendi et omnino rerum gerendarum initia proficiscuntur aut\
    a voluptate aut a dolore. Non minor, inquit, voluptas percipitur ex vilissimis \
    rebus quam ex pretiosissimis. In voluptate corporis-addam, si vis, animi, dum ea\
    ipsa, ut vultis, sit e corpore-situm est vivere beate. Ita fit illa conclusio n\
    on solum vera, sed ita perspicua, ut dialectici ne rationem quidem reddi putent \
    oportere: si illud, hoc; Quod autem principium officii quaerunt, melius quam Pyr\
    rho; ",
    "Minime id quidem, inquam, alienum, multumque ad ea, quae quaerimus, explicatio t\
    ua ista profecerit. Qui cum praetor quaestionem inter sicarios exercuisset, ita \
    aperte cepit pecunias ob rem iudicandam, ut anno proximo P. Quamquam ab iis phil\
    osophiam et omnes ingenuas disciplinas habemus; Atqui si, ut convenire debet int\
    er nos, est quaedam appetitio naturalis ea, quae secundum naturam sunt, appetens\
    , eorum omnium est aliquae summa facienda. ",
    "Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Q\
    uod ea non occurrentia fingunt, vincunt Aristonem; Ita cum ea volunt retinere, q\
    uae superiori sententiae conveniunt, in Aristonem incidunt; Quo studio cum satia\
    ri non possint, omnium ceterarum rerum obliti níhil abiectum, nihil humile cogit\
    ant; Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Huic m\
    ori optimum esse propter desperationem sapientiae, illi propter spem vivere. Qua\
    si vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. ",
    "Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Sed existimo te, s\
    icut nostrum Triarium, minus ab eo delectari, quod ista Platonis, Aristoteli, Th\
    eophrasti orationis ornamenta neglexerit. Itaque contra est, ac dicitis; Illo en\
    im addito iuste fit recte factum, per se autem hoc ipsum reddere in officio poni\
    tur. ",
    "Aeque enim contingit omnibus fidibus, ut incontentae sint. Est autem eius generi\
    s actio quoque quaedam, et quidem talis, ut ratio postulet agere aliquid et face\
    re eorum. Sextilio Rufo, cum is rem ad amicos ita deferret, se esse heredem Q. A\
    berat omnis dolor, qui si adesset, nec molliter ferret et tamen medicis plus qua\
    m philosophis uteretur. ",
    "Quid, cum fictas fabulas, e quibus utilitas nulla elici potest, cum voluptate le\
    gimus? Restincta enim sitis stabilitatem voluptatis habet, inquit, illa autem vo\
    luptas ipsius restinctionis in motu est. Temporibus autem quibusdam et aut offic\
    iis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae\
    sint et molestiae non recusandae. Illud dico, ea, quae dicat, praeclare inter s\
    e cohaerere. Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et com\
    parari potest. Quod quidem iam fit etiam in Academia. Verum esto: verbum ipsum v\
    oluptatis non habet dignitatem, nec nos fortasse intellegimus. Ego vero volo in \
    virtute vim esse quam maximam; Teneamus enim illud necesse est, cum consequens a\
    liquod falsum sit, illud, cuius id consequens sit, non posse esse verum. Atque a\
    dhuc ea dixi, causa cur Zenoni non fuisset, quam ob rem a superiorum auctoritate\
    discederet. Ne seges quidem igitur spicis uberibus et crebris, si avenam uspiam\
    videris, nec mercatura quaestuosa, si in maximis lucris paulum aliquid damni co\
    ntraxerit. Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam \
    et voluptatem pleniorem efficit. In enumerandis autem corporis commodis si quis \
    praetermissam a nobis voluptatem putabit, in aliud tempus ea quaestio differatur\
    . Si verbum sequimur, primum longius verbum praepositum quam bonum. ",
    "Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Sin\
    te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum ant\
    eponebas? Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa\
    rerum scientia; Hanc se tuus Epicurus omnino ignorare dicit quam aut qualem ess\
    e velint qui honestate summum bonum metiantur. Gloriosa ostentatio in constituen\
    do summo bono. An tu me de L. Atqui iste locus est, Piso, tibi etiam atque etiam\
    confirmandus, inquam; ",
    "Sed audiamus ipsum: Compensabatur, inquit, tamen cum his omnibus animi laetitia,\
    quam capiebam memoria rationum inventorumque nostrorum. Magni enim aestimabat p\
    ecuniam non modo non contra leges, sed etiam legibus partam. Crassus fuit, qui t\
    amen solebat uti suo bono, ut hodie est noster Pompeius, cui recte facienti grat\
    ia est habenda; Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id ess\
    e laudabile. Quis enim potest ea, quae probabilia videantur ei, non probare? Et \
    quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. ",
    "Atque ab his initiis profecti omnium virtutum et originem et progressionem perse\
    cuti sunt. Nam illud vehementer repugnat, eundem beatum esse et multis malis opp\
    ressum. Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in \
    mari abiecerat. Quid ad utilitatem tantae pecuniae? Pungunt quasi aculeis interr\
    ogatiunculis angustis, quibus etiam qui assentiuntur nihil commutantur animo et \
    idem abeunt, qui venerant. Expressa vero in iis aetatibus, quae iam confirmatae \
    sunt. Hoc autem loco tantum explicemus haec honesta, quae dico, praeterquam quod\
    nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Quod est\
    , ut dixi, habere ea, quae secundum naturam sint, vel omnia vel plurima et maxim\
    a. ",
    "Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram comprehensio\
    nem summi boni. Nam Pyrrho, Aristo, Erillus iam diu abiecti. Quaero igitur, quo \
    modo hae tantae commendationes a natura profectae subito a sapientia relictae si\
    nt. Quid loquor de nobis, qui ad laudem et ad decus nati, suscepti, instituti su\
    mus? Cuius ad naturam apta ratio vera illa et summa lex a philosophis dicitur. I\
    mmo sit sane nihil melius, inquam-nondum enim id quaero-, num propterea idem vol\
    uptas est, quod, ut ita dicam, indolentia? Cenasti in vita numquam bene, cum omn\
    ia in ista Consumis squilla atque acupensere cum decimano. Quicquid enim a sapie\
    ntia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Satis\
    ne vobis videor pro meo iure in vestris auribus commentatus? Quid tanto concursu\
    honestissimorum studiorum, tanto virtutum comitatu, si ea nullam ad aliam rem n\
    isi ad voluptatem conquiruntur? Addo etiam illud, multa iam mihi dare signa puer\
    um et pudoris et ingenii, sed aetatem vides. Iam in altera philosophiae parte. F\
    atebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni descis\
    cendi fuisse. "
];

class NoticiaService {
    getNoticias(limit=10) {
        let noticias = [];
        for (let i = 0; i < limit; i++) {
            noticias.push({
                id: i,
                titulo: noticiasTitulos[Math.floor(Math.random() * noticiasTitulos.length)],
                corpo: noticiasCorpos[Math.floor(Math.random() * noticiasCorpos.length)],
                data: moment().subtract(limit - i, 'days').calendar()
            });
        }
        return noticias;
    }
}

export default new NoticiaService();