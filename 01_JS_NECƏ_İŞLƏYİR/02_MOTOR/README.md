# Javascript motoru

> Javascript motoru - Javascript kodlarını yerinə yetirən **proqramdır**. Yəni motor deyəndə ağıla porşenlər, silindirlər və s. gəlməməlidir.  Hər brauzerin özünün Javascript motoru var. Aralarında ən məşhur **V8** motorudur.

### V8
V8 motoru Google Chrome brauzerində işləyir. Əlavə olaraq Node.js bu motorun köməyilə işləyir. Lütfən, Node.js-in proqramlaşdırma dili olduğunu düşünməyin. Node.js bir "**[runtime environment](https://www.techopedia.com/definition/5466/runtime-environment-rte)**"-dir. Təəssüf ki, azərbaycan dilinə tərcüməsi (~~iş vaxtı mühiti~~), onu anlamağa çox da kömək etmir. Node.js sayəsində Javascript kodlarını server tərəfdə işlətmək mümkündür.

### Motorların işləmə prinsipi
Hər Javascript motoru **"Call Stack və Heap"**-ə sahibdir.
**Call Stack** - bu hissədə yazdığımız kodlar yerinə yetirilir. 
**Heap** - Struktursuz yaddaş hissəsi. Bu hissədə Javascript kodları ilə yaratdığımız bütün obyektlər yer alır. 

![enter image description here](https://i.ibb.co/n1NrmNh/1-On-H-Dlb-NAPv-B9-KLx-UCy-Ms-A.png)



### Kompilyasiya və interpretasiya
Kompüterlərin sadəcə 0 və 1-ləri (maşın kodu) başa düşdüyündən danışmışdıq. Ona görə də bütün proqramlaşdırma dillərində yazılan kodlar günün sonunda maşın koduna çevrilməlidir. Bu proses ya kompilyasiya ya da interpretasiya yolu ilə baş tutur. 

**Kompilyasiya** - Bütün kod dərhal maşın koduna çevrilir və kompüterdə icra oluna bilən ikili fayla yazılır. İkili fayldan nümunə aşağıdadır:

![enter image description here](https://i.ibb.co/hmdh0gL/ZOa00.png)

İndi gəlin kompilyasiya addımlarına baxaq:

 1. Mənbə kodu (yazdığımız normal kodlar)
 2. Kompilyasiya (bütün kodların maşın koduna çevrilməsi)
 3. Maşın kodu ([protativ](https://www.azleks.az/az/online-dictionary/portativ) fayl)
 4. Yerinə yetirmə (istifadəçi tərəfindən)
 
Yazılan addımlar sizi çaşdırmasın. Belə düşünün, kompüterinizdəki proqramlar artıq kompilyasiyası başa çatmış proqramlardır. Yəni 3 cü addımı bitiriblər. Siz klikləyib açanda 4 cü addımdan başlayırsınız. Yəni proqramı başladırsınız. Məncə bu səfər super-aydındır. 

**İnterpretasiya** - Bu proses zamanı interpretator kodları sətir-sətir yerinə yetirir. Yəni sətir-sətir maşın koduna çevirir. 

Sizcə kompilyasiya edilmiş proqram **döyər** yoxsa sətir-sətir yerinə yetirilən proqram? Əlbətdə kompilyasiya edilmiş proqram! Təsəvvür edin NASA-da kosmosdakı gəmilərin koordinatını izləyən işçi gəminin hərəkəti zamanı prosesin sətir-sətir işlənməsini gözləyir. 

~~Javascript interpretasiya olunan dildir!~~
Yəqin ki, siz də Javascript-in interpretasiya olunan dil olduğunu düşünürsünüz. Yaxşı ki, yanılırsınız. Müasir Javascript özündə həm kompilyasiyanı həm də interpetasiyanı cəmləyir. Bu proses JIT compilation (Just in time compilation) adlanır. Gəlin burdaki (JIT compilation) addımlara baxaq.

 1. Mənbə kodu (yazdığımız normal kodlar)
 2. Kompilyasiya (bütün kodların maşın koduna çevrilməsi)
 3. Maşın kodu və proqramın dərhal yerinə yetirilməsi.

Bu addımlar daha qəlizdir sanki. 

**İndi də belə düşünək:** 

**Normal interpretasiya** zamanı kodlar sətir-sətir maşın koduna çevrilirdi və işə düşürdü. Bu o demək idi ki, hər proqramı istifadə etdiyimiz zaman kodlar yenə sətir-sətir maşın koduna çevriləcək. Bu sürətimizi azaldırdı. 

**Kompilyasiya** zamanı kodların hamsı maşın koduna çevrilirdi və yeni fayl əldə edirdik. İstədiyimiz zaman onu işə salırdıq. Hər işə saldığımız zaman yenidən maşın koduna çevirmə baş vermirdi. Bu da sürətimizi artırırdı. 

**JIT** kompilyasiya zamanı isə kodlarımız sətir-sətir maşın koduna kompilyasiya olmur, hamsı birdən kompilyasiya olur. Normal kompilyasiyada olduğu kimi bir fayl əldə edib onu təkrar-təkrar işə sala bilmirik. Sadəcə hər işə saldıqda kodların hamsı kompilyasiya olub işə düşür. 


### Javascript kod parçası Javascript motoruna daxil olur...
Javascript kod parçası motora daxil olduğu zaman **ilk mərhələ Parsinq mərhələsidir.** Parsinq mərhələsində bütün kodlar müəyyən əhəmiyyəti olan hissələrə bölünür. Məsələn aşağıdakı nümunyə baxaq.

Parsindqən əvvəl:

    const info = "Məlumatlar yararlıdırsa, reponu itirməmək üçün ulduzlayın (star)."

Parsindqən sonra:


![enter image description here](https://i.ibb.co/p25S5hs/Screenshot-2.png)

Bu sintaksis **[AST](https://astexplorer.net/)** **(Abstract syntax trees)** adlanır. Bu mərhələdə həm də sintaktik xətalar yoxlanılır. Lütfən AST-ni DOM tree ilə qarışdırmayın. 

İkinci mərhələdə isə AST-in maşın koduna (0 və 1) kompilyasiyası baş verir və bu maşın kodu dərhal işə düşür. Maşın kodunun işə düşməsi **CALL STACK**-da baş verir. 

Müasir Javascript motorları ağıllı optimallaşdırma sisteminə sahibdirlər. Bu sistem sayəsində ikinci mərhələdə çox da optimal olmayan maşın kodu versiyası əldə edirik. Bu ona görədir ki, proqram maksimum səviyyədə sürətli işə düşsün və fonda (arxa planda) yenidən kompilyasiya olunaraq optimallaşsın. Fonda optimallaşma zamanı bunu hiss etmirik amma nəticədə işə düşən proqram sonda optimal olur. Bu optimallaşdırma bir neçə dəfə baş verə bilər. Yəni hər optimallaşdırma zaman optimal maşın kodu əvvəlki maşın kodunu əvəz edir. Məhz bu optimallaşdırma sistemi sayəsində müasir Javascript motorları olduqca sürətlidir. 

P.S - Yuxarıdakı mərhələlərə müdaxilə edə bilmirik. Çünki bu mərhələlər əsas axında (main thread) deyil, ayrı axında baş verir. Əsas axın **CALL STACK**-da işə düşür.

İndi könül rahatlığı ilə Javascript interpretasiya olunan dil deyil deyə bilərsiniz!
