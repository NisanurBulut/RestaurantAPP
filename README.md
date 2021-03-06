# Restoran Uygulaması
# <b>Uygulama hali hazırda kullanılan bir uygulama olduğu için web API kaynak dosyaları paylaşılmamıştır.</b>

![AnaGoruntu](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu.JPG)

* Ana ekranda kullanıcıyı sipariş verebileceği bir form karşılar. 
* Bu form içerisinde ki sipariş numarası unique bir değerdir.Otamatik olarak oluşturulur ve readonly durumdadır.
* Kullanıcı siparişin sahibi olan müşteriyi ve müşterinin ödeme şeklini seçebilir.

    ![AnaGoruntu2](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu2.JPG)


    ![AnaGoruntu3](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu3.JPG)
* Sipariş edilecek olan yiyeceğim miktarı değiştikçe ödenecek toplam tutarda otomatik olarak hesaplanır ve bu bilgi ana ekrana düşer.


* Yeni sipariş oluşturmak için küçük yeşil button 
![btn](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/btn.JPG) kullanılır. 

* Açılan mini formda yiyecek ve miktarı seçilir.

![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu4.JPG)

* Kullanıcı yiyecek ve miktarını seçtikçe ödenecek tutar otomatik hesaplanır ve yiyecek fiyatıda görüntülenir.

![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu5.JPG)

* Gönder butonu ![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/btn1.JPG) kullanılarak sipariş  kayıt işlemi tamamlanır ve kapat butonu ile ![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/btn2.JPG) sipariş mini kayıt ekranı kapanır.

* Kullanıcı sipariş verirken miktar belirtmek zorundadır.
![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu61.JPG)

* Sipariş kaydının alınmasının ardından siparişler ana ekranda listelenir.
![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu7.JPG)

*Toplu siparişler kaydedilirken müşteri seçilmek zorundadır.

![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu8.JPG)

* Ana ekranda bulunan yan menü kullanılarak verilmiş olan siparişler görüntülenebilir.

![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu9.JPG)

* Kullanıcı yan menüden siparişleri gör seçeneğini kullanarak detayları görebilir.

![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu10.JPG)

* Kullanıcı siparişlerini düzenleyebilir ya da silebilir.
![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu11.JPG)
![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu12.JPG)
![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu13.JPG)

* Yan menüde bulunan ödeme bilgilerinin kaydedilmesi seçeneği kullanılarak ödeme ekranına geçiş yapılır.

![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu14.JPG)

* Ödeme kayıt ekranında formun doldurulması için gerekli doğrulama yöntemleri bulunmaktadır. Örneğin üç haneli CVV numarası ve 16 haneli kart numarası girilmesi gerekmesi gibi. Şartlar sağlandığında gönder butonu ve ikonlar aktif olmaktadır.

![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu15.JPG)

* Kayıt işleminin ardından ekranın sağ tarafında bilgiler listelenmektedir.Bu bilgiler üzerinde kayıt silme işlemi ya da düzenleme işlemi yapılabilir. silme işlemi için ilgili bilginin satırında bulunan sil butonu ![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/btn3.JPG) tıklanır.
 ![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu16.JPG) 

 ![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu17.JPG)

 * Düzenlemesi yapılmak istenen ilgili kayıt satırına tıklandığında kayıt bilgileri ekranın solunda bulunan menü üzerinde görüntülenir. İlgili düzenlemeler yapıldıktan sonra gönder butonu kullanılarak değişim kaydedilir.

  ![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu18.JPG) 

 ![](https://github.com/NisanurBulut/RestaurantAPP/blob/master/src/assets/Tanitim/AnaGoruntu19.JPG)

## Angular 8.1.1<br/>
* Bir restoran yönetim uygulamasıdır.<br/>
* Sipariş seçimi işlemlerine dayanır.<br/>
* Seçilen yiyeceğin adedine göre fiyatlandırması yapılır.<br/>
* Her müşteri kendi siparişini hazırlar.<br/>
* Siparişler listelenir.<br/>
* Sipariş detayları görüntülenir.<br/>
* Siparişler üzerinde ekle sil düzenle işlemleri yapılabilir.<br/>
* Ödeme bilgilerinin ekle/sil/düzenle gerçekleştiririlir.<br/>
* Ödeme bilgilerinin listelemesi gerçekleştiririlir.<br/>
