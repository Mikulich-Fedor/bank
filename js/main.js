//1 Задание

const URL_BYN = " http://www.nbrb.by/API/ExRates/Rates?Periodicity=0";

let usd = document.getElementById("usdBuy"),
  euro = document.getElementById("euroBuy"),
  rub = document.getElementById("rubBuy"),
  grn = document.getElementById("grnBuy");

function getData(par) {
  fetch(par).then(response => {
    response
      .json()
      .then(data => {
        usd.innerHTML = `${data[4].Cur_OfficialRate}`;
        euro.innerHTML = `${data[5].Cur_OfficialRate}`;
        rub.innerHTML = `${data[16].Cur_OfficialRate}`;
        grn.innerHTML = `${data[2].Cur_OfficialRate}`;

        let money = document.getElementById("money"),
          calcUSE = document.getElementById("calcUse") /* знавчение Доллара */,
          calcEuro = document.getElementById("calcEuro") /*Знчение евро */,
          calcRub = document.getElementById("calcRub") /*значение Рубля */,
          calcGrivna = document.getElementById(
            "calcGrivna"
          ) /*значение Гривны*/,
          enterMoney = document.getElementById("enterMoney") /*ввод денег */,
          calcRest = document.getElementById("calcRest") /*результат*/,
          calcButton = document.getElementById(
            "calcButton"
          ); /* Кнопка подщет */

        calcButton.addEventListener("click", function() {
          switch (money.value) {
            case "USD":
              var currency = data[4].Cur_OfficialRate;
              sum = enterMoney.value * currency;
              calcRest.value = sum;
              break;
            case "Euro":
              var currency = data[5].Cur_OfficialRate;
              sum = enterMoney.value * currency;
              calcRest.value = sum;
              break;
            case "Rub":
              var currency = data[16].Cur_OfficialRate;
              sum = enterMoney.value * currency * 10;
              calcRest.value = sum;
              break;
            case "Grivna":
              var currency = data[2].Cur_OfficialRate;
              sum = enterMoney.value * currency;
              calcRest.value = sum;
              break;
          }
        });
      })

      .catch(() => {
        console.log(`error 404!`);
      });
  });
}

getData(URL_BYN);

//2 Задание
