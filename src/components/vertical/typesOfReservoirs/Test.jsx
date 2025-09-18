import React from "react";
import "./TypesOfReservoirs.css";

export default function TypesOfReservoirs({ lang = "ru" }) {
  // Tarjimalar obyekti
  const translations = {
    ru: {
      title: "ТИПЫ РЕЗЕРВУАРОВ ВЕРТИКАЛЬНЫХ СТАЛЬНЫХ РВС:",
      intro1: "Выбор типа цилиндрического резервуара производится на этапе его",
      intro2: "проектирования",
      intro3:
        "в зависимости от хранимого продукта, особенностей технологического процесса предприятия и характеристик площадки, где он будет установлен.",
      intro4:
        "Различают 4 основных типа вертикальных цилиндрических резервуаров:",
      types: [
        "РВС – резервуар вертикальный стальной со стационарной крышей без понтона.",
        "РВСП – резервуар вертикальный стальной со стационарной крышей и понтоном.",
        "РВСкп – резервуар вертикальный стальной с плавающей крышей.",
        "Резервуары с защитной стенкой («стакан в стакане»).",
      ],
      type1: {
        title:
          "1. РВС – резервуар вертикальный стальной со стационарной крышей без понтона.",
        description:
          "Используются для хранения продуктов с относительно низкой летучестью (с давлением насыщенных паров не более 26,6 кПа) и температурой воспламенения более 610С. Наиболее часто в таких цилиндрических резервуарах складируют мазут, дизельное топливо, бытовой керосин, битум, гудрон, масла (в том числе пищевые) и воду. Также резервуары стальные вертикальные цилиндрические со стационарной крышей без понтона могут применяться для хранения более летучих (с ДНП до 93,3 кПа) и легко воспламеняемых продуктов. В таких случаях резервуар РВС оборудуется газовой обвязкой или установкой улавливания легких фракций.",
      },
      type2: {
        title:
          "2. РВСП – вертикальные цилиндрические резервуары со стационарной крышей и понтоном",
        description:
          "Используются для хранения продуктов с давлением насыщенных паров в пределах 26,6 – 93,3 кПа и температурой воспламенения менее 610С. Наиболее часто в них складируются нефти, бензины, керосины, реактивное топливо. Понтон представляет собой жесткое газонепроницаемое плавающее покрытие в форме диска, помещаемое на зеркало продукта внутри цилиндрического резервуара так, чтобы было закрыто не менее 90% его площади. Кольцевой зазор между понтоном и стенкой резервуара герметизируется специальным уплотняющим затвором. Понтон служит для снижения скорости насыщения газовоздушного пространства резервуара вертикального парами хранимого продукта.",
      },
      type3: {
        title: "3. РВСкп – резервуар вертикальный стальной с плавающей крышей.",
        description:
          "Данная конструкция резервуара предполагает использование кровли, располагаемой на поверхности хранимого продукта с полным контактом. Плавучесть кровли достигается за счет применения герметичных отсеков или коробов. В опорожненном вертикальном цилиндрическом резервуаре крыша располагается на специальных опорах, смонтированных на днище. Исключение вращения плавающей крыши резервуара достигается использованием направляющих труб. Недостаток плавающей крыши – возможность загрязнения хранимого продукта вследствие осадков. Также бывают случаи примерзание уплотняющего затвора крыши к стенке. Преимущества такой конструкции кровли в снижении потерь продукта от испарения.",
      },
      type4: {
        title:
          "4. Цилиндрические резервуары с защитной стенкой («стакан в стакане»).",
        description:
          "Данная конструкция резервуара вертикального используется на производственных площадках, где нет возможности устройства обваловки резервуарного парка. Также цилиндрические резервуары с защитной стенкой строятся вблизи водоемов и жилых поселений для обеспечения безопасности окружающей среды и населения. Защитная стенка монтируется с целью исключить разлив продукта при разгерметизации рабочего резервуара.",
      },
      additional:
        "Наряду с вертикальными резервуарами завод производит горизонтальные резервуары и подземные емкости.",
      production: {
        title: "Производство резервуаров вертикальных стальных:",
        intro:
          "Вертикальные стальные резервуары производятся на специально оборудованных заводах 2 методами:",
        method1: {
          title: "1. Методом рулонирования:",
          description:
            "При таком способе производства стенка, днище и крыша поставляются на площадку строительства в виде свернутых в рулоны сварных полотнищ. Преимущества данного метода состоит в:",
          advantages: [
            "сокращении времени монтажа в 3-4 раза за счет минимизации сварочных работ на монтажной площадке в среднем на 80%;",
            "обеспечении высокого качества сварных швов за счет использования 2-сторонней автоматической сварки в заводских условиях на заводе-изготовителе;",
          ],
        },
        method2: {
          title: "2. Методом полистовой сборки:",
          description:
            "Способ заключается в том, что в заводских условиях подготавливаются листы стенки (максимальный размер листов: 2500×10000 мм), вальцованные в предусмотренный проектом КМ радиус, и листовые детали днища. Далее листовые элементы специальным образом упаковываются и готовятся к транспортировке. Сборка (сварка) стенки и днища полностью осуществляется на монтажной площадке.",
          note: "Резервуары стальные вертикальные цилиндрические изготавливаются из малоуглеродистой, низколегированной илии коррозионностойкой стали.",
        },
      },
      construction: {
        title: "Элементы конструкции резервуара вертикального стального",
        bottom: {
          title: "Днище резервуара стального вертикального цилиндрического.",
          description:
            "Для производства днищ резервуаров вертикальных типа РВС применяется сталь толщиной не менее 4 мм. В емкостях малого объема (до 1000 м³ включительно) днище, как правило, выполняется плоской формы. Для РВС объемом от 1000 м³ днище резервуара изготавливается с уклоном от центра или в центр. Уклон делается в отношении 1 к 100. На днище резервуаров РВС объемом больше 1000 м³ устанавливается кольцевая окрайка. Толщина стали для окрайки – от 6 мм и больше в зависимости от толщины нижнего пояса РВС. Зависимость показана в таблице:",
          table: {
            headers: [
              "Толщина нижнего пояса резервуара",
              "Минимальная толщина кольцевой окрайки",
            ],
            rows: [
              ["до 7 мм (включительно)", "6 мм"],
              ["8 мм – 11 мм (включительно)", "7 мм"],
              ["12 мм – 16 мм (включительно)", "9 мм"],
              ["17 мм – 20 мм (включительно)", "12 мм"],
              ["20 мм – 26 мм (включительно)", "14 мм"],
              ["26 мм и выше", "16 мм"],
            ],
          },
          additional:
            "Днище резервуара также часто оборудуется зумпфами зачистки. Они предназначены для отвода подтоварной воды, различных отложений и загрязнений и устанавливаются в специально подготовленном приямке. Если уклон днища к центру, зумпф зачистки располагается в центре днища; если уклон от центра (или при плоской конструкции днища) – зумпф располагается рядом со стенкой на расстоянии 600 мм и выше. Существует два типа зумпфов: круглый и лотковый.",
        },
        wall: {
          title: "Стенка резервуара стального вертикального цилиндрического.",
          description:
            "Стенка представляет собой стальное полотнище, сваренное из листового металлопроката в несколько поясов. Методом рулонирования стенка готовится на заводе в форме прямоугольно полотнища, сваренного из листового металлопроката 1,5х6 м. Вертикальные стыки листов имеют разбежку, а продольные швы готовятся с разделкой для зубчатого монтажного шва. На полотнище оставляется технологический припуск до 300 мм, из которого и вырезается зубчатый монтажный стык. Для стенок полистовой сборки применяются прокат шириной от 1,8 м до 3 м и длиной до 12 метров. Обработка кромок листов осуществляется механическим способом (фрезерованием) или плазменной резкой на машинах с программным управлением. Вальцовка листов производится на 3- или 4-валковых листогибочных машинах.",
        },
        thickness: {
          title: "Толщины стенки",
          description:
            "Толщины поясов стенки определяются на этапе проектирования вертикального цилиндрического резервуара для обеспечения прочности всей конструкции. Расчетные толщины поясов стенки могут включать припуск (запас) на коррозию. ГОСТом 52910-2008 предусмотрены минимальные конструктивные толщины листов стенки резервуаров вертикальных стальных РВС в зависимости от его диаметра:",
          table: {
            headers: ["Диаметр резервуара", "Толщина листов стенки, минимум"],
            rows: [
              ["до 16 м (включительно)", "5 мм"],
              ["16 м – 25 м (включительно)", "6 мм"],
              ["25 м- 40 м (включительно)", "8 мм"],
              ["40 м – 65 м (включительно)", "10 мм"],
              ["65 м и выше", "12 мм"],
            ],
          },
        },
        openings: {
          title: "Расположение в стенке люков и патрубков",
          description:
            "Для расположения в стенке вертикального цилиндрического резервуара люков и патрубков предусматриваются специальные отверстия, которые оснащаются усиливающей накладкой по окружности устанавливаемого изделия (при установке изделий с условным проходом больше 70 мм). Во всех резервуарах типа РВС предусмотрено расположение люка-лаза в первом поясе стенки. Резервуары вертикальные с плавающей крышей РВСПк и с понтоном РВСП оснащаются дополнительным люком-лазом для выхода на понтон или крышу.",
        },
        anchors: {
          title: "Анкерные крепления стенки",
          description:
            "При усилии от расчетной сейсмической или ветровой нагрузки, превышающем восстанавливающий момент, предусматривается анкерные крепления стенки. Их располагают по окружности стенки на расстоянии до 3 м друг от друга.",
        },
        stiffeners: {
          title: "Ребра жесткости.",
          description:
            "Вверху стенки цилиндрического резервуара располагается основное кольцевое ребро жесткости. У резервуаров РВСПк с плавающей крышей ребра жесткости устанавливаются на внешней стороне стенки ниже верхнего края на 1,1 м – 1,25 м. Кольцевое ребро жесткости помимо функции усиления конструкции резервуара выполняет роль площадки обслуживания.",
        },
        roof: {
          title: "Крыша резервуара вертикального стального.",
          description:
            "В зависимости от типоразмера и прочих специфических особенностей в вертикальных цилиндрических резервуарах применяются стационарные крыши, которые делятся на бескаркасные (самонесущие) и каркасные крыши конической и сферической форм, а также плавающие крыши. Кровля резервуара опирается на стенку с кольцевым ребром жесткости. Толщина настила крыши и сечение элементов каркасных профилей проектируются от 5 мм.",
        },
      },
    },
    uz: {
      title: "VERTIKAL PO'LAT REZERVUARLAR TURLARI RVS:",
      intro1: "Silindrsimon rezervuar turini tanlash uning",
      intro2: "loyihalash",
      intro3:
        "bosqichida saqlanadigan mahsulot, korxona texnologik jarayonining xususiyatlari va o'rnatiladigan maydonning xususiyatlariga qarab amalga oshiriladi.",
      intro4:
        "Vertikal silindrsimon rezervuarlarning 4 ta asosiy turi farqlanadi:",
      types: [
        "RVS – statsionar tomga ega bo'lmagan vertikal po'lat rezervuar.",
        "RVSP – statsionar tom va pontonga ega vertikal po'lat rezervuar.",
        "RVSkp – suzuvchi tomga ega vertikal po'lat rezervuar.",
        "Himoya devori bilan rezervuarlar («stakan ichida stakan»).",
      ],
      type1: {
        title:
          "1. RVS – statsionar tomga ega bo'lmagan vertikal po'lat rezervuar.",
        description:
          "Nisbatan past uchuvchanlikka ega mahsulotlarni (to'yingan bug'lar bosimi 26,6 kPa dan ko'p bo'lmagan) va alangalanish harorati 610°C dan yuqori bo'lgan mahsulotlarni saqlash uchun ishlatiladi. Bunday silindrsimon rezervuarlarda ko'pincha mazut, dizel yoqilg'isi, uy kerosini, bitum, gudron, moylar (shu jumladan oziq-ovqat moylari) va suv saqlanadi. Shuningdek, statsionar tomga ega bo'lmagan vertikal po'lat silindrsimon rezervuarlar ko'proq uchuvchan (DNI 93,3 kPa gacha) va oson yonadigan mahsulotlarni saqlash uchun qo'llanilishi mumkin. Bunday hollarda RVS rezervuari gaz bog'lanishi yoki engil fraksiyalarni tutish qurilmasiga jihozlangan.",
      },
      type2: {
        title:
          "2. RVSP – statsionar tom va pontonga ega vertikal silindrsimon rezervuarlar",
        description:
          "To'yingan bug'lar bosimi 26,6 – 93,3 kPa oralig'ida va alangalanish harorati 610°C dan past bo'lgan mahsulotlarni saqlash uchun ishlatiladi. Ko'pincha ular neft, benzin, kerosin, reaktiv yoqilg'i saqlanadi. Ponton - bu rezervuar ichidagi mahsulot oynasiga joylashtirilgan, uning maydonining kamida 90% ni qoplaydigan disk shaklidagi qattiq gaz o'tkazmaydigan suzuvchi qoplamadir. Ponton va rezervuar devori orasidagi halqa bo'shlig'i maxsus sızdırmazlik klapani bilan muhrlanadi. Ponton vertikal rezervuar gaz-havo fazasining saqlanadigan mahsulot bug'lari bilan to'yinganlik tezligini kamaytirish uchun xizmat qiladi.",
      },
      type3: {
        title: "3. RVSkp – suzuvchi tomga ega vertikal po'lat rezervuar.",
        description:
          "Bu rezervuar konstruksiyasi saqlanadigan mahsulot yuzasida to'liq aloqa bilan joylashgan qoplamani ishlatishni nazarda tutadi. Qoplamaning suzuvchanligi sızdırmaz bo'limlar yoki qutilar qo'llanilishi orqali erishiladi. Bo'shatilgan vertikal silindrsimon rezervuarda tom maxsus tayanchlarga, taglikda o'rnatilgan tayanchlarga joylashtiriladi. Suzuvchi rezervuar tomining aylanishini istisno qilish yo'naltiruvchi quvurlardan foydalanish orqali erishiladi. Suzuvchi tomning kamchiligi - yog'ingarchilik tufayli saqlanadigan mahsulotning ifloslanishi ehtimoli. Shuningdek, tomning sızdırmazlik klapanining devorga muzlash holatlari ham bo'ladi. Bunday qoplamaning afzalliklari mahsulotning bug'lanishdan yo'qotishlarini kamaytirishda.",
      },
      type4: {
        title:
          "4. Himoya devori bilan silindrsimon rezervuarlar («stakan ichida stakan»).",
        description:
          "Bu vertikal rezervuar konstruksiyasi rezervuar parkini himoya qilish imkoniyati bo'lmagan ishlab chiqarish maydonlarida qo'llaniladi. Shuningdek, atrof-muhit va aholi xavfsizligini ta'minlash uchun suv havzalari va yashash joylari yaqinida himoya devori bilan silindrsimon rezervuarlar quriladi. Himoya devori ishchi rezervuarining sızdırmazligi buzilganda mahsulotning to'kilishini istisno qilish maqsadida o'rnatiladi.",
      },
      additional:
        "Vertikal rezervuarlar bilan bir qatorda zavod gorizontal rezervuarlar va er osti idishlarini ishlab chiqaradi.",
      production: {
        title: "Vertikal po'lat rezervuarlarni ishlab chiqarish:",
        intro:
          "Vertikal po'lat rezervuarlar maxsus jihozlangan zavodlarda 2 ta usul bilan ishlab chiqariladi:",
        method1: {
          title: "1. Rulonlash usuli:",
          description:
            "Bunday ishlab chiqarish usulida devor, taglik va tom qurilish maydoniga rulonlarga o'ralgan payvandlangan matolar ko'rinishida yetkazib beriladi. Bu usulning afzalliklari quyidagilarda:",
          advantages: [
            "montaj maydonchasida payvandlash ishlarini o'rtacha 80% ga minimallashtirish orqali montaj vaqtini 3-4 marta qisqartirish;",
            "zavod-iste'molchi zavodida zavod sharoitida 2 tomonlama avtomatik payvandlashdan foydalanish orqali yuqori sifatli payvand tikishlarini ta'minlash;",
          ],
        },
        method2: {
          title: "2. Varaqlash yig'ish usuli:",
          description:
            "Usul shundan iboratki, zavod sharoitida devor varaqlari (maksimal varaq o'lchamlari: 2500×10000 mm), loyihada nazarda tutilgan KM radiusiga valtsovka qilingan va taglikning varaqli qismlari tayyorlanadi. Keyin varaqli elementlar maxsus tarzda qadoqlanadi va tashishga tayyorlanadi. Devor va taglikning yig'ish (payvandlash) to'liq montaj maydonchasida amalga oshiriladi.",
          note: "Vertikal po'lat silindrsimon rezervuarlar kam uglerodli, past legirlangan yoki korroziyaga chidamli po'latdan ishlab chiqariladi.",
        },
      },
      construction: {
        title: "Vertikal po'lat rezervuar konstruksiyasi elementlari",
        bottom: {
          title: "Vertikal po'lat silindrsimon rezervuar tagligi.",
          description:
            "RVS tipidagi vertikal rezervuarlar tagliklarini ishlab chiqarish uchun kamida 4 mm qalinlikdagi po'lat qo'llaniladi. Kichik hajmli idishlarda (1000 m³ gacha) taglik, odatda, tekis shaklda bajariladi. 1000 m³ dan boshlab RVS uchun rezervuar tagligi markazdan yoki markazga qarab qiyalik bilan ishlab chiqariladi. Qiyalik 1 dan 100 gacha nisbatda qilinadi. 1000 m³ dan katta hajmli RVS rezervuarlarida halqa qirasi o'rnatiladi. Qira uchun po'lat qalinligi - RVS pastki kamarining qalinligiga qarab 6 mm va undan ko'p. Bog'liqlik jadvalda ko'rsatilgan:",
          table: {
            headers: [
              "Rezervuar pastki kamarining qalinligi",
              "Halqa qirasining minimal qalinligi",
            ],
            rows: [
              ["7 mm gacha (kiritilgan)", "6 mm"],
              ["8 mm – 11 mm (kiritilgan)", "7 mm"],
              ["12 mm – 16 mm (kiritilgan)", "9 mm"],
              ["17 mm – 20 mm (kiritilgan)", "12 mm"],
              ["20 mm – 26 mm (kiritilgan)", "14 mm"],
              ["26 mm va yuqori", "16 mm"],
            ],
          },
          additional:
            "Rezervuar tagligi ham ko'pincha tozalash chuqurlari bilan jihozlangan. Ular mahsulot ostidagi suvni, turli cho'kmalar va ifloslanishlarni chiqarish uchun mo'ljallangan va maxsus tayyorlangan chuqurda o'rnatiladi. Agar taglik qiyaligi markazga qarab bo'lsa, tozalash chuquri taglik markazida joylashadi; agar qiyalik markazdan (yoki taglikning tekis konstruksiyasida) - chuqur devor yonida 600 mm va undan yuqori masofada joylashadi. Ikki turdagi chuqurlar mavjud: dumaloq va novli.",
        },
        wall: {
          title: "Vertikal po'lat silindrsimon rezervuar devori.",
          description:
            "Devor - bu bir nechta kamarlarda varaqli metall prokatdan payvandlangan po'lat matodir. Rulonlash usuli bilan devor zavodda 1,5x6 m varaqli metall prokatdan payvandlangan to'rtburchak mato shaklida tayyorlanadi. Varaqlarning vertikal tikishlari tarqoq, uzunlamasina tikishlar esa tishli montaj tikish uchun qirralanadi. Matoda 300 mm gacha texnologik qo'shimcha qoldiriladi, undan tishli montaj tikish kesiladi. Varaqli yig'ish devorlari uchun 1,8 m dan 3 m gacha kenglikda va 12 metr gacha uzunlikdagi prokat qo'llaniladi. Varaqlarning qirralarini qayta ishlash mexanik usul (frezalash) yoki dasturiy boshqaruvli mashinalarda plazma kesish orqali amalga oshiriladi. Varaqlarning valtsovkasi 3- yoki 4-valtsli varaq egish mashinalarida amalga oshiriladi.",
        },
        thickness: {
          title: "Devor qalinligi",
          description:
            "Devor kamarlarining qalinligi butun konstruksiyaning mustahkamligini ta'minlash uchun vertikal silindrsimon rezervuar loyihalash bosqichida belgilanadi. Devor kamarlarining hisoblangan qalinligi korroziya uchun qo'shimcha (zaxira) ni o'z ichiga olishi mumkin. GOST 52910-2008 ga muvofiq, uning diametriga qarab vertikal po'lat RVS rezervuarlarining devor varaqlarining minimal konstruktiv qalinligi belgilangan:",
          table: {
            headers: [
              "Rezervuar diametri",
              "Devor varaqlarining qalinligi, minimum",
            ],
            rows: [
              ["16 m gacha (kiritilgan)", "5 mm"],
              ["16 m – 25 m (kiritilgan)", "6 mm"],
              ["25 m- 40 m (kiritilgan)", "8 mm"],
              ["40 m – 65 m (kiritilgan)", "10 mm"],
              ["65 m va yuqori", "12 mm"],
            ],
          },
        },
        openings: {
          title: "Devor ichida lyuklar va patrubklar joylashishi",
          description:
            "Vertikal silindrsimon rezervuar devorida lyuklar va patrubklar joylashtirish uchun maxsus teshiklar nazarda tutilgan, ular o'rnatiladigan mahsulot atrofiga kuchaytiruvchi qoplamalar bilan jihozlangan (70 mm dan katta nominal o'tkazuvchanlikka ega mahsulotlarni o'rnatishda). Barcha RVS tipidagi rezervuarlarda devorning birinchi kamarida lyuk-laz joylashishi nazarda tutilgan. Suzuvchi tomga ega vertikal rezervuarlar RVSpk va pontonga ega RVSP ponton yoki tomga chiqish uchun qo'shimcha lyuk-laz bilan jihozlangan.",
        },
        anchors: {
          title: "Devorning ankerni mahkamlash",
          description:
            "Hisoblangan seysmik yoki shamol yukidan kuch tiklash momentidan oshganda, devorning ankerni mahkamlash nazarda tutilgan. Ular devor atrofiga bir-biridan 3 m gacha masofada joylashtiriladi.",
        },
        stiffeners: {
          title: "Qattiqlik qovurg'alari.",
          description:
            "Silindrsimon rezervuar devorining yuqori qismida asosiy halqa qattiqlik qovurg'asi joylashgan. Suzuvchi tomga ega RVSpk rezervuarlarida qattiqlik qovurg'alari devorning tashqi tomonida yuqori chetidan 1,1 m – 1,25 m pastda o'rnatiladi. Halqa qattiqlik qovurg'asi rezervuar konstruksiyasini kuchaytirish funksiyasidan tashqari texnik xizmat ko'rsatish maydonchasi rolini bajaradi.",
        },
        roof: {
          title: "Vertikal po'lat rezervuar tom.",
          description:
            "Tip-o'lcham va boshqa maxsus xususiyatlarga qarab vertikal silindrsimon rezervuarlarda statsionar tomlar qo'llaniladi, ular karkassiz (o'z-o'zidan tayanadigan) va konik va sferik shakldagi karkasli tomlar, shuningdek suzuvchi tomlarga bo'linadi. Rezervuar qoplamasi halqa qattiqlik qovurg'asi bilan devorga tayanadi. Tom qoplamasining qalinligi va karkasli profillar elementlarining kesimi 5 mm dan loyihalashtiriladi.",
        },
      },
    },
    en: {
      title: "TYPES OF VERTICAL STEEL RESERVOIRS RVS:",
      intro1:
        "The choice of cylindrical reservoir type is made at the stage of its",
      intro2: "design",
      intro3:
        "depending on the stored product, features of the enterprise's technological process and characteristics of the site where it will be installed.",
      intro4: "There are 4 main types of vertical cylindrical reservoirs:",
      types: [
        "RVS – vertical steel reservoir with stationary roof without pontoon.",
        "RVSP – vertical steel reservoir with stationary roof and pontoon.",
        "RVSkp – vertical steel reservoir with floating roof.",
        "Reservoirs with protective wall («cup in cup»).",
      ],
      type1: {
        title:
          "1. RVS – vertical steel reservoir with stationary roof without pontoon.",
        description:
          "Used for storing products with relatively low volatility (with saturated vapor pressure not more than 26.6 kPa) and ignition temperature above 610°C. Most often, such cylindrical reservoirs store fuel oil, diesel fuel, household kerosene, bitumen, tar, oils (including food oils) and water. Also, vertical steel cylindrical reservoirs with stationary roof without pontoon can be used for storing more volatile (with vapor pressure up to 93.3 kPa) and easily flammable products. In such cases, the RVS reservoir is equipped with gas piping or light fraction recovery unit.",
      },
      type2: {
        title:
          "2. RVSP – vertical cylindrical reservoirs with stationary roof and pontoon",
        description:
          "Used for storing products with saturated vapor pressure in the range of 26.6 – 93.3 kPa and ignition temperature below 610°C. Most often, oils, gasolines, kerosene, jet fuel are stored in them. The pontoon is a rigid gas-tight floating cover in the form of a disk, placed on the product mirror inside the cylindrical reservoir so that at least 90% of its area is covered. The annular gap between the pontoon and the reservoir wall is sealed with a special sealing shutter. The pontoon serves to reduce the rate of saturation of the gas-air space of the vertical reservoir with vapors of the stored product.",
      },
      type3: {
        title: "3. RVSkp – vertical steel reservoir with floating roof.",
        description:
          "This reservoir design involves the use of a roof located on the surface of the stored product with full contact. The buoyancy of the roof is achieved by using sealed compartments or boxes. In an empty vertical cylindrical reservoir, the roof is located on special supports mounted on the bottom. Prevention of rotation of the floating roof of the reservoir is achieved by using guide pipes. The disadvantage of the floating roof is the possibility of contamination of the stored product due to precipitation. There are also cases of freezing of the roof sealing shutter to the wall. The advantages of such roof design are in reducing product losses from evaporation.",
      },
      type4: {
        title: "4. Cylindrical reservoirs with protective wall («cup in cup»).",
        description:
          "This vertical reservoir design is used at production sites where there is no possibility of arranging embankment of the reservoir park. Also, cylindrical reservoirs with protective wall are built near water bodies and residential settlements to ensure environmental and population safety. The protective wall is mounted to prevent product spillage when the working reservoir is depressurized.",
      },
      additional:
        "Along with vertical reservoirs, the plant produces horizontal reservoirs and underground tanks.",
      production: {
        title: "Production of vertical steel reservoirs:",
        intro:
          "Vertical steel reservoirs are produced at specially equipped plants by 2 methods:",
        method1: {
          title: "1. By rolling method:",
          description:
            "With this production method, the wall, bottom and roof are delivered to the construction site in the form of welded sheets rolled into rolls. The advantages of this method consist in:",
          advantages: [
            "reducing installation time by 3-4 times by minimizing welding work at the installation site by an average of 80%;",
            "ensuring high quality of welded joints due to the use of 2-sided automatic welding in factory conditions at the manufacturer's plant;",
          ],
        },
        method2: {
          title: "2. By sheet assembly method:",
          description:
            "The method consists in the fact that in factory conditions, wall sheets (maximum sheet size: 2500×10000 mm), rolled to the radius provided by the KM project, and sheet bottom parts are prepared. Then sheet elements are specially packaged and prepared for transportation. Assembly (welding) of the wall and bottom is completely carried out at the installation site.",
          note: "Vertical steel cylindrical reservoirs are made of low-carbon, low-alloy or corrosion-resistant steel.",
        },
      },
      construction: {
        title: "Elements of vertical steel reservoir construction",
        bottom: {
          title: "Bottom of vertical steel cylindrical reservoir.",
          description:
            "For the production of bottoms of vertical reservoirs of RVS type, steel with a thickness of at least 4 mm is used. In small volume tanks (up to 1000 m³ inclusive), the bottom is usually made in a flat shape. For RVS with a volume from 1000 m³, the reservoir bottom is made with a slope from the center or to the center. The slope is made in a ratio of 1 to 100. On the bottom of RVS reservoirs with a volume of more than 1000 m³, a ring edge is installed. The thickness of steel for the edge is from 6 mm and more depending on the thickness of the lower belt of RVS. The dependence is shown in the table:",
          table: {
            headers: [
              "Thickness of reservoir lower belt",
              "Minimum thickness of ring edge",
            ],
            rows: [
              ["up to 7 mm (inclusive)", "6 mm"],
              ["8 mm – 11 mm (inclusive)", "7 mm"],
              ["12 mm – 16 mm (inclusive)", "9 mm"],
              ["17 mm – 20 mm (inclusive)", "12 mm"],
              ["20 mm – 26 mm (inclusive)", "14 mm"],
              ["26 mm and above", "16 mm"],
            ],
          },
          additional:
            "The reservoir bottom is also often equipped with cleaning sumps. They are designed to drain product water, various deposits and contaminants and are installed in a specially prepared pit. If the bottom slope is to the center, the cleaning sump is located in the center of the bottom; if the slope is from the center (or with a flat bottom design) - the sump is located near the wall at a distance of 600 mm and above. There are two types of sumps: round and tray.",
        },
        wall: {
          title: "Wall of vertical steel cylindrical reservoir.",
          description:
            "The wall is a steel sheet welded from sheet metal in several belts. By the rolling method, the wall is prepared at the factory in the form of a rectangular sheet welded from sheet metal 1.5x6 m. Vertical joints of sheets have staggering, and longitudinal seams are prepared with edge preparation for a toothed mounting seam. A technological allowance up to 300 mm is left on the sheet, from which the toothed mounting joint is cut out. For sheet assembly walls, rolled products with a width from 1.8 m to 3 m and a length up to 12 meters are used. Edge processing of sheets is carried out mechanically (milling) or plasma cutting on machines with program control. Rolling of sheets is performed on 3- or 4-roll sheet bending machines.",
        },
        thickness: {
          title: "Wall thicknesses",
          description:
            "The thicknesses of wall belts are determined at the design stage of the vertical cylindrical reservoir to ensure the strength of the entire structure. Calculated thicknesses of wall belts may include allowance (reserve) for corrosion. GOST 52910-2008 provides for minimum constructive thicknesses of wall sheets of vertical steel RVS reservoirs depending on its diameter:",
          table: {
            headers: ["Reservoir diameter", "Wall sheet thickness, minimum"],
            rows: [
              ["up to 16 m (inclusive)", "5 mm"],
              ["16 m – 25 m (inclusive)", "6 mm"],
              ["25 m- 40 m (inclusive)", "8 mm"],
              ["40 m – 65 m (inclusive)", "10 mm"],
              ["65 m and above", "12 mm"],
            ],
          },
        },
        openings: {
          title: "Location of hatches and nozzles in the wall",
          description:
            "For the location of hatches and nozzles in the wall of a vertical cylindrical reservoir, special holes are provided, which are equipped with reinforcing overlay around the installed product (when installing products with nominal passage more than 70 mm). In all RVS type reservoirs, the location of a manhole in the first wall belt is provided. Vertical reservoirs with floating roof RVSpk and with pontoon RVSP are equipped with an additional manhole for access to the pontoon or roof.",
        },
        anchors: {
          title: "Wall anchor fastenings",
          description:
            "When the force from the calculated seismic or wind load exceeds the restoring moment, wall anchor fastenings are provided. They are located around the wall at a distance of up to 3 m from each other.",
        },
        stiffeners: {
          title: "Stiffening ribs.",
          description:
            "At the top of the cylindrical reservoir wall, the main ring stiffening rib is located. In RVSpk reservoirs with floating roof, stiffening ribs are installed on the outer side of the wall below the upper edge by 1.1 m – 1.25 m. The ring stiffening rib, in addition to the function of strengthening the reservoir structure, serves as a maintenance platform.",
        },
        roof: {
          title: "Roof of vertical steel reservoir.",
          description:
            "Depending on the type size and other specific features, stationary roofs are used in vertical cylindrical reservoirs, which are divided into frameless (self-supporting) and frame roofs of conical and spherical shapes, as well as floating roofs. The reservoir roof rests on the wall with a ring stiffening rib. The thickness of the roof deck and the cross-section of frame profile elements are designed from 5 mm.",
        },
      },
    },
  };

  // Joriy tilni olish
  const currentTranslation = translations[lang] || translations.ru;

  return (
    <div className="reservoir-types-section">
      <h2 className="title">{currentTranslation.title}</h2>
      <p>
        {currentTranslation.intro1} <a href="#">{currentTranslation.intro2}</a>{" "}
        {currentTranslation.intro3}
      </p>
      <p>{currentTranslation.intro4}</p>
      <ul>
        {currentTranslation.types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>

      <div className="type-block">
        <h3>{currentTranslation.type1.title}</h3>
        <p>{currentTranslation.type1.description}</p>
      </div>

      <div className="type-block">
        <h3>{currentTranslation.type2.title}</h3>
        <p>{currentTranslation.type2.description}</p>
      </div>

      <div className="type-block">
        <h3>{currentTranslation.type3.title}</h3>
        <p>{currentTranslation.type3.description}</p>
      </div>

      <div className="type-block">
        <h3>{currentTranslation.type4.title}</h3>
        <p>{currentTranslation.type4.description}</p>
      </div>

      <p>{currentTranslation.additional}</p>

      <h2 className="title">{currentTranslation.production.title}</h2>
      <p>{currentTranslation.production.intro}</p>

      <div className="type-block">
        <h3>{currentTranslation.production.method1.title}</h3>
        <p>{currentTranslation.production.method1.description}</p>
        {currentTranslation.production.method1.advantages.map(
          (advantage, index) => (
            <p key={index}>- {advantage}</p>
          )
        )}
      </div>

      <div className="type-block">
        <h3>{currentTranslation.production.method2.title}</h3>
        <p>{currentTranslation.production.method2.description}</p>
        <p>
          <b>{currentTranslation.production.method2.note}</b>
        </p>
      </div>

      <h2 className="title">{currentTranslation.construction.title}</h2>

      <h3>{currentTranslation.construction.bottom.title}</h3>
      <p>{currentTranslation.construction.bottom.description}</p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {currentTranslation.construction.bottom.table.headers.map(
                (header, index) => (
                  <th key={index}>{header}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {currentTranslation.construction.bottom.table.rows.map(
              (row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <p>{currentTranslation.construction.bottom.additional}</p>

      <h3>{currentTranslation.construction.wall.title}</h3>
      <p>{currentTranslation.construction.wall.description}</p>

      <h3>{currentTranslation.construction.thickness.title}</h3>
      <p>{currentTranslation.construction.thickness.description}</p>

      <table>
        <thead>
          <tr>
            {currentTranslation.construction.thickness.table.headers.map(
              (header, index) => (
                <th key={index}>{header}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {currentTranslation.construction.thickness.table.rows.map(
            (row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>

      <h3>{currentTranslation.construction.openings.title}</h3>
      <p>{currentTranslation.construction.openings.description}</p>

      <h3>{currentTranslation.construction.anchors.title}</h3>
      <p>{currentTranslation.construction.anchors.description}</p>

      <h3>{currentTranslation.construction.stiffeners.title}</h3>
      <p>{currentTranslation.construction.stiffeners.description}</p>

      <h3>{currentTranslation.construction.roof.title}</h3>
      <p>{currentTranslation.construction.roof.description}</p>
    </div>
  );
}
