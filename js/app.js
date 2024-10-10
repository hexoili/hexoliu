const backendURL = "https://app.vanilca.com" // БЕЗ / НА КОНЦЕ

// Функция, которая будет вызываться при пересечении элементов с областью видимости
 function onEntry(entry) {
  entry.forEach(change => {
    // Проверяем, пересекается ли элемент с областью видимости
    if (change.isIntersecting) {
      // Если пересекается, добавляем класс для отображения элемента
      change.target.classList.add('element-show');
    }
  });
}

// Настройки наблюдателя IntersectionObserver
let options = {
  threshold: [0.5] // Порог пересечения установлен на 0.5, что означает, что элемент будет считаться видимым, когда половина его высоты будет видна на экране
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

// Начинаем наблюдение за каждым элементом
elements.forEach(elm => {
  observer.observe(elm);
});

let toggleBtn = document.querySelector('.header__burger')
let dropDownMenu = document.querySelector('.dropdown')
let bodyElement = document.body;
let header = document.querySelector('header');
let overlay = document.querySelector('.overlay');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    let isOpen = dropDownMenu.classList.contains('open')

    if(isOpen){
      header.style.background = "white";
      overlay.style.display = "block"; // Показываем overlay при открытии меню
      bodyElement.classList.add('lock')
    }else{
      bodyElement.classList.remove('lock')
      header.style.background = "";
      overlay.style.display = "none"; // Скрываем overlay при закрытии меню
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const formEl = document.querySelector("#donation-form");
formEl?.addEventListener("submit", async(e)=>{
  e.preventDefault();
  const selectedProduct = document.querySelector("#product").value;
  const selectedEmail = document.querySelector("#email").value;
  const selectedNickname = document.querySelector("#nickname").value;
  const selectedPromo = document.querySelector("#promo-code").value;
  console.log(formEl, selectedEmail, selectedNickname, selectedProduct, selectedPromo)

  fetch(`${backendURL}/easydonate/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      products: JSON.parse(selectedProduct),
      nickname: selectedNickname,
      email: selectedEmail,
      promo: selectedPromo
    })
  }).then(res => res.json()).then(res => {
    console.log(res)
    if(res.ok){
      window.location.replace(res.payment.url)
    }else{
      if(res.authRequired){
        window.location.replace(res.url)
      }
    }
  })
})

const formEl2 = document.querySelector("#server_form");
    formEl2?.addEventListener("submit", async(e)=>{
        e.preventDefault();
        const sName = document.querySelector("#name").value;
        const sAge = document.querySelector("#age").value;
        const sNickname = document.querySelector("#nickname").value;
        const sPlayTime = document.querySelector("#playTime").value;
        const sInfoSource = document.querySelector("#infoSource").value;
        const sPlayReason = document.querySelector("#playReason").value;
        const sPlans = document.querySelector("#plans").value;

        fetch(`${backendURL}/common/applicationForm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: sName,
                age: sAge,
                nickname: sNickname,
                playTime: sPlayTime,
                infoSource: sInfoSource,
                playReason: sPlayReason,
                plans: sPlans
            })
        }).then(res => res.json()).then(res => {
            console.log(res)
            if(res.authRequired){
                window.location.replace(res.url)
            }
        })
    })
