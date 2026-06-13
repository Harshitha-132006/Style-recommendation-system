// ============================================================
//  STYLIOSENZ.AI — DATA MODULE (EXPANDED)
// ============================================================

// ── Skin-tone → colour palette map ──────────────────────────
export const skinTonePalettes = {
  fair: {
    label: 'Fair / Porcelain',
    recommended: ['#F5C6C6','#A8D8EA','#EAD2AC','#B5EAD7','#C7CEEA','#FFDAC1'],
    avoid:       ['#FF4500','#006400'],
    description: 'Soft pastels, blush pinks, powder blues and lavenders flatter your cool undertones beautifully.'
  },
  light: {
    label: 'Light / Beige',
    recommended: ['#E8C4A2','#C9A87C','#7EC8C8','#F4A261','#A8C5DA','#D4E6B5'],
    avoid:       ['#FFF5E0','#FFFDD0'],
    description: 'Warm taupes, terracottas, sage greens and sky blues complement your warm-neutral undertone.'
  },
  medium: {
    label: 'Medium / Olive',
    recommended: ['#E63946','#2A9D8F','#E9C46A','#264653','#F4A261','#6A4C93'],
    avoid:       ['#808080','#C0C0C0'],
    description: 'Bold jewel tones, rich emeralds, warm reds and golden yellows make your olive skin radiate.'
  },
  tan: {
    label: 'Tan / Caramel',
    recommended: ['#9B2226','#AE2012','#005F73','#94D2BD','#EE9B00','#CA6702'],
    avoid:       ['#FFD700','#F5F5DC'],
    description: 'Deep burgundies, burnt oranges, teal blues and mustards create stunning contrast on your skin.'
  },
  deep: {
    label: 'Deep / Dark',
    recommended: ['#FFD700','#FF69B4','#00CED1','#FF6347','#98FB98','#DA70D6'],
    avoid:       ['#A0522D','#8B4513'],
    description: 'Vibrant jewelers — gold, hot pink, electric teal, coral and bright orchid look magnificent on you.'
  }
};

// ── Outfits (4-5 per category) ───────────────────────────────
export const outfits = [
  // --- WOMEN - PARTY ---
  {
    id:'w_o1', gender:'women', category:'outfit', occasion:'party', bodyType:['hourglass','rectangle'],
    name:'Sequin Slip Dress', brand:'Zara', price:'₹4,299', rating:4.8,
    image:'https://images.unsplash.com/photo-1566479179817-58d91f1e0c9d?w=400&q=80',
    tags: ['sequin', 'party', 'shimmer'],
    amazon:'https://www.amazon.in/s?k=sequin+slip+dress',
    myntra:'https://www.myntra.com/dresses?q=sequin+slip+dress',
    flipkart:'https://www.flipkart.com/search?q=sequin+slip+dress',
    zara:'https://www.zara.com/in/en/search?searchTerm=sequin+slip+dress'
  },
  {
    id:'w_o2', gender:'women', category:'outfit', occasion:'party', bodyType:['pear','apple'],
    name:'Velvet Blazer Set', brand:'H&M', price:'₹3,899', rating:4.6,
    image:'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&q=80',
    tags: ['velvet', 'blazer', 'suit'],
    amazon:'https://www.amazon.in/s?k=velvet+blazer+set+women',
    myntra:'https://www.myntra.com/blazers?q=velvet+blazer+set',
    flipkart:'https://www.flipkart.com/search?q=velvet+blazer+set+women',
    zara:'https://www.zara.com/in/en/search?searchTerm=velvet+blazer+set+women'
  },
  {
    id:'w_o3', gender:'women', category:'outfit', occasion:'party', bodyType:['hourglass','inverted'],
    name:'Gothic Lace Maxi', brand:'Label Ritu Kumar', price:'₹8,990', rating:4.9,
    image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=black+lace+maxi+dress',
    myntra:'https://www.myntra.com/dresses?q=lace+maxi+dress',
    flipkart:'https://www.flipkart.com/search?q=black+lace+maxi+dress',
    zara:'https://www.zara.com/in/en/search?searchTerm=black+lace+maxi+dress'
  },
  {
    id:'w_o3b', gender:'women', category:'outfit', occasion:'party', bodyType:['rectangle','pear'],
    name:'One-Shoulder Satin Gown', brand:'Mango', price:'₹6,590', rating:4.7,
    image:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=one+shoulder+satin+gown',
    myntra:'https://www.myntra.com/dresses?q=satin+gown',
    flipkart:'https://www.flipkart.com/search?q=one+shoulder+satin+gown'
  },
  {
    id:'w_o3c', gender:'women', category:'outfit', occasion:'party', bodyType:['apple','hourglass'],
    name:'Metallic Cocktail Dress', brand:'Forever New', price:'₹7,200', rating:4.8,
    image:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=metallic+cocktail+dress',
    myntra:'https://www.myntra.com/dresses?q=metallic+dress',
    flipkart:'https://www.flipkart.com/search?q=metallic+cocktail+dress'
  },

  // --- WOMEN - CASUAL ---
  {
    id:'w_o4', gender:'women', category:'outfit', occasion:'casual', bodyType:['hourglass','pear'],
    name:'Linen Co-ord Set', brand:'And', price:'₹1,999', rating:4.5,
    image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
    tags: ['linen', 'summer', 'co-ord'],
    amazon:'https://www.amazon.in/s?k=linen+co-ord+set+women',
    myntra:'https://www.myntra.com/co-ords?q=linen+co-ord+set',
    flipkart:'https://www.flipkart.com/search?q=linen+co-ord+set+women'
  },
  {
    id:'w_o5', gender:'women', category:'outfit', occasion:'casual', bodyType:['apple','rectangle'],
    name:'Floral Wrap Dress', brand:'Vero Moda', price:'₹2,499', rating:4.6,
    image:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=floral+wrap+dress',
    myntra:'https://www.myntra.com/dresses?q=floral+wrap+dress',
    flipkart:'https://www.flipkart.com/search?q=floral+wrap+dress'
  },
  {
    id:'w_o5b', gender:'women', category:'outfit', occasion:'casual', bodyType:['inverted','pear'],
    name:'High-Waist Wide Leg Jeans + Crop Top', brand:'Levi\'s', price:'₹3,200', rating:4.4,
    image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=high+waist+wide+leg+jeans+women',
    myntra:'https://www.myntra.com/jeans?q=wide+leg+jeans',
    flipkart:'https://www.flipkart.com/search?q=high+waist+wide+leg+jeans+women',
    zara:'https://www.zara.com/in/en/search?searchTerm=high+waist+wide+leg+jeans+women'
  },
  {
    id:'w_o5c', gender:'women', category:'outfit', occasion:'casual', bodyType:['rectangle','hourglass'],
    name:'Boho Paisley Jumpsuit', brand:'Global Desi', price:'₹2,800', rating:4.5,
    image:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=boho+paisley+jumpsuit',
    myntra:'https://www.myntra.com/jumpsuits?q=paisley+jumpsuit',
    flipkart:'https://www.flipkart.com/search?q=boho+paisley+jumpsuit'
  },

  // --- WOMEN - OFFICE ---
  {
    id:'w_o7', gender:'women', category:'outfit', occasion:'office', bodyType:['hourglass','rectangle'],
    name:'Tailored Pantsuit', brand:'W for Woman', price:'₹3,499', rating:4.7,
    image:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80',
    tags: ['formal', 'suit', 'power'],
    amazon:'https://www.amazon.in/s?k=tailored+pantsuit+women',
    myntra:'https://www.myntra.com/formal-wear?q=pantsuit+women',
    flipkart:'https://www.flipkart.com/search?q=tailored+pantsuit+women'
  },
  {
    id:'w_o8', gender:'women', category:'outfit', occasion:'office', bodyType:['pear','apple'],
    name:'Wrap Midi Dress', brand:'Van Heusen', price:'₹2,700', rating:4.8,
    image:'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=formal+wrap+midi+dress',
    myntra:'https://www.myntra.com/dresses?q=wrap+midi',
    flipkart:'https://www.flipkart.com/search?q=formal+wrap+midi+dress'
  },
  {
    id:'w_o8b', gender:'women', category:'outfit', occasion:'office', bodyType:['inverted','rectangle'],
    name:'Tweed Jacket + Pencil Skirt', brand:'Allen Solly', price:'₹5,400', rating:4.6,
    image:'https://images.unsplash.com/photo-1539109132314-d4a8cff73c33?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=women+tweed+jacket+set',
    myntra:'https://www.myntra.com/blazers?q=tweed+jacket',
    flipkart:'https://www.flipkart.com/search?q=women+tweed+jacket+set'
  },
  {
    id:'w_o8c', gender:'women', category:'outfit', occasion:'office', bodyType:['apple','pear'],
    name:'Silk Blouse + High-Waist Trousers', brand:'Park Avenue', price:'₹3,900', rating:4.7,
    image:'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=silk+blouse+formal+women',
    myntra:'https://www.myntra.com/shirts?q=silk+blouse',
    flipkart:'https://www.flipkart.com/search?q=silk+blouse+formal+women'
  },

  // --- WOMEN - TRADITIONAL ---
  {
    id:'w_o10', gender:'women', category:'outfit', occasion:'traditional', bodyType:['hourglass','pear'],
    name:'Designer Anarkali Suit', brand:'Biba', price:'₹4,999', rating:4.9,
    image:'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80',
    tags: ['ethnic', 'traditional', 'anarkali'],
    amazon:'https://www.amazon.in/s?k=designer+anarkali+suit+women',
    myntra:'https://www.myntra.com/salwar-suits?q=designer+anarkali+suit',
    flipkart:'https://www.flipkart.com/search?q=designer+anarkali+suit+women'
  },
  {
    id:'w_o11', gender:'women', category:'outfit', occasion:'traditional', bodyType:['apple','rectangle'],
    name:'Silk Saree with Blouse', brand:'FabIndia', price:'₹6,500', rating:4.8,
    image:'https://images.unsplash.com/photo-1603232644140-bb47da511b92?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=silk+saree+women',
    myntra:'https://www.myntra.com/sarees?q=silk+saree',
    flipkart:'https://www.flipkart.com/search?q=silk+saree'
  },
  {
    id:'w_o11b', gender:'women', category:'outfit', occasion:'traditional', bodyType:['hourglass','inverted'],
    name:'Mirror Work Lehenga', brand:'Global Desi', price:'₹12,000', rating:4.9,
    image:'https://images.unsplash.com/photo-1609748340878-a9a5f7a3c0cf?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=mirror+work+lehenga',
    myntra:'https://www.myntra.com/lehenga-choli',
    flipkart:'https://www.flipkart.com/search?q=mirror+work+lehenga'
  },

  // --- MEN - PARTY ---
  {
    id:'m_o1', gender:'men', category:'outfit', occasion:'party', bodyType:['rectangle','inverted'],
    name:'Velvet Evening Tuxedo', brand:'Raymond', price:'₹12,499', rating:4.9,
    image:'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+velvet+tuxedo',
    myntra:'https://www.myntra.com/men-suits?q=velvet+tuxedo',
    flipkart:'https://www.flipkart.com/search?q=men+velvet+tuxedo'
  },
  {
    id:'m_o2', gender:'men', category:'outfit', occasion:'party', bodyType:['rhomboid','triangle'],
    name:'Printed Satin Shirt', brand:'Louis Philippe', price:'₹2,999', rating:4.7,
    image:'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+satin+party+shirt',
    myntra:'https://www.myntra.com/men-shirts?q=satin+shirt',
    flipkart:'https://www.flipkart.com/search?q=men+satin+party+shirt'
  },
  {
    id:'m_o2b', gender:'men', category:'outfit', occasion:'party', bodyType:['inverted','rhomboid'],
    name:'Double Breasted Party Blazer', brand:'Van Heusen', price:'₹6,500', rating:4.6,
    image:'https://images.unsplash.com/photo-1521225091412-ce05ee3ff5fb?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+double+breasted+party+blazer',
    myntra:'https://www.myntra.com/men-blazers?q=party+blazer',
    flipkart:'https://www.flipkart.com/search?q=men+double+breasted+party+blazer'
  },
  {
    id:'m_o2c', gender:'men', category:'outfit', occasion:'party', bodyType:['rectangle','triange'],
    name:'Sequin Designer Kurta', brand:'Manyavar', price:'₹5,400', rating:4.8,
    image:'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+sequin+kurta',
    myntra:'https://www.myntra.com/men-kurta?q=sequin+kurta',
    flipkart:'https://www.flipkart.com/search?q=men+sequin+kurta'
  },

  // --- MEN - CASUAL ---
  {
    id:'m_o4', gender:'men', category:'outfit', occasion:'casual', bodyType:['rectangle','rhomboid'],
    name:'Cuban Collar Linen Shirt', brand:'United Colors of Benetton', price:'₹2,499', rating:4.6,
    image:'https://images.unsplash.com/photo-1598033129183-c4f50c717658?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+linen+cuban+collar+shirt',
    myntra:'https://www.myntra.com/men-shirts?q=cuban+collar+shirt',
    flipkart:'https://www.flipkart.com/search?q=men+linen+cuban+collar+shirt'
  },
  {
    id:'m_o5', gender:'men', category:'outfit', occasion:'casual', bodyType:['inverted','rhomboid'],
    name:'Oversized Denim Jacket + Cargo Pants', brand:'Levi\'s', price:'₹5,800', rating:4.8,
    image:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+denim+jacket+cargo+pants',
    myntra:'https://www.myntra.com/men-jackets?q=denim+jacket',
    flipkart:'https://www.flipkart.com/search?q=men+denim+jacket+cargo+pants'
  },
  {
    id:'m_o5b', gender:'men', category:'outfit', occasion:'casual', bodyType:['triangle','rectangle'],
    name:'Knitted Polo + Chino Shorts', brand:'US Polo Assn', price:'₹2,200', rating:4.5,
    image:'https://images.unsplash.com/photo-1516826435551-36a8a09e4575?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+knitted+polo+shirt',
    myntra:'https://www.myntra.com/men-shirts?q=knitted+polo',
    flipkart:'https://www.flipkart.com/search?q=men+knitted+polo+shirt'
  },

  // --- MEN - OFFICE ---
  {
    id:'m_o7', gender:'men', category:'outfit', occasion:'office', bodyType:['inverted','rhomboid'],
    name:'Slim Fit Navy Blazer', brand:'Van Heusen', price:'₹5,999', rating:4.8,
    image:'https://images.unsplash.com/photo-1507679799987-c7377de58699?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+navy+blazer+formal',
    myntra:'https://www.myntra.com/men-blazers?q=navy+blazer',
    flipkart:'https://www.flipkart.com/search?q=men+navy+blazer+formal',
    zara:'https://www.zara.com/in/en/search?searchTerm=men+navy+blazer+formal'
  },
  {
    id:'m_o8', gender:'men', category:'outfit', occasion:'office', bodyType:['rectangle','rhomboid'],
    name:'Classic White Oxford Shirt + Trousers', brand:'Arrow', price:'₹4,500', rating:4.9,
    image:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+white+oxford+shirt+formal',
    myntra:'https://www.myntra.com/men-shirts?q=oxford+shirt',
    flipkart:'https://www.flipkart.com/search?q=men+white+oxford+shirt+formal'
  },
  {
    id:'m_o8b', gender:'men', category:'outfit', occasion:'office', bodyType:['triangle','inverted'],
    name:'Glen Check Suit', brand:'Louis Philippe', price:'₹14,000', rating:4.7,
    image:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+glen+check+suit',
    myntra:'https://www.myntra.com/men-suits?q=check+suit',
    flipkart:'https://www.flipkart.com/search?q=men+glen+check+suit'
  },

  // --- MEN - TRADITIONAL ---
  {
    id:'m_o10', gender:'men', category:'outfit', occasion:'traditional', bodyType:['rectangle','rhomboid'],
    name:'Mandarin Collar Sherwani', brand:'Manyavar', price:'₹8,999', rating:4.9,
    image:'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+sherwani+traditional',
    myntra:'https://www.myntra.com/men-sherwani',
    flipkart:'https://www.flipkart.com/search?q=men+sherwani'
  },
  {
    id:'m_o11', gender:'men', category:'outfit', occasion:'traditional', bodyType:['rhomboid','inverted'],
    name:'Silk Kurta + Bundi Jacket', brand:'FabIndia', price:'₹6,500', rating:4.7,
    image:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+silk+kurta+jacket+set',
    myntra:'https://www.myntra.com/men-kurta?q=bundi+jacket',
    flipkart:'https://www.flipkart.com/search?q=men+silk+kurta+jacket+set'
  },
  {
    id:'m_o11b', gender:'men', category:'outfit', occasion:'traditional', bodyType:['rectangle','triangle'],
    name:'Embroidered Pashmina Shawl + Kurta', brand:'Raymond', price:'₹15,000', rating:4.8,
    image:'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+pashmina+shawl+traditional',
    myntra:'https://www.myntra.com/pashmina?q=pashmina+shawl',
    flipkart:'https://www.flipkart.com/search?q=men+pashmina+shawl+traditional'
  }
];

// ── Footwear (4-5 per category) ──────────────────────────────
export const footwear = [
  // --- WOMEN ---
  {
    id:'w_f1', gender:'women', category:'footwear', occasion:'party',
    name:'Block Heel Sandals', brand:'Steve Madden', price:'₹3,299', rating:4.7,
    image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=block+heel+sandals+women',
    myntra:'https://www.myntra.com/heels?q=block+heel+sandals',
    flipkart:'https://www.flipkart.com/search?q=block+heel+sandals+women'
  },
  {
    id:'w_f1b', gender:'women', category:'footwear', occasion:'party',
    name:'Stiletto Pumps', brand:'Charles & Keith', price:'₹5,500', rating:4.8,
    image:'https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=stiletto+pumps+women',
    myntra:'https://www.myntra.com/pumps',
    flipkart:'https://www.flipkart.com/search?q=stiletto+pumps+women'
  },
  {
    id:'w_f2', gender:'women', category:'footwear', occasion:'casual',
    name:'White Chunky Sneakers', brand:'Reebok', price:'₹4,499', rating:4.6,
    image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=chunky+white+sneakers+women',
    myntra:'https://www.myntra.com/sneakers?q=chunky+white+sneakers',
    flipkart:'https://www.flipkart.com/search?q=chunky+white+sneakers+women'
  },
  {
    id:'w_f2b', gender:'women', category:'footwear', occasion:'casual',
    name:'Tan Leather Slides', brand:'H&M', price:'₹1,200', rating:4.4,
    image:'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=tan+leather+slides+women',
    myntra:'https://www.myntra.com/flats?q=slides',
    flipkart:'https://www.flipkart.com/search?q=tan+leather+slides+women'
  },
  // --- MEN ---
  {
    id:'m_f1', gender:'men', category:'footwear', occasion:'party',
    name:'Patent Leather Oxfords', brand:'Bata', price:'₹2,499', rating:4.5,
    image:'https://images.unsplash.com/photo-1533819183839-983a40ac7ea2?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+patent+leather+oxfords',
    myntra:'https://www.myntra.com/men-formal-shoes?q=oxfords',
    flipkart:'https://www.flipkart.com/search?q=men+patent+leather+oxfords'
  },
  {
    id:'m_f1b', gender:'men', category:'footwear', occasion:'party',
    name:'Suede Loafers', brand:'Hush Puppies', price:'₹4,800', rating:4.7,
    image:'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+suede+loafers',
    myntra:'https://www.myntra.com/men-casual-shoes?q=loafers',
    flipkart:'https://www.flipkart.com/search?q=men+suede+loafers'
  },
  {
    id:'m_f2', gender:'men', category:'footwear', occasion:'casual',
    name:'Classic Canvas Sneakers', brand:'Converse', price:'₹3,999', rating:4.8,
    image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+converse+canvas+sneakers',
    myntra:'https://www.myntra.com/men-sneakers?q=converse',
    flipkart:'https://www.flipkart.com/search?q=men+converse+canvas+sneakers'
  },
  {
    id:'m_f3', gender:'men', category:'footwear', occasion:'office',
    name:'Brogue Leather Shoes', brand:'Clarks', price:'₹5,900', rating:4.9,
    image:'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+brogue+leather+shoes',
    myntra:'https://www.myntra.com/men-formal-shoes?q=brogues',
    flipkart:'https://www.flipkart.com/search?q=men+brogue+leather+shoes'
  }
];

// ── Jewellery (4-5 per category) ─────────────────────────────
export const jewellery = [
  // --- WOMEN ---
  {
    id:'w_j1', gender:'women', category:'jewellery', occasion:'party',
    name:'Crystal Drop Earrings', brand:'Zaveri Pearls', price:'₹799', rating:4.6,
    image:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=crystal+drop+earrings+women',
    myntra:'https://www.myntra.com/earrings?q=crystal+drop+earrings',
    flipkart:'https://www.flipkart.com/search?q=crystal+drop+earrings+women'
  },
  {
    id:'w_j2', gender:'women', category:'jewellery', occasion:'traditional',
    name:'Kundan Choker Set', brand:'Voylla', price:'₹3,200', rating:4.8,
    image:'https://images.unsplash.com/photo-1627293024929-23d2422731c3?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=kundan+choker+set+women',
    myntra:'https://www.myntra.com/jewellery-set?q=kundan',
    flipkart:'https://www.flipkart.com/search?q=kundan+choker+set+women'
  },
  // --- MEN ---
  {
    id:'m_j1', gender:'men', category:'jewellery', occasion:'party',
    name:'Silver Link Chain', brand:'Giva', price:'₹1,499', rating:4.5,
    image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+silver+link+chain',
    myntra:'https://www.myntra.com/men-jewellery?q=silver+chain',
    flipkart:'https://www.flipkart.com/search?q=men+silver+link+chain'
  },
  {
    id:'m_j2', gender:'men', category:'jewellery', occasion:'casual',
    name:'Leather Wrap Bracelet', brand:'Fossil', price:'₹1,900', rating:4.4,
    image:'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=men+leather+wrap+bracelet',
    myntra:'https://www.myntra.com/men-jewellery?q=leather+bracelet',
    flipkart:'https://www.flipkart.com/search?q=men+leather+wrap+bracelet'
  },
  {
    id:'m_j3', gender:'men', category:'jewellery', occasion:'office',
    name:'Luxury Steel Watch', brand:'Seiko', price:'₹18,000', rating:4.9,
    image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80',
    amazon:'https://www.amazon.in/s?k=seiko+men+watch+formal',
    myntra:'https://www.myntra.com/watches?q=seiko+men',
    flipkart:'https://www.flipkart.com/search?q=seiko+men+watch+formal'
  }
];

// ── Catalogs ──────────────────────────────────────────────────
export const catalogs = [
  {
    id: 'cat_men',
    name: "Men's Luxury Catalog",
    gender: 'men',
    description: 'Sophisticated formals and sharp casuals for the modern man.',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80'
  },
  {
    id: 'cat_women',
    name: "Women's Couture Catalog",
    gender: 'women',
    description: 'Elegant dresses, chic co-ords, and breathtaking ethnic wear.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80'
  }
];

// ── Trending items ───────────────────────────────────────────
export const trendingItems = [
  {
    id:'t1', name:'Butter Yellow Set', brand:'Zara', price:'₹5,499', rating:4.9,
    image:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80',
    badge:'🔥 Trending',
    amazon:'https://www.amazon.in/s?k=butter+yellow+co-ord+set+women',
    myntra:'https://www.myntra.com/co-ords?q=butter+yellow+set',
    flipkart:'https://www.flipkart.com/search?q=butter+yellow+co-ord+set+women',
    zara:'https://www.zara.com/in/en/search?searchTerm=butter+yellow+set'
  },
  {
    id:'t2', name:'Men\'s Sage Green Jacket', brand:'H&M', price:'₹4,299', rating:4.8,
    image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
    badge:'🌿 New Season',
    amazon:'https://www.amazon.in/s?k=men+sage+green+jacket',
    myntra:'https://www.myntra.com/men-jackets?q=sage+green',
    flipkart:'https://www.flipkart.com/search?q=men+sage+green+jacket'
  },
  {
    id:'t3', name:'Satin Wrap Blouse', brand:'Mango', price:'₹2,990', rating:4.7,
    image:'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80',
    badge:'👑 Best Seller',
    amazon:'https://www.amazon.in/s?k=satin+wrap+blouse',
    myntra:'https://www.myntra.com/tops?q=wrap+blouse',
    flipkart:'https://www.flipkart.com/search?q=satin+wrap+blouse'
  }
];

// ── Wardrobe inspiration gallery ─────────────────────────────
export const galleryImages = [
  { 
    id:'g1', 
    src:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80', 
    label:'Boho Chic', 
    category:'casual', 
    tag: 'linen',
    desc: 'Effortless, flowy, and artistic. Perfect for sunny days and relaxed evenings.'
  },
  { 
    id:'g2', 
    src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80', 
    label:'Power Dressing', 
    category:'office', 
    tag: 'formal',
    desc: 'Structured silhouettes and bold blazers. Command the room with confidence.'
  },
  { 
    id:'g3', 
    src:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80', 
    label:'Street Style', 
    category:'casual', 
    tag: 'street',
    desc: 'Edgy, urban, and modern. Comfort meets high-fashion on the streets.'
  },
  { 
    id:'g4', 
    src:'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&q=80', 
    label:'Evening Glam', 
    category:'party', 
    tag: 'evening',
    desc: 'Sequins, silk, and sophistication. Shine bright at any late-night event.'
  },
  { 
    id:'g5', 
    src:'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=500&q=80', 
    label:'Traditional Elegance', 
    category:'traditional', 
    tag: 'ethnic',
    desc: 'Timeless heritage and intricate embroidery. Celebrate roots in style.'
  },
  {
    id:'g6',
    src:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80',
    label:'Minimalist Luxe',
    category:'office',
    tag: 'monochrome',
    desc: 'Clean lines, neutral tones, and premium fabrics. Silence is the ultimate luxury.'
  },
  {
    id:'g7',
    src:'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&q=80',
    label:'Retro Revival',
    category:'casual',
    tag: 'print',
    desc: 'Bold patterns and vintage silhouettes. A modern take on timeless classics.'
  }
];

// ── AI Chatbot intents ────────────────────────────────────────
export const chatbotIntents = [
  {
    patterns: ['hello','hi','hey','namaste'],
    responses: [
      "Hello gorgeous! 💫 I'm your personal AI stylist. Tell me — what's the occasion today?",
      "Hey fashionista! ✨ Ready to slay? What are you dressing up for?"
    ]
  },
  {
    patterns: ['color','colour','skin tone','palette'],
    responses: [
      "Colors matter so much! 🎨 Use our Color Palette section — select your skin tone and I'll show you a curated palette that flatters you perfectly.",
      "Jewel tones (emerald, sapphire, ruby) look gorgeous on deeper skin tones. Pastels flatter lighter skin beautifully."
    ]
  },
  {
    patterns: ['help','how','recommend','suggestion'],
    responses: [
      "I can help! 🌟 Fill in your Style Profile (select Men or Women, body type, skin tone, occasion) and click 'Get Recommendations'!",
      "Style tip #1: When in doubt, go monochromatic. A head-to-toe single color look is always chic. ✨"
    ]
  }
];

export const chatbotFallback = [
  "Ooh, that's a fun question! 🤔 Tell me more — what's the vibe you're going for?",
  "Fashion is all about self-expression! 💫 Could you be a little more specific? I want to give you the PERFECT advice."
];

export const bodyTypeAdvice = {
  hourglass: 'Your balanced proportions shine in wrap dresses, fitted blazers and belted styles.',
  pear:      'A-line skirts and statement tops draw the eye upward and balance your hips beautifully.',
  apple:     'Empire-waist dresses and flowy tunics highlight your legs and create a balanced silhouette.',
  rectangle: 'Peplum tops and ruffled skirts create gorgeous curves and dimension.',
  inverted:  'Wide-leg trousers and flared skirts balance your broader shoulders perfectly.',
  rhomboid:  'Structured blazers and straight-leg trousers highlight your naturally athletic frame.',
  triangle:  'V-neck shirts and jackets with shoulder pads help balance your broader lower body.',
  oval:      'Vertical stripes and darker solid colors create a streamlined, sophisticated look.'
};
