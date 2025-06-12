export const appetizers = [
  {
    name: "بروشيتا بالطماطم والريحان",
    des: "خبز محمص مع زيتون وثوم وطماطم وزيت زيتون.",
    price: "80 ج.م",
    src: "/imgs/dishes/Appetizers/Bruschetta.png",
  },
  {
    name: "أرانشيني (كرات الأرز المحشية)",
    des: "أرز، جبن موزاريلا، بقسماط، زيت للقلي",
    price: "90 ج.م",
    src: "/imgs/dishes/Appetizers/Arancini.png",
  },
  {
    name: "كابوناتا",
    des: "خضروات مشوية مع صلصة الطماطم والثوم والبقدونس.",
    price: "65 ج.م",
    src: "/imgs/dishes/Appetizers/Caponata.png",
  },
  {
    name: "أنتيباستو",
    des: "مجموعة من الخضروات المشوية مع صلصة البيستو.",
    price: "60 ج.م",
    src: "/imgs/dishes/Appetizers/Antipasto.png",
  },
  {
    name: "ميلانيزيانا",
    des: "شرائح الباذنجان المقلية مع صلصة الطماطم وجبنة الموتزاريلا.",
    price: "65 ج.م",
    src: "/imgs/dishes/Appetizers/Melanzane.png",
  },
  {
    name: "سالسيسا سيتيليانا",
    des: "سلطة الطماطم الطازجة مع البصل والزيتون والثوم والبقدونس.",
    price: "55 ج.م",
    src: "/imgs/dishes/Appetizers/Salsiccia.png",
  },
  {
    name: "زوبا",
    des: "جمبري مشوي مع زيت الزيتون والثوم والليمون.",
    price: "80 ج.م",
    src: "/imgs/dishes/Appetizers/Gamberi.png",
  },
  {
    name: "تارتوفوليو",
    des: "بطاطس مقلية مع صلصة الطماطم والثوم والروزماري.",
    price: "70 ج.م",
    src: "/imgs/dishes/Appetizers/Tartufoolio.png",
  },
];

const main = [
  {
    name: "فيتوتشيني ألفريدو",
    des: "مكرونة فيتوتشيني، كريمة طازجة، جبن بارميزان، زبدة، دجاج.",
    price: "180 ج.م",
    src: "/imgs/dishes/Main/Fettuccine.png",
  },
  {
    name: "ريزوتو بالفطر والبارميزان",
    des: "أرز أبوريو مطهو بمرق الدجاج مع فطر وجبن البارميزان.",
    price: "180 ج.م",
    src: "/imgs/dishes/Main/Mushroom.png",
  },
  {
    name: "مانزو بيرا سيمبيتيكي",
    des: "مانزو بيرا سيمبيتيكي مع صلصة الجبنة والفلفل الأسود.",
    price: "225 ج.م",
    src: "/imgs/dishes/Main/ManzoPerSebetti.png",
  },
];

const pizza = [
  {
    name: "بيتزا مارغريتا",
    des: "صلصة الطماطم، جبنة الموتزاريلا، زيت الزيتون، طماطم طازجة.",
    price: "150 ج.م",
    src: "/imgs/dishes/Pizza/Margherita.png",
  },
  {
    name: "بيتزا كواترو فورماجي",
    des: "صلصة الطماطم، جبنة الموتزاريلا، جبن بارميزان، جبن روكفور، جبن جريير.",
    price: "180 ج.م",
    src: "/imgs/dishes/Pizza/Quat.png",
  },
  {
    name: "بيتزا كابريزيوسا",
    des: "صلصة الطماطم، جبنة الموتزاريلا، طماطم مقطعة، أوريغانو، زيت زيتون.",
    price: "185 ج.م",
    src: "/imgs/dishes/Pizza/Capricciosa.png",
  },
];

const deserts = [
  {
    name: "تيراميسو",
    des: "بسكويت الليدي فينجر، قهوة، ميرنغ، كاكاو بودرة، جبنة ماسكاربون.",
    price: "120 ج.م",
    src: "/imgs/dishes/Deserts/Tiramisu.png",
  },
  {
    name: "كانولي",
    des: "حلوى الكانولي المقرمشة المحشوة بخليط الريكوتا والسكر والفستق المجروش.",
    price: "140 ج.م",
    src: "/imgs/dishes/Deserts/SicilianCannolI.png",
  },
  {
    name: "تورتا كابريز",
    des: "تورتة كابريز الشهيرة المحضرة بالشوكولاتة واللوز والبيض.",
    price: "160 ج.م",
    src: "/imgs/dishes/Deserts/caprese.png",
  },
];

const drinks = [
  {
    name: "قهوة إيطالية",
    des: "إسبريسو، كابتشينو، أو لاتيه.",
    price: "70 ج.م",
    src: "/imgs/dishes/Drinks/Espresso.png",
  },
  {
    name: "ليمونادة بالنعناع",
    des: "مكونات: عصير ليمون طازج، أوراق نعناع، سكر، ماء",
    price: "100 ج.م",
    src: "/imgs/dishes/Drinks/Mint.png",
  },
  {
    name: "شاي الزنجبيل",
    des: "شاي الزنجبيل المنعش مع لمسة من الليمون.",
    price: "90 ج.م",
    src: "/imgs/dishes/Drinks/GingerTea.png",
  },
];

const typesMap = {
  appetizers,
  main,
  pizza,
  deserts,
  drinks,
};

export const show = (num, type) => {
  const container = document.querySelector(".menushow .cards");
  container.innerHTML = "";
  let url = window.location.href;
  let path;
  url.includes("pages") ? (path = "..") : (path = ".");
  type.forEach((item, index) => {
    if (index >= num) return;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="img"><img src="${path + item.src}" alt="${item.name}"></div>
        <div class="text">
          <h2>${item.name}</h2>
          <div class="des">${item.des}</div>
          <div class="price">${item.price}</div>
        </div>
      `;
    container.appendChild(card);
  });
};

const menunav = document.querySelectorAll(".menushow ul li");
let currentType = "appetizers";

menunav.forEach((el) => {
  el.addEventListener("click", () => {
    menunav.forEach((item) => item.classList.remove("active"));
    el.classList.add("active");
    const newType = el.getAttribute("data-type");
    if (currentType === newType) return;
    currentType = newType;
    window.location.pathname.includes("pages")
      ? show(10, typesMap[newType])
      : show(4, typesMap[newType]);
  });
});

window.show = show;
