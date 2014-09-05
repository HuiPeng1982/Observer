var userAgent = 'Mozilla/5.0 (Linux; Android 4.4.4; Nexus 4 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.135 Mobile Safari/537.36';
var utf8Encoding = 'utf-8';

module.exports = {
    'www.amazon.com': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['text', '#title'],
        brand: ['text', '.a-text-ellipsis .a-link-normal'],
        price:['text', '#priceblock_ourprice'],
        img: ['attr', '#main-image', 'data-a-hires']
    }, 'www.amazon.de': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['text', '#title'],
        brand: ['text', '.a-text-ellipsis .a-link-normal'],
        price:['text', '#priceblock_ourprice'],
        img: ['attr', '#main-image', 'data-a-hires']
    }, 'www.amazon.co.jp': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['text', '#title'],
        brand: ['text', '.a-text-ellipsis .a-link-normal'],
        price:['text', '#priceblock_ourprice'],
        img: ['attr', '#main-image', 'data-a-hires']
    }, 'www.beauty.com': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['html', 'div[itemprop="name"]', '</h1><h1>', '</h1>'],
        brand: ['html', 'div[itemprop="name"]', '<span>', '</span>'],
        price:['text', 'span[itemprop="price"]'],
        img: ['attr', 'meta[property="og:image"]', 'content']
    }, 'www.bellemaison.jp': {
        incomingEncoding: 'Shift-JIS',
        userAgent: userAgent,
        title: ['html', '#title-bar', '<h2>', '</h2>'],
        brand: ['html', '#title-bar', '（', '）'],
        price:['text', 'span.price, .price-wrap span'],
        img: ['attr', 'meta[property="og:image"]', 'content']
    }, 'www.carters.com': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['text', 'h1[itemprop="name"]'],
        brand: ['static', 'Carters'],
        price:['text', 'span[itemprop="price"]'],
        img: ['attr', 'img[itemprop="image"]', 'src']
    }, 'www.drugstore.com': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['text', 'h1[itemprop="name"]'],
        brand: ['static', 'Drugstore'],
        price:['text', 'span[itemprop="price"]'],
        img: ['attr', '#divPImage img', 'src']
    }, 'www.gymboree.com': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['text', '.page_content .un_main_title'],
        brand: ['static', 'Gymboree'],
        price:['text', '.un_price span[class="reg-price-dollars"]'],
        img: ['attr', 'img[class="product_image"]', 'src']
    }, 'www.victoriassecret.com': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['html', 'hgroup[itemprop="name"]','<h1>', "</h1>"],
        brand: ['static', "Victoria's Secret"],
        price:['html', '.name p', '', "<a>"],
        img: ['attr', 'img[itemprop="image"]', 'src']
    }, 'www.windeln.de': {
        incomingEncoding: utf8Encoding,
        userAgent: userAgent,
        title: ['text', 'span[itemprop="name"]'],
        brand: ['static', "windeln.de"],
        price:['join', 'span[itemprop="lowPrice"]', 'span[itemprop="highPrice"]'],
        img: ['attr', '.swiper-slide img', 'src']
    }, 'item.rakuten.co.jp': {
        incomingEncoding: 'Shift-JIS',
        userAgent: userAgent,
        title: ['text', '.itemtxt p'],
        brand: ['static', "西松屋チェーン楽天市場店"],
        price:['text', 'span[class="itemBuyPrice"]'],
        img: ['attr', 'img.shadow', 'src']
    }
};