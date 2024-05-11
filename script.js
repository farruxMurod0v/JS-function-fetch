// JS da funksiyalar 

/*
// Jsda funksiya yaratish uchun "function" kalit so'zidan foydalanamiz

// function funk1() {
//     console.log('birinchi funksiyangiz')
// }
// funk1();

// JS da funksiyalarni qisqa ko'rinishda yozish mumkin

// Quyidagi misolda nomsiz anonim funksiya yaratdik
let doo = function () {
    console.log("Mulatka")
}

// Yaratagan funksiyamizni o'zgaruvchan nomi bilan chaqirishimiz mumkin
doo();

//yanada qisqaroq variant 
let foo = () => console.log("Qisqasi");
foo();

// FUnksiyaning qiymatlariga default qiymat ham berish mumkin

function def(x, y = 90) {
    console.log(x + y)
}
def(7);


// Callback (qayta qo'ng'iroq)
// JS da funksiyalarga argument sifatida biror boshqa funksiya ham berishimiz mumkin
// Funksiyadan argument va parametr sifatida foydalanganimizda uning oldidan oddiy qavslarni yoza olmaymiz

function salom(Callback) {
    console.log("Saaaaaaaaaalom " + Callback())
}

let salom2 = () => ' bollar'
salom(salom2);



function func3() {
    console.log('salom')
}

function func4() {
    console.log('dunyo')
}

// SetTimeOut() jsning tayyor funksiyalaridan biri. uning birinchi argumentiga,
// biror funksiyani , ikkinchisiga vaqt ko'rsatamiz, 
// U esa ko'rsatilgan vaqtdan so'ng automatik funsiyani chaqiradi
setTimeout(func3, 4000)
func4()
*/

/*
// JS da document obyekti 

// Sahifamizda joylashgan barcha taglar, scriptlar va boshqa elementlar, hammasi 
// document obyektida saqlanadi 
console.log(document)

// body tegi style xususiyatini o'zgartiramiz
document.body.style.backgroundColor = 'green'
*/


/*
// Quyidagi document orqali o'zimizga kerakli elementlarni 
// topishimiz mumkin bo'lgan qulay variantlar

// getElementById ('id')                        -elementni id si bo'yicha topish
// getElementByTagName ('tag')                  -elementni tag nomi orqali topish
// getElementByClassName ('class')              -elementni class nomi orqali topish
// querySelectorAll ("body div")                -selectorga mos barcha elementlarni topish

// h1 tagni id si bo'yicha topib oldik va uni o'zgaruvchanga berdik
let foo = document.getElementById('H1tag')

// Inner html orqali matnni o'zgartirdik
foo.innerHTML = "MY second JS file"
*/



/*
// setTimeout() asinxron funksiya xisoblanadi.
//  Bu funksiya chaqirilgach avtomatik keyingi qatordagi kod'ga o'tib ketiladi.
//   Ya'ni javascript funksiya ishini tugatishini kutib o'tirmaydi. Shu uchun xam setTimeout'ga 0 
// sekund ko'rsatganimizga qaramay Ikki so'zi oxirida ekranga chiqdi.
console.log(1)
setTimeout(() => console.log(2), 0)
console.log(5)
*/



/*

// fetch() orqali bekend'ga murojaat qilganda - so'rov muvaffaqiyatli yoki aksincha bo'lishi mumkin. 
// Biz o'zimiz uchun kerakli kodlarni quyidagi usullar'da yozishimiz mumkin.

// Demak:

// .then() - so'rov muvaffaqiyatli bo'lsa ishga tushadi.

// .catch() - so'rovda xatolik yuz bersa ishga tushadi.

// .finally() - fetch chaqirilgach doim ishga tushuvchi funksiya.

// 2 - qatorda api qaytargan response'ni kerakli formatga o'tkazdik (json).
// Shu orqali 4- qatorga kelib bizda api yuborgan javoblar mavjud bo'lgan data obyekti bor.

fetch('https://ipapi.co/json')
.then(response => response.json())

.then((data) => console.log(data))

.catch(() => console.log('Xatolik yuz berdi'))

.finally(() => console.log("Finally doim ishlaydi"))
*/



/*
fetch('https://ipapi.co/json')
.then(Response => Response.json())

.then((data) => {
    console.log('SHahri: ' +  data.city)
    console.log('Maydoni: ' + data.country_area + ' kv/km')
})

.catch(() => console.log("xatolik yuz berdi"))
.finally()
*/





fetch('https://restcountries.com/v3.1/all?fields=area,borders,capital,flags,name,population,region')
.then(res => res.json())
.then((data) => {
    console.log(data);

for (let i = 0; i < data.length; i++){
    let name = data[i].name.common
    let area = data[i].area
    let population = data[i].population
    let capital = data[i].capital[0]
    let flagUrl = data[i].flags.png

    document.getElementById('myTable').innerHTML +=`

        <tr style="text-align: center;">
            <td style="border: 1px solid black;">${name}</td>
            <td style="border: 1px solid black;">${area}</td>
            <td style="border: 1px solid black;">${population}</td>
            <td style="border: 1px solid black;">${capital}</td>
            <td style="border: 1px solid black;"><img src="${flagUrl}" alt="#" style="height:25px" /></td>
        </tr>
        `;
    }

})

.catch(() => {
    console.log("xatolik yuz berdi ")
});

