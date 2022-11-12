# Execution Context (İcra konteksti)

### Global Execution Context (Qlobal İcra konteksti)
Bilirik, ki **yerinə yetirilməyə hazır olan maşın kodu** Call Stack-da işə düşür. İndi baxaq, görək Call Stack-dan əvvəl nə baş verir. 
1. **Üst səviyyəli kodlar üçün Qlobal icra kontekstinin yaradılması ([Global Execution Context](https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c))**

Üst səviyyəli kod - Funksiya xaricindəki kodlar. Bu əslində normaldır çünki funksiyalar sadəcə çağrıldıqları zaman işə düşməlidirlər. Eyni zamanda özü özünü çağıran funksiyalar ([IIFE](https://developer.mozilla.org/ru/docs/Glossary/IIFE)) var amma bu bölmənin mövzusu deyil. Qlobal icra konteksti kodun böyüklüyünə baxmayaraq sadəcə bir dəfə yaranır.

![enter image description here](https://i.ibb.co/cbWfDY0/900-1200-1200-900-1.png)


### Execution Context (İcra konteksti)
Gəlin, icra kontektsini anlamağa çalışaq. 

> İcra konteksti - Javascript kod parçasının yerinə yetirildiyi mühitdir. 

Belə düşünək, getmişik dönər almağa. Ödənişi edəndən sonra bizə bir paketdə dönər verilir. Həmin paketin içində həm dönər həm salfetka həm də xahiş etdiyimiz acı bibərlər var (bibərsiz dadı olmur). Bu analogiya üzrə həmin paket bizim icra kontekstimiz, dönər, salfetka və bibərlər bizim kodlarımızdır. Yəni icra konteksti nəticə etibarilə müəyyən prosesi yerinə yetirmək üçün özündə Javascript kodlarını cəmləyir. Müəyyən proses isə bizim dönəri və bibərləri yeməyimiz, salfetka ilə əlimizi, ağzmızı (sonra da ayaqqabımızı) silməyimizdir.  

2. **Bu addımda artıq qlobal icra kontekstindəki kodlar yerinə yetirilir. Yəni prosessor maşın kodunu işləyir.** 

3. **Nəhayət funksiyalar və call back funksiyalar yerinə yetirilir.** 

Burda nəzərə almaq lazımdır ki, hər funksiya çağırışına (invoke) görə yeni bir icra konteksti yaranır. Bütün funksiyalar yükləndikdən sonra Javascript motoru call back funksiyaları gözləyir. 

Yaxşı, hərşeydən danışdıq. Amma hələ də bilmirik ki, icra konteksti daxildə nədən ibarətdir: 

 1. **Variable Environment** 
	 - let, const və var ilə deklarasiyalar
	 - funksiyalar
	 - **arugments** obyekti - funksiyanın aldığı parametrlər.

 2. **Schope Chain** 
Funksiyalar xaricdəki dəyişəndən istifadə edə bilər. Bu Schope Chain sayəsində baş verir. Bu mövzunu çox detallı müzakirə edəcəyik.

3. **this** - Bu mövzunu da çox detallı müzakirə edəcəyik.

**Diqqət!** 
[Arrow funksiyalar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) arguments və this-i ehtiva etmir. Bilməyənlər narahat olmayın bu cür funksiyaları da detallı müzakirə edəcəyik. 

Nəticə: Kodlarımızı işə saldıqda [müəyyən prosesləri](https://github.com/iamrajabli/advanced-js/tree/main/01_JS_NEC%C6%8F_%C4%B0%C5%9EL%C6%8FY%C4%B0R/02_MOTOR) keçərək maşın koduna çevrilir. Bu prosesdən sonra qlobalda yaradılan dəyişənlər və s. üçün, kodların həcminə baxmayaraq sadəcə bir dənə **qlobal icra konteksti** yaranır. Daha sonra funksiyaların hər birinə görə yeni icra konteksti yaranır. Bu icra kontekstinin içində də **variable environment, scope chain və this** var. 
Variable environment daxilindəki arguments və this mövcudluğu funksiyanın arrow funksiya olmamasından aslıdır.

Gəlin şəkildəki kodların yaratdığı qlobal və icra kontekstlərinin içində nə baş verdiyinə baxaq. 

![enter image description here](https://i.ibb.co/bQ3pV4P/Screenshot-3.png)

Yuxarıdakı şəkildəki kodlardan bir qlobal icra konteksti və iki icra konteksti çıxır. 


**Global icra konteksti**
greeting = **'Hello!'**
smth = <**function**>
foo = <**function**>
num = <**unknown**>
 
 **İcra konteksti - smth()**
 k = 3
 d = <**unknown**>

 **İcra konteksti - foo()**
 x = 5
 arguments = [4, 5]

Kontekstlər belədir. Qeyd edilən unknown-lar isə həmin funksiyanın işə düşmədiyi üçündür, işə düşdüktən sonra alınan nəticə ilə yerini dəyişəcəklər. 

Yaxşı burda belə sual yaranır. Tutaq ki, kodumuzda yüzlərcə funksiya var. Bu o deməkdir ki, yüzlərcə də icra konteksti yaranır. Yaxşı bəs Javascript motoru bunu necə sıralayacaq və necə yerinə yetirəcək? 
Burada isə **Call Stack** köməyimizə çatır. Bu da bir sonranın mövzusudur. 


#### Mənbələr
[Developer Mozilla](developer.mozilla.org)
[JavaScript Execution Context](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
[Контекст выполнения и стек вызовов в JavaScript](https://habr.com/ru/company/ruvds/blog/422089/)
[Современный JavaScript](https://www.udemy.com/course/javascript-zero-to-junior-developer/)
