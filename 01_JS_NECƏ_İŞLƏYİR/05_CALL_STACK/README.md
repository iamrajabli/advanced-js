# Call Stack

> Call stack - İcra prosesində harada olduğumuzu izləmək üçün icra kontekstlərinin üst-üstə yığıldığı yerdir.

[Keçən mövzumuz](https://github.com/iamrajabli/advanced-js/tree/main/01_JS_NEC%C6%8F_%C4%B0%C5%9EL%C6%8FY%C4%B0R/04_EXECUTION_CONTEXT) (əgər keçən mövzunu oxumamısınızsa lütfən oxuyun) olan İcra kontekstində belə bir sual yarandı: - "Tutaq ki, kodumuzda yüzlərcə funksiya var. Bu o deməkdir ki, yüzlərcə də icra konteksti yaranır. Yaxşı bəs Javascript motoru bunu necə sıralayacaq və necə yerinə yetirəcək?"

### Call Stack iş prinspi

Keçən mövzuda aşağıdakı şəklin izahını vermişdim.

![enter image description here](https://camo.githubusercontent.com/06dee3cc7884a5f1c3a425a988d13da413563d785bea18981adc2569d0de3c09/68747470733a2f2f692e6962622e636f2f625133705634502f53637265656e73686f742d332e706e67)

**İcra kontekstində:**

***Global icra konteksti***

-   greeting = **'Hello!'**
-   smth = <**function**>
-   foo = <**function**>
-   num = <**unknown**>

***İcra konteksti - smth()***

-   k = 3
-   d = <**unknown**>

***İcra konteksti - foo()***

-   x = 5
-   arguments = [4, 5]

İndi keçək bu kontekstlərin Call Stack-da saxlanılmasına

**Call Stack-də:**

**1. Call stack-də ilk yerini alan data - Qlobal icra kontekstidir.** 
-   greeting = **'Hello!'**
-   smth = <**function**>
-   foo = <**function**>
-   num = <**unknown**>

![enter image description here](https://i.ibb.co/RbTHK5k/1480-1080.png)

2. İkinci addımda 
	
Keçən dəfəki örnəkdə ən son sətirdəki kod parçası işə düşür:

    const num = smth();
    
Bu halda **"smth"** funksiyası işə düşür və yeni bir icra konteksti yaranır, beləliklə Call stack-də öz yerini alır. 

***İcra konteksti - smth()***

-   k = 3
-   d = <**unknown**>

![enter image description here](https://i.ibb.co/NjJR1BS/1480-1080-1.png)


3. Üçüncü addımda smth() funksiyasının yaratdığı icra kontekstində aşağıdakı kodun oxunması nəticəsində foo() funksiyası işə düşür və yeni icra konteksti yaranır, beləliklə Call stack-də öz yerini alır. 

  

		const d = foo(4,5);
    

![enter image description here](https://i.ibb.co/F6xSc4k/1480-1080-2.png)





**Birşeyi başa düşmək çox önəmlidir.** Fikir verirsinizsə "const d = foo(4,5)" sətrindən sonra da kodlar var idi. Amma bu sətir oxunandan sonra yeni icra konteksti yarandı və bu kontekst Call Stack-a əlavə edildi. 

**Bu halda, yeni yaranan kontekst, Call Stack-da aktiv icra konteksti olur. Yəni ondan əvvəlki icra kontekstinin icrasına pauza verilir. Nə vaxt ki, yeni kontekstin icrası bitəcək, onda əvvəlki kontekstin icrası qaldığı yerdən davam edəcək. Yəni sadəcə bir kontekstin icrası baş tuta bilir. Bu Javascript-in tək axınlı (single thread) dil olduğuna görədir.**


    
4. Dördüncü addımda **foo()** funksiyasının son sətrindəki **return  x** kodu işə düşəcək və funksiya sonlanacaq. Bəs bu Call Stack üçün nə deməkdir?

![enter image description here](https://i.ibb.co/CWkH3nP/1480-1080-3.png)

Bilirəm, şəkil ağlınızı qarışdırır. Bu o deməkdir ki, funksiya **foo()** işini bitirdi və Call Stack-dan silindi **(bəzi hallarda Call Stack-dan silinən məlumatlar yaddaşda qalmağa davam edir. Bu barədə sonrakı mövzularda bəhs edəcəyik).** İndi **smth()** funksiyası yenidən aktivdir və qaldığı yerdən (k+=d) davam edəcək yuxarıda qeyd etdiyimiz kimi. 

5. Beşinci addımda, **smth()** funksiyasının yaratdığı icra konteksti də bitdikdən sonra Call Stack-dan silinir.

![enter image description here](https://i.ibb.co/rsBSx2w/1480-1080-4.png)

Geriyə qlobal icra konteksti qaldı. Kod sətrində isə qaldığımız yerdən (**"const num = smth()"**)  davam edirik. Artıq **smth()** funksiyasından geri dönən dəyər **num** dəyişəninə göndərildi. 

6. Altıncı və sonuncu addımda **brauzerin pəncərəsi bağlandıqda** qlobal icra konteksti də Call Stack-dan silinir. 

Diqqət - İcra konteksti, istifadəçi tərəfindən həyata keçirilən müxtəlif proseslərin nəticəsində də Call Stack-dan silinə bilər. Məsələn, komputer söndürüldükdə, brauzer bağlandıqda və s. 

### Son olaraq hərşeyin tam oturması üçün qısametrajlı qorxu filmi:
**Siz** proqramçılıqdan bezib Bolt-da taksi fəaliyyətinə başlamısınız. **Müştəri** N. Nərimanov metrosuna taksi **sifariş verib**. Siz də hər zaman sifariş üçün Nizami metrosunda gözləyirsiniz amma sifariş nöqtəsinə necə gedəcəyiniz barəsində bir fikriniz yoxdur. Amma şanslısınız, çünki **Google map** var. Google map sayəsində N. Nərimanov metrosuna yola düşürsünüz, sifarişi tamamlayırsınız və Nizami metrosuna geri qayıdırsınız.

**Rollarda:**
Siz: **Javascript motoru**
Müştəri: **Proqramçı**
Sifariş: **İcra kontekstləri** ([Tom Hardy Legend](https://www.imdb.com/title/tt3569230/))
Google map: **Call Stack**

### Unutmayın ki, 
Unutmayın ki, yazılan izahlar hər zaman 100% bütöv deyil. Yəni izahlar doğrudur, yazılanlar baş verir amma daha dərində hərşey çox daha mürəkkəb işləyir. İzahlar, iş prinsipini başa düşməyimiz üçündür.

#### Mənbələr
-   [Developer Mozilla](https://developer.mozilla.org)
-   [Call stack]https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
