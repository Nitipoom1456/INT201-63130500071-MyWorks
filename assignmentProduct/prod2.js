class Product{
    constructor(id, name, desc, price, stock, img){
        this._id = id;
        this._name = name;
        this._desc = desc;
        this._price = price;
        this._stock = stock;
        this._img = img;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get desc(){
        return this._desc;
    }
    get price(){
        return this._price;
    }
    get stock(){
        return this._stock;
    }
    get img(){
        return this._img;
    }
}


export const products = [
new Product('P01','AirPods Pro','Active Noise Cancellation for immersive sound.',8990,10,'https://store.ais.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/i/airpods_pro_850x850_1.jpg'),
new Product('P02','Huawei FreeBuds Pro True Wireless','ตัดเสียงรบกวนได้เบาลงถึง 70%',4950,9,'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/10/FreeBuds-Pro-6.jpg'),
new Product('P03','Bose QuietComfort Earbuds True Wireless','แบตเตอรี่อายุการใช้งานยาวนาน 6 ชั่วโมง',10690,5,'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/11/QuietComfort-1.jpg'),
new Product('P04','Marshall Mode II True Wireless','แบตเตอรีใช้งานต่อเนื่อง 5 ชั่วโมง',5990,0,'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/06/Product/marshall-mode-ii-true-wireless-black-01.jpg'),
new Product('P05','Xiaomi Redmi AirDots 2','ส่งสัญญาณไกลไม่มีสะดุด ใช้งานได้ 8-12 ชั่วโมง',3923,7,'https://q.lnwfile.com/mdduzq.jpg'),
new Product('P06','Nuheara IQbuds Boost True Wireless','หูฟังไร้สาย Nuheara IQbuds Boost True Wireless',18690.00,4,'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2019/09/IQbuds-Boost-1.jpg'),
new Product('P07','B&W PI7 True Wireless By Bowers & Wilkins','ฟังก์ชันตัดเสียงรบกวนยอดเยี่ยม เงียบสนิท',18500.00,0,'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/09/Product/b-w-pi7-true-wireless-by-bowers-wilkins-charcoal-01.jpg'),
new Product('P08','B&O Beoplay E8 Sport True Wireless','รองรับ Codec ไร้สายคุณภาพสูง aptX',11789.00,1,'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/08/E8-Sport-1.jpg')
];