// Hamburger menü
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});

// Favorilere Ekle Butonu
const favoriBtn = document.querySelector('.favori-btn');
if (favoriBtn) {
  favoriBtn.addEventListener('click', () => {
    favoriBtn.classList.toggle('active');
  });
}
const sezonSelect = document.getElementById('sezonSelect');

const bolumlarContainer = document.getElementById('bolumlar-container');

const sezonlar = {
  1: [
    { no: 1, baslik: "Winter Is Coming", aciklama: "Ned Stark Kış Yaklaşıyor’un anlamını öğrenirken, Kral Robert Starkları ziyaret eder." },
    { no: 2, baslik: "The Kingsroad", aciklama: "Starklar Kışyarı’na dönerken, yol boyunca tehlikelerle karşılaşırlar." },
    { no: 3, baslik: "Lord Snow", aciklama: "Ned, Kralın Şehri’nde tehlikeli entrikalarla yüzleşir; Jon Snow Gece Nöbeti’ne katılır." },
    { no: 4, baslik: "Cripples, Bastards, and Broken Things", aciklama: "Bran’in kaderi değişirken, Tyrion Kışyarı’na varır." },
    { no: 5, baslik: "The Wolf and the Lion", aciklama: "Ned ve Cersei arasında gerilim yükselir. Arya, tehlikeli bir yolculuğa çıkar." },
    { no: 6, baslik: "A Golden Crown", aciklama: "Viserys'in hırsı trajik sonuçlara yol açar. Tyrion strateji geliştirir." },
    { no: 7, baslik: "You Win or You Die", aciklama: "Ned, Kralın Sırlarını öğrenirken büyük bir oyun başlar." },
    { no: 8, baslik: "The Pointy End", aciklama: "Savaşın gölgesinde hayatta kalma mücadelesi başlar." },
    { no: 9, baslik: "Baelor", aciklama: "Trajik kararlar alındığı bir dönüm noktası yaşanır." },
    { no: 10, baslik: "Fire and Blood", aciklama: "Ejderhaların uyanışı ile dünya değişir." }
  ],

  2: [
    { no: 1, baslik: "The North Remembers", aciklama: "Kuzey intikam peşindedir. Tyrion, yeni görevine alışmaya çalışır." },
    { no: 2, baslik: "The Night Lands", aciklama: "Arya yeni kimliklerle hayatta kalmaya çalışır." },
    { no: 3, baslik: "What Is Dead May Never Die", aciklama: "Denizlerin gücü büyür; sadakatler test edilir." },
    { no: 4, baslik: "Garden of Bones", aciklama: "Savaşın acımasızlığı ortaya çıkar." },
    { no: 5, baslik: "The Ghost of Harrenhal", aciklama: "Geçmişin hayaletleri peşlerini bırakmaz." },
    { no: 6, baslik: "The Old Gods and the New", aciklama: "Yeni inançlar ve eski düşmanlıklar çatışır." },
    { no: 7, baslik: "A Man Without Honor", aciklama: "Onur ve ihanet arasındaki ince çizgi ortaya çıkar." },
    { no: 8, baslik: "The Prince of Winterfell", aciklama: "Sürpriz gelişmeler Kuzey’de sarsıntı yaratır." },
    { no: 9, baslik: "Blackwater", aciklama: "Kralın Şehri savunması destansı bir savaşa sahne olur." },
    { no: 10, baslik: "Valar Morghulis", aciklama: "Ölümler ve yeni başlangıçlar kapıda." }
  ],

  3: [
    { no: 1, baslik: "Valar Dohaeris", aciklama: "Jon Snow Gece Nöbeti’nde yerini alırken, Daenerys gücünü artırır." },
    { no: 2, baslik: "Dark Wings, Dark Words", aciklama: "Kralın Şehri’nde söylentiler ve entrikalar hızlanır." },
    { no: 3, baslik: "Walk of Punishment", aciklama: "Sürgündeki karakterler için zorlu sınavlar başlar." },
    { no: 4, baslik: "And Now His Watch Is Ended", aciklama: "Gece Nöbeti'nin sınırları zorlanır." },
    { no: 5, baslik: "Kissed by Fire", aciklama: "İhanet ve aşk arasındaki ince çizgi belirginleşir." },
    { no: 6, baslik: "The Climb", aciklama: "Güç için tehlikeli tırmanışlar yapılır." },
    { no: 7, baslik: "The Bear and the Maiden Fair", aciklama: "Güç dengeleri yeniden şekillenir." },
    { no: 8, baslik: "Second Sons", aciklama: "Hainler ortaya çıkar, dostlar sınanır." },
    { no: 9, baslik: "The Rains of Castamere", aciklama: "Kırmızı Düğün trajedisi yaşanır." },
    { no: 10, baslik: "Mhysa", aciklama: "Daenerys yeni bir imparatorluk kurar." }
  ],

  4: [
    { no: 1, baslik: "Two Swords", aciklama: "Tywin Lannister iki yeni kılıç dövdürür. Arya, Sandor Clegane ile tehlikeli bir yolculuğa çıkar. Jon, Kara Kale'ye döner." },
    { no: 2, baslik: "The Lion and the Rose", aciklama: "Joffrey ile Margaery'nin düğün günü gelir çatar. Ancak ziyafet hiç kimsenin beklemediği bir şekilde sona erer." },
    { no: 3, baslik: "Breaker of Chains", aciklama: "Joffrey’nin ölümünün ardından Tyrion suçlanır. Daenerys, köle şehri Meereen’e yaklaşır." },
    { no: 4, baslik: "Oathkeeper", aciklama: "Jaime, Brienne’e bir görev verir. Daenerys Meereen’de devrim başlatır. Bran ve ekibi esir düşer." },
    { no: 5, baslik: "First of His Name", aciklama: "Tommen tahta çıkar. Daenerys, yönetmenin zorluklarını keşfeder. Sansa ve Baelish, Eyrie’ye ulaşır." },
    { no: 6, baslik: "The Laws of Gods and Men", aciklama: "Tyrion yargılanır. Stannis ve Davos Braavos’a gider. Yara, Theon’u kurtarmaya çalışır." },
    { no: 7, baslik: "Mockingbird", aciklama: "Tyrion, kendisine şampiyon seçer. Arya ve Sandor, farklı yollarla intikam alır. Lysa Arryn çöküşe geçer." },
    { no: 8, baslik: "The Mountain and the Viper", aciklama: "Oberyn, Tyrion’un hayatını kurtarmak için Gregor Clegane’e karşı dövüşür. Sonuç herkes için sarsıcıdır." },
    { no: 9, baslik: "The Watchers on the Wall", aciklama: "Yabanıllar Kara Kale’ye saldırır. Jon Snow büyük bir liderlik gösterir. Gece Nöbetçileri savunmadadır." },
    { no: 10, baslik: "The Children", aciklama: "Bran kehanet yolculuğunu tamamlar. Tyrion beklenmedik bir karar verir. Arya uzak diyarlara yelken açar." }
  ],

  5: [
    { no: 1, baslik: "The Wars to Come", aciklama: "Cersei, Margaery'nin yükselişini kıskanırken Tyrion ve Varys Essos’ta yeni bir gelecek arayışına girer. Jon Snow, Kara Kale'de yeni kararlarla karşı karşıyadır." },
    { no: 2, baslik: "The House of Black and White", aciklama: "Arya, Braavos’ta gizemli bir tapınağa ulaşır. Jon'a Gece Nöbetçileri’nde liderlik fırsatı sunulur. Daenerys zor bir karar verir." },
    { no: 3, baslik: "High Sparrow", aciklama: "Kral’ın Şehri'nde yeni bir dini lider yükselir. Jon, yeni görevine alışırken Sansa da kaderine boyun eğmek zorunda kalır." },
    { no: 4, baslik: "Sons of the Harpy", aciklama: "Meereen’de isyan baş gösterir. Jaime ve Bronn gizli bir görevle Dorne’a yelken açar. Cersei, kutsal güçleri kullanarak kontrolü ele geçirmeye çalışır." },
    { no: 5, baslik: "Kill the Boy", aciklama: "Jon Snow zor bir ittifaka adım atar. Daenerys, Meereen’de gücünü göstermek için radikal adımlar atar. Sansa, karanlık bir gerçekle yüzleşir." },
    { no: 6, baslik: "Unbowed, Unbent, Unbroken", aciklama: "Arya eğitiminin en zor aşamasına gelir. Sansa evlenmeye zorlanır. Jaime ve Bronn, Dorne’daki görevlerinde beklenmedik engellerle karşılaşır." },
    { no: 7, baslik: "The Gift", aciklama: "Jon, Yabanılları güney sınırına taşımaya çalışır. Stannis zor bir karar verir. Tyrion, Daenerys’in karşısına çıkar." },
    { no: 8, baslik: "Hardhome", aciklama: "Jon, Yabanılları kurtarmak için Hardhome’a gider. Ancak beklenmedik bir tehdit onları beklemektedir: Ak Gezenler muazzam bir saldırıya başlar." },
    { no: 9, baslik: "The Dance of Dragons", aciklama: "Stannis en karanlık fedakarlığı yapar. Meereen'deki dövüş arenasında işler kontrolden çıkar. Drogon, sahneye görkemli bir giriş yapar." },
    { no: 10, baslik: "Mother's Mercy", aciklama: "Jon Snow beklenmedik bir ihanetle yüzleşir. Cersei kefaret yürüyüşüyle aşağılanır. Arya kendi adaletini sağlar ama ağır bir bedel öder." }
  ],

  6: [
    { no: 1, baslik: "The Red Woman", aciklama: "Jon Snow ölü halde Kara Kale'de yatarken, Melisandre'nin gizemli bir sırrı açığa çıkar. Sansa ve Theon kaçıştadır." },
    { no: 2, baslik: "Home", aciklama: "Bran geçmişte önemli olaylara tanık olur. Tyrion ejderhalarla yakın temas kurar. Jon Snow'un kaderi değişir." },
    { no: 3, baslik: "Oathbreaker", aciklama: "Bran, genç Ned Stark’ı gözlemler. Jon Snow, ihanet edenleri yargılar. Daenerys Dothraki halkının ellerindedir." },
    { no: 4, baslik: "Book of the Stranger", aciklama: "Sansa ve Jon uzun süredir sonra ilk kez buluşur. Daenerys, Dothraki liderlerine meydan okur." },
    { no: 5, baslik: "The Door", aciklama: "Bran geçmişin kapılarını açar. Hodor’un trajik hikayesi ortaya çıkar. Arya ikinci bir şansla karşılaşır." },
    { no: 6, baslik: "Blood of My Blood", aciklama: "Bran ve Meera beklenmedik bir yardım alır. Sam ve Gilly Horn Hill’e ulaşır. Arya önemli bir karar verir." },
    { no: 7, baslik: "The Broken Man", aciklama: "The Hound geri döner. Jon ve Sansa, Kuzey'de müttefik toplamaya çalışır. Jaime, Riverrun kuşatmasına katılır." },
    { no: 8, baslik: "No One", aciklama: "Arya, yüzsüzler evinden nihayet özgürleşir. Cersei'nin sabrı tükenir. Jaime ve Brienne karşı karşıya gelir." },
    { no: 9, baslik: "The Battle of Bastards", aciklama: "Jon Snow, Ramsay Bolton'a karşı destansı bir savaş verir. Kuzey'in geleceği bu çatışmada şekillenir." },
{ no: 10, baslik: "The Winds of Winter", aciklama: "Cersei, Kralın Şehri’nde muazzam bir güç gösterisi yapar. Yeni ittifaklar ve tehditler ortaya çıkar." }
],

7: [
{ no: 1, baslik: "Dragonstone", aciklama: "Daenerys Kralın Kayası’na gelir ve tahtını geri alma planlarını kurar." },
{ no: 2, baslik: "Stormborn", aciklama: "Dünyanın farklı yerlerinde güç dengeleri değişir; yeni ittifaklar kurulur." },
{ no: 3, baslik: "The Queen's Justice", aciklama: "Cersei ve Jaime yeni planlar yaparken, Jon ve Daenerys arasında işbirliği doğar." },
{ no: 4, baslik: "The Spoils of War", aciklama: "Daenerys’in ejderhasıyla yapılan saldırı savaşın seyrini değiştirir." },
{ no: 5, baslik: "Eastwatch", aciklama: "Jon ve ekibi Duvar’ın ötesine gider, büyük tehlikelerle yüzleşir." },
{ no: 6, baslik: "Beyond the Wall", aciklama: "Ölüm ve cesaretin sınandığı bir kurtarma görevi gerçekleşir." },
{ no: 7, baslik: "The Dragon and the Wolf", aciklama: "Kuzey ve güney arasında büyük ittifaklar kurulur. Night King’in tehdidi büyür." }
],

8: [
{ no: 1, baslik: "Winterfell", aciklama: "Jon ve Daenerys Winterfell’e gelir. Stark ailesi yeniden bir araya gelirken, yaklaşan savaşın gölgesi hissedilir." },
{ no: 2, baslik: "A Knight of the Seven Kingdoms", aciklama: "Savaş öncesi herkes son anlarını yaşar. Jaime, Brienne’i şövalye ilan eder. Arya kendi yolunu çizer." },
{ no: 3, baslik: "The Long Night", aciklama: "Winterfell, Night King ve ölüler ordusuna karşı destansı bir savaş verir. Gece uzun ama umut karanlıktan doğar." },
{ no: 4, baslik: "The Last of the Starks", aciklama: "Savaş sonrası stratejiler yapılır. Daenerys, taht için ilerlerken dostluklar ve sadakat sınanır." },
{ no: 5, baslik: "The Bells", aciklama: "King’s Landing kuşatılır. Daenerys beklenmedik bir karar verir. Alevler içinde tahtın geleceği şekillenir." },
{ no: 6, baslik: "The Iron Throne", aciklama: "Büyük final. Westeros’un kaderi belirlenir. Taht oyunları sona ererken herkesin bedeli farklı olur." }
]
};

  

sezonSelect.addEventListener('change', () => {
  const sezonNo = sezonSelect.value;
  bolumlarContainer.innerHTML = '';

  if (sezonNo && sezonlar[sezonNo]) {
    sezonlar[sezonNo].forEach(bolum => {
      const bolumDiv = document.createElement('div');
      bolumDiv.classList.add('bolum');
     bolumDiv.innerHTML = `
  <h4 lang="en">${bolum.no}. ${bolum.baslik}</h4>
  <p>${bolum.aciklama}</p>
`;

      bolumlarContainer.appendChild(bolumDiv);
    });
  }
});
