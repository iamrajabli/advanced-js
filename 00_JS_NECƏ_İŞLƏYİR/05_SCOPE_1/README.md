## Scope  - I hissə

> Scope, bu suallara cavab verir: *Dəyişənlər (variables) harada yaşayır və müəyyən dəyişənə necə çatmaq olar?*

![enter image description here](https://i.ibb.co/3kC7Mnb/1-Kx-Hw-Vb-B0zhn-SVrhr-Wt-T-gg.jpg)

Javascript-də aşağıda qeyd olunan scope anlayışları mövcuddur:

1.  **Global scope** 

![enter image description here](https://i.ibb.co/TbsvpSc/image.png)

Yuxarıdakı koddakı dəyişən əgər bütün funksiyaların və blokların xaricindədirsə global scope sayılır. Bu dəyişənə kodun istənilən yerində (təyin olunduğu yerdən aşağı. İstisna, bax. **[hoisiting](https://www.w3schools.com/js/js_hoisting.asp))** çatmaq mümkündür.

2.  **Function scope**

   
`Function scope` - da dəyişənlər funksiyaların içində yaradılır və kənardan əlçatan olmurlar.

![enter image description here](https://i.ibb.co/SX3dQXw/image.png)


3.  **Block scope (ES6)**

`Block scope` - da dəyişənlər sadəcə blokun içində əlçatan olurlar. Lakin bu sadəcə `const` və `let`  ilə yaradılan dəyişənlərə aiddir. `var` açar sözü ilə yaradılan dəyişənlər kənaradan da əl çatan olurlar (bax. **[беспредел](https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB))**

Bu arada maraqlı birşey - funksiyalar da öz içlərində `block scope` - a sahib ola bilirlər.

![enter image description here](https://i.ibb.co/BTwmhM0/image.png)


## Nümunələr

### Global scope

Dediyimiz kimi qlobal scope - də yaradılan dəyişənə hər yerdən müraciət edə bilirik:

![enter image description here](https://i.ibb.co/WtfXcr9/image.png)

Biraz uzadaq:

![enter image description here](https://i.ibb.co/FqVZrQp/image.png)


Yuxarıda bir istisnadan danışmışdıq qlobal scope ilə əlaqəli:

![enter image description here](https://i.ibb.co/0MSM30T/image.png)


Niyə belə birşey edəsən amma bunu hoisting ilə həll etmək olar:

![enter image description here](https://i.ibb.co/BTGZzL7/image.png)

Sizə `var` ilə əlaqəli maraqlı birşey deyim. Adətən bu məlumat çox yerdə verilmir. Sadəcə deyilir ki, "Modern javascriptdə var yerinə `let` və ya `const` istifadə edin."  Yaxşı bəs niyə? Qardaş mənim ürəyim `var` istifadə etmək istəyir. Elə bir səbəb de ki istifadə etməyim yoxsa hər şey modern olsun deyə dəyişməzki. 

#### Demək: Javaccript'də  `var` ilə yaradılan dəyişənlər  `window` obyektinə (özünüz birin yaradıb yoxlayın) düşür. Elə buna görə də aşağıdakı performans məsələləri yaranır:

1.  Lazımsız yaddaş istifadəsi: `var` ilə yaradılan dəyişənlər `window` obyektində saxlanıldığı üçün, lazımsız yaddaş istifadəsinə səbəb ola bilər. Xüsusilə böyük tətbiqlər və çox sayda dəyişənin tanımlandığı halda önəmli bir performans itkisi baş verə bilər
    
2.  Toqquşmalar:  `window` obyektinə düşən dəyişənlər, digər kitabxanalar  tərəfindən də istifadə edilə bilər. Bu vəziyyətdə, dəyişən adları arasında toqquşmalar yarana bilər və gözlənilməz xətalara səbəb ola bilər.
    
3.  Təhlükəsizlik açıqları: `var` ilə yaradılan dəyişənlər,  `window` obyektinə düşür və bu səbəbdən digər kodlar (bizim və ya qeyri-bizim tərəfdən yazılan) tərəfindən dəyişdirilə bilər. Bu, potensial təhlükəsizlik açıqlarına səbəb ola bilər və kodun işlənməsini mənfi təsir edər.
    
Məncə yetərincə aydın oldu artıq niyə `const` və `let` istifadə etmək lazımdır. Təbii ki, `const` və `const`-də bu hadisə baş vermir.

### Block scope

![enter image description here](https://i.ibb.co/TqSZBVR/image.png)

`For`, `if`, `while` və s. `block scope` - a sahibdir ( {} ).  Göründüyü kimi blokun içində təyin edilən `a` dəyişəninə blokun xaricində çatmaq olmur.

![enter image description here](https://i.ibb.co/9ttQx7d/image.png) 

Hər `block scope` bir `local scope` - a sahibdir. İndi deyəcəksiniz ki, lokal-mokal hardan çıxdı amma adından da göründüyü kimi hər blok, `local scope` - a sahibdir. Əslində bu çox məntiqlidir. `keyCopy` dəyişəni təyin edilir və blokun içində yaradılan yeni blokda əl çatan olur. Amma bunun əksi mümkün deyil. Yəni `child block`-un içində yaradılan dəyişən `parent block`-dan çağrılmır (const, let). 

![enter image description here](https://i.ibb.co/mhgxqDM/image.png)

Sözü gedən məsələyə yuxarıdakı şəkildə toxundum. Göründüyü kimi `b` dəyişəninə əsas blokda çata bilmirik.


### Function scope

Block scope nümunəsində local scope haqqında danışdıq. İndi gəlin `lexical scope` nədir buna da baxaq. Maraqlı söhbədir hətta local scope ilə qarışdırılır tez-tez. Təkrarlayaq - local scope deyəndə bunu yada salmaq lazımdır - bir dəyişkən yaradıldığı blok daxilində əlçatandır. Yəni o blokun içində bir blok da yaratsan yaradılan blok dəyişənin yaradıldığı blokda olduğu üçün həmin dəyişən onda da əlçatandır. Lakin bir funksiyanın içində digər bir funksiya yarandığı zaman `child function` - un, `parent function`-un parametrlərinə və daxilində yaranan dəyişənlərə çata bilməsi `lexical scope` adlanır. 

![enter image description here](https://i.ibb.co/k8ssPd4/image.png)

Sadəcə daxilindəki dəyişənlərə yox həm də parametrlərdə `child function` tərəfindən əl çatan olur. 

![enter image description here](https://i.ibb.co/Lz11R7T/image.png)


Bəs əksi mümkündür mü? Yəni `child function`-da yaradılan dəyişəni `parent function`-da çağıra bilərik mi? yox təbiiki.

![enter image description here](https://i.ibb.co/NTCs1Fm/image.png)

Əslində `lexical scope`-dan danışanda `closure` mövzusuna girmək olar. Yaxşı, gerisi sonra! :)

#### İkinci hissədə scope və call stack əlaqəsini detallı öyrənəcəyik.


### Unutmayın ki,

Unutmayın ki, yazılan izahlar hər zaman 100% bütöv deyil. Yəni izahlar doğrudur, yazılanlar baş verir amma daha dərində hərşey çox daha mürəkkəb işləyir. İzahlar, iş prinsipini başa düşməyimiz üçündür.

#### Mənbələr

-   [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
-   [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
-   [Lexical Scope in JavaScript](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)
-   [Современный JavaScript](https://www.udemy.com/course/javascript-zero-to-junior-developer/)
-   [JavaScript Advanced](https://www.udemy.com/course/javascript-advance/)