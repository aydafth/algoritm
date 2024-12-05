function towDigit(params) {
    for (let i = 10; i < 100; i++) {
        let tens = Math.floor(i / 10);
        // با این خط کد قسمت دهگان ان را جدا میکنیم مثال دفتر را چک کن 
        let ones = i % 10;
        // باقی مانده تقسیم یکان را نمایش میدهد
        if (tens === ones) {
            console.log(i);


        }

    }

}
towDigit();