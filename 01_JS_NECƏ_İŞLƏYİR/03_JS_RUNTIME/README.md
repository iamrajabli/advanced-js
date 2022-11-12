# Javascript Runtime

> Javascript Runtime, Javascript proqramlaşdırma dilinin brauzerdə istifadəsi üçün lazım olan hərşeyi özündə cəmləyən bir qutudur (məcazi). Bu qutunun döyünən ürəyi isə Javascript motorudur.

### Web API
Javascript kodlarının düzgün şəkildə işləməsi üçün Javascript motoru bəs etmir. Məhz bu problemimizi **[Web API](https://developer.mozilla.org/en-US/docs/Web/API)** aradan qaldırır. Əgər bağlantıya klik etməyə ərindinizsə mən deyim, Web API özündə - DOM, Timers, Fetch API, XMLHttpRequest, Console.log və s. cəmləyir. İndi əhəmiyyətini daha çox başa düşürük. Amma bilmək lazımdır ki, Web API Javascriptin bir hissəsi deyil, sadəcə Javascript onunla **["window"](https://developer.mozilla.org/en-US/docs/Web/API/Window)** obyekti vasitəsilə əlaqə saxlayır. 
Bəs Web API nəyin hissəsidir? Cavab: Javascript Runtime-in.

### Callback Queue (Callback sırası)
Web API-dən əlavə Javascript Runtime daxilində [Callback sırasına](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd) da yer ayırır. Burada bütün yerinə yetirilməyə hazır [callback funksiyalar](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) yer alır. Məsələn bir butona klik eventi əlavə edib, parametr olaraq callback funksiya göndəririk. Bu butona klik etdikdə həmin callback funksiya:

1. Callback sırasına (queue) düşür.
2. Call Stack təmizlənməsi gözlənilir.
3. Call Stack təmizləndikdən sonra callback funksiya call stack-ə "**ötürülür**". 

Necə yəni ötürülür? Kim və ya nə ötürür?


### Event Loop (Event döngüsü)
Event loop nəticə etibarilə callback funksiyanı Callback sırasından götürüb Call Stack-ə ötürür. Əgər bundan əvvəlki "[İCMAL](https://github.com/iamrajabli/advanced-js/tree/main/01_JS_NEC%C6%8F_%C4%B0%C5%9EL%C6%8FY%C4%B0R/01_ICMAL)" məqaləsini oxumamısınızsa, qısaca paralellik modelinə (Concurrency model) göz ataq: 

Javascript tək axınlı (single threaded) dildir. Bu o deməkdir ki, bir dəfəyə bir tapşırığı həll edə bilir. Elə bir iş ola bilər ki, həmin iş, axını məşğul edə və özündən sonrakı işlərin gözləməyinə səbəb ola bilər. Bizim bu hallarda köməyimizə - **Event Loop** çatır.
Event loop uzun çəkəcək tapşırıqları götürür və "fon rejimdə" həll edir. Həll etdikdən sonra isə əsas axına (Call Stack) ötürür. Nəticə etibarilə paralel iş prinsipi yaranır.

### Bonus məlumat
Web API sadəcə brauzer daxilində əlçatandır. Amma bilirik ki, Javascript brauzer xaricində də [Node.js](https://nodejs.org/en/) sayəsində işləyə bilir. Bu təqdirdə Web API-in yerini "[C++ Bindings & Thread Pool](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)" alır. 


### Unutmayın ki,

Unutmayın ki, yazılan izahlar hər zaman 100% bütöv deyil. Yəni izahlar doğrudur, yazılanlar baş verir amma daha dərində hərşey çox daha mürəkkəb işləyir. İzahlar, iş prinsipini başa düşməyimiz üçündür.

#### Mənbələr

 - [Developer Mozilla](developer.mozilla.org) 
 - [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
 - [Understanding Event Loop, Call Stack, Event & Job Queue in Javascript](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd)
 - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
 - [Современный JavaScript](https://www.udemy.com/course/javascript-zero-to-junior-developer/)
  
