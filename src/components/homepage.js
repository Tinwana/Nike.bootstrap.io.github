function rand (num) {
    return Math.floor(Math.random()*num);
}
const headerImg = ["./img/nike-man.webp","https://c4.wallpaperflare.com/wallpaper/22/55/717/sport-running-nike-run-wallpaper-preview.jpg","https://i.pinimg.com/originals/e6/c0/f2/e6c0f2659987c8b796e965a1721653c1.jpg","https://static.nike.com/a/images/w_1920,c_limit/a775a4df-d252-4fcd-a951-ce20ebfee3ac/what-to-wear-for-cold-weather-running.jpg"]
const homePageHTML =
 `<header class="mb-5">
 <div class="navbar__modal h-100">
     <div class="modal__close d-flex justify-content-end">
         <i class="fa-solid fa-xmark fs-2"></i>
     </div>
     <div class="modal__navbar">
         <ul class="navbar__feature--content d-flex flex-column">
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none fs-4 py-1">New & Featured</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none fs-4 py-1">Men</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none fs-4 py-1">Women</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none fs-4 py-1">Kids</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none fs-4 py-1">Sale</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="./assets/html/SKRN.html" class="link-dark text-decoration-none fs-4 py-1">SNKRS</a>
             </li>
         </ul>
         <p class="fs-5 text-secondary mb-4">Become a Nike Member for the best products, inspiration and stories in sport. <a href="" class="link-dark">Learn more</a></p>
         <div class="nav__btn--group">
             <button class="btn btn-dark rounded-5 px-4">Join Us</button>
             <button class="btn btn-outline-secondary rounded-5 px-4">Sign In</button>
         </div>
     </div>
 </div>
 <nav class="brand__navbar-help container-fluid d-flex justify-content-between align-items-center">
 <div class="brand__img">
     <a href="" class="link-dark">
         <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32"><path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg>
     </a>
 </div>
 <div class="brand__navbar">
     <ul class="navbar__help d-flex justify-content-between align-items-center gap-2">
         <li class="list-unstyled  p-2"><a class="link-dark text-decoration-none " href="https://www.nike.com/vn/retail">Find a Store</a></li><span class="line border-1 border-end border-dark"></span>
         <li class="list-unstyled  p-2"><a class="link-dark text-decoration-none " href="https://www.nike.com/vn/help">Help</a></li><span class="line border-1 border-end border-dark"></span>
         <li class="list-unstyled  p-2"><a class="link-dark text-decoration-none " href="https://www.nike.com/vn/membership">Join Us</a></li><span class="line border-1 border-end border-dark"></span>
         <li class="list-unstyled  p-2"><a class="link-dark text-decoration-none " href="https://www.nike.com/vn/member/profile/login?continueUrl=https://www.nike.com/vn/">Sign In</a></li>
     </ul>
 </div>
</nav>
<nav class="logo__navbar--feature container-fluid d-flex justify-content-between align-items-center">
     <div class="navbar__logo">
         <a href="" class="link-dark">
             <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="78px" height="78px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
         </a>
     </div>
     <div class="navbar__feature">
         <ul class="navbar__feature--content">
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none">New & Featured</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none">Men</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none">Women</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none">Kids</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="" class="link-dark text-decoration-none">Sale</a>
             </li>
             <li class="list-unstyled d-flex flex-column">
                 <a href="./assets/html/SKRN.html" class="link-dark text-decoration-none">SNKRS</a>
             </li>
         </ul>
     </div>
     <div class="navbar__search">
         <div class="search__group">
             <div class="search__icon">
                 <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
             </div>
             <input type="text" class="search__input" placeholder="Search">
         </div>
         <div class="feature__icon">
             <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
         </div>
         <div class="feature__icon">
             <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
         </div>
         <div class="feature__icon">
             <i class="fa-solid fa-bars"></i>
         </div>
     </div>
</nav>
<div class="slide-text">
 <div class="slide-text__content showUp">
     <h1>Hello Nike App</h1>
     <p>Download the app to access everything Nike. <a href="https://nike.sng.link/Astn5/4etf/8h7o">Get Your Great</a></p>
 </div>
 <div class="slide-text__content">
     <h1>New Styles on Sale: Up to 40% Off</h1>
     <p><a href="https://www.nike.com/vn/w/sale-3yaep">Shop All Our New Markdowns</a></p>
 </div>
 <div class="slide-text__content">
     <h1>Free Delivery</h1>
     <p>Applies to orders of 5.000.000₫ or more. <a href="https://www.nike.com/vn/help/a/shipping-delivery-gs">View details</a></p>
 </div>
</div>
<a href="./assets/html/shop-pegasus.html" class="header__content w-100 d-inline-block link-dark text-decoration-none">
 <img src="${headerImg[rand(4)]}" alt="" class="img-fluid w-100">
 <div class="header__shop--content d-flex flex-column align-items-center mt-5">
     <p class="text-dark fw-normal fs-5">Nike Pegasus 40</p>
     <p class="fw-bold fs-1">THE WORLD RUNS PEGASUS.</p>
     <p>Meet the lasted updated to the shoe that's been trusted by runners of all kinds for four decays</p>
     <button class="btn btn-dark rounded-5 px-4">Shop</button>
 </div>
</a>
</header>

<main class="mb-5">
<section class="pegasus__shop container-fluid mb-5">
 <p class="fs-3">Welcome to Pegasus Shop</p>
 <div class="row gy-3">
     <div class="col-lg-4 col-12 gy-md-3">
         <div class="pegasus__img">
             <img class="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_500,c_limit/1926120e-0327-42e2-82bf-cb2f0deb3cb4/nike-just-do-it.jpg" alt="">
             <button class="pegasus__btn btn btn-light rounded-5 px-3">Women's</button>
         </div>
     </div>
     <div class="col-lg-4 col-12 gy-md-3">
         <div class="pegasus__img">
             <img class="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_500,c_limit/72f95063-c6b8-4309-a152-5b8ce04d11ce/nike-just-do-it.jpg" alt="">
             <button class="pegasus__btn btn btn-light rounded-5 px-3">Kid's</button>
         </div>
     </div>
     <div class="col-lg-4 col-12 gy-md-3">
         <div class="pegasus__img">
             <img class="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_500,c_limit/6a6914cd-3712-4e7e-85f8-a8fd01288248/nike-just-do-it.jpg" alt="">
             <button class="pegasus__btn btn btn-light rounded-5 px-3">Men's</button>
         </div>
     </div>
 </div>
</section>
<section class="sale__shoe container-fluid mb-5">
 <p class="fs-3">Top Kicks Under 3,000,000 <span>&#8363;</span></p>
 <div class="pegasus__images d-flex overflow-scroll gap-2">
     <div class="pegasus__image">
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/68b0ba7b-a352-4ed1-a0e9-2df11a68b693/air-max-sc-se-shoes-mVqXvN.png" alt="">
         <div class="description--price">
             <div class="des__content">
                 <h4>Nike Air Max SC SE</h4>
                 <p>Women's shoes</p>
             </div>
             <div class="price__content">
                 <span>2,349,000<span>&#8363;</span></span>
             </div>
         </div>
     </div>
     <div class="pegasus__image">
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/f983a76c-af61-4ef0-9b9e-7c434bee07dc/blazer-low-77-shoes-zHbZKq.png" alt="">
         <div class="description--price">
             <div class="des__content">
                 <h4 class="access">Member Access</h4>
                 <h4>Nike Blazer Low '77 <span>premium</span></h4>
                 <p>Men's Shoes</p>
             </div>
             <div class="price__content">
                 <span>2,779,000<span>&#8363;</span></span>
             </div>
         </div>
     </div>
     <div class="pegasus__image">
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png" alt="">
         <div class="description--price">
             <div class="des__content">
                 <h4>Nike Air Max SYSTM</h4>
                 <p>Men's Shoes</p>
             </div>
             <div class="price__content">
                 <span>2,779,000<span>&#8363;</span></span>
             </div>
         </div>
     </div>
     <div class="pegasus__image">
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png" alt="">
         <div class="description--price">
             <div class="des__content">
                 <h4>Nike Air Max SYSTM</h4>
                 <p>Men's Shoes</p>
             </div>
             <div class="price__content">
                 <span>2,779,000<span>&#8363;</span></span>
             </div>
         </div>
     </div>
     <div class="pegasus__image">
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png" alt="">
         <div class="description--price">
             <div class="des__content">
                 <h4>Nike Air Max SYSTM</h4>
                 <p>Men's Shoes</p>
             </div>
             <div class="price__content">
                 <span>2,779,000<span>&#8363;</span></span>
             </div>
         </div>
     </div>
     <div class="pegasus__image">
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png" alt="">
         <div class="description--price">
             <div class="des__content">
                 <h4>Nike Air Max SYSTM</h4>
                 <p>Men's Shoes</p>
             </div>
             <div class="price__content">
                 <span>2,779,000<span>&#8363;</span></span>
             </div>
         </div>
     </div>
     <div class="pegasus__image">
         <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png" alt="">
         <div class="description--price">
             <div class="des__content">
                 <h4>Nike Air Max SYSTM</h4>
                 <p>Men's Shoes</p>
             </div>
             <div class="price__content">
                 <span>2,779,000<span>&#8363;</span></span>
             </div>
         </div>
     </div>
 </div>
 <div id="carouselExample" class="carousel slide d-none">
     <div class="carousel-inner">
       <div class="carousel-item active">
         <div class="pegasus__image w-100">
             <img class="w-100" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/f983a76c-af61-4ef0-9b9e-7c434bee07dc/blazer-low-77-shoes-zHbZKq.png" alt="">
             <div class="description--price">
                 <div class="des__content">
                     <h4 class="access">Member Access</h4>
                     <h4>Nike Blazer Low '77 <span>premium</span></h4>
                     <p>Men's Shoes</p>
                 </div>
                 <div class="price__content">
                     <span>2,779,000<span>&#8363;</span></span>
                 </div>
             </div>
         </div>
       </div>
       <div class="carousel-item">
         <div class="pegasus__image w-100">
             <img class="w-100" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/f983a76c-af61-4ef0-9b9e-7c434bee07dc/blazer-low-77-shoes-zHbZKq.png" alt="">
             <div class="description--price">
                 <div class="des__content">
                     <h4 class="access">Member Access</h4>
                     <h4>Nike Blazer Low '77 <span>premium</span></h4>
                     <p>Men's Shoes</p>
                 </div>
                 <div class="price__content">
                     <span>2,779,000<span>&#8363;</span></span>
                 </div>
             </div>
         </div>
       </div>
       <div class="carousel-item">
         <div class="pegasus__image w-100">
             <img class="w-100" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/68b0ba7b-a352-4ed1-a0e9-2df11a68b693/air-max-sc-se-shoes-mVqXvN.png" alt="">
             <div class="description--price">
                 <div class="des__content">
                     <h4>Nike Air Max SC SE</h4>
                     <p>Women's shoes</p>
                 </div>
                 <div class="price__content">
                     <span>2,349,000<span>&#8363;</span></span>
                 </div>
             </div>
         </div>
       </div>
       <div class="carousel-item">
         <div class="pegasus__image w-100">
             <img class="w-100" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/f983a76c-af61-4ef0-9b9e-7c434bee07dc/blazer-low-77-shoes-zHbZKq.png" alt="">
             <div class="description--price">
                 <div class="des__content">
                     <h4 class="access">Member Access</h4>
                     <h4>Nike Blazer Low '77 <span>premium</span></h4>
                     <p>Men's Shoes</p>
                 </div>
                 <div class="price__content">
                     <span>2,779,000<span>&#8363;</span></span>
                 </div>
             </div>
         </div>
       </div>
       <div class="carousel-item">
         <div class="pegasus__image w-100">
             <img class="w-100" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/68b0ba7b-a352-4ed1-a0e9-2df11a68b693/air-max-sc-se-shoes-mVqXvN.png" alt="">
             <div class="description--price">
                 <div class="des__content">
                     <h4>Nike Air Max SC SE</h4>
                     <p>Women's shoes</p>
                 </div>
                 <div class="price__content">
                     <span>2,349,000<span>&#8363;</span></span>
                 </div>
             </div>
         </div>
       </div>
       <div class="carousel-item">
         <div class="pegasus__image w-100">
             <img class="w-100" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/f983a76c-af61-4ef0-9b9e-7c434bee07dc/blazer-low-77-shoes-zHbZKq.png" alt="">
             <div class="description--price">
                 <div class="des__content">
                     <h4 class="access">Member Access</h4>
                     <h4>Nike Blazer Low '77 <span>premium</span></h4>
                     <p>Men's Shoes</p>
                 </div>
                 <div class="price__content">
                     <span>2,779,000<span>&#8363;</span></span>
                 </div>
             </div>
         </div>
       </div>
       <div class="carousel-item">
         <div class="pegasus__image w-100">
             <img class="w-100" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_599,c_limit/f983a76c-af61-4ef0-9b9e-7c434bee07dc/blazer-low-77-shoes-zHbZKq.png" alt="">
             <div class="description--price">
                 <div class="des__content">
                     <h4 class="access">Member Access</h4>
                     <h4>Nike Blazer Low '77 <span>premium</span></h4>
                     <p>Men's Shoes</p>
                 </div>
                 <div class="price__content">
                     <span>2,779,000<span>&#8363;</span></span>
                 </div>
             </div>
         </div>
       </div>
     </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>
</section>
<section class="trending container-fluid mb-5">
 <p class="fs-3">Trending</p>
 <div class="row  gy-3">
     <div class="col-lg-6 col-12">
         <div class="trending__content">
             <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/2e0a5721-ef33-4d38-a8a8-132f72df955a/nike-just-do-it.png" alt="" class="w-100">
             <div class="content__text">
                 <p class="text-light">Nike Tiger Woods'13</p>
                 <p class="text-light fs-3 fw-normal">App Early Access</p>
                 <button class="btn btn-light rounded-5 px-3">Get It First</button>
             </div>
         </div>
     </div>
     <div class="col-lg-6 col-12">
         <div class="trending__content">
             <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/d62ad2b8-9231-4fdb-9f4a-3ff76a34b26b/nike-just-do-it.png" alt="" class="w-100">
             <div class="content__text">
                 <p class="text-light">Nike Tiger Woods'13</p>
                 <p class="text-light fs-3 fw-normal">App Early Access</p>
                 <button class="btn btn-light rounded-5 px-3">Shop</button>
                 <button class="btn btn-light rounded-5 px-3">Learn More</button>
             </div>
         </div>
     </div>
 </div>
</section>
<section class="pegasus__shop container-fluid mb-5">
 <p class="fs-3">The Essentials</p>
 <div class="row  gy-3">
     <div class="col-lg-4 col-12 gy-md-3 gy-sm-3">
         <div class="pegasus__img">
             <img class="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png" alt="">
             <button class="pegasus__btn btn btn-light rounded-5 px-3">Women's</button>
         </div>
     </div>
     <div class="col-lg-4 col-12 gy-md-3 gy-sm-3">
         <div class="pegasus__img">
             <img class="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png" alt="">
             <button class="pegasus__btn btn btn-light rounded-5 px-3">Kid's</button>
         </div>
     </div>
     <div class="col-lg-4 col-12 gy-md-3 gy-sm-3">
         <div class="pegasus__img">
             <img class="w-100 rounded-1" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png" alt="">
             <button class="pegasus__btn btn btn-light rounded-5 px-3">Men's</button>
         </div>
     </div>
 </div>
</section>
</main>

<footer>
<section class="goods__list container-fluid d-flex justify-content-around">
 <ul class="goods__icons">
     <li class="list-unstyled mb-3"><p class="link-dark fs-5 text-decoration-none" href="">Icons</p></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Air Force 1</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Huarache</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Air Max 90</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Air Max 95</a></li>
         <div class="list__effect">
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Air Max 97</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Air Max 270</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Air Max 720</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">All Air Max</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Vapormax</a></li>
     </div>
 </ul>
 <ul class="goods__shoe">
     <li class="list-unstyled mb-3"><p class="link-dark fs-5 text-decoration-none" href="">Shoes</p></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">All Shoes</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Custom Shoes</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Jordan Shoes</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Running Shoes</a></li>
         <div class="list__effect">
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Basketball Shoes</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Football Shoes</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Gym & Training Shoes</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Lifestyle Shoes</a></li>
     </div>
 </ul>
 <ul class="goods__clothing">
     <li class="list-unstyled mb-3"><p class="link-dark fs-5 text-decoration-none" href="">Clothing</p></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">All Clothing</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Modest Wear</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Hoodies & Pullovers</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Shirts & Tops</a></li>
         <div class="list__effect">
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Jackets</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Compression & Nike Pro</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Trousers & Leggings</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Shorts</a></li>
     </div>
 </ul>
 <ul class="goods__kids">
     <li class="list-unstyled mb-3"><p class="link-dark fs-5 text-decoration-none" href="">Kids'</p></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Infant & Toddler Shoes</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Kids' Shoes</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Kids' Jordan Shoes</a></li>
     <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Kids' Basketball Shoes</a></li>
     <div class="list__effect">
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Kids' Running Shoes</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Kids' Clothing</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Kids' Backpacks</a></li>
         <li class="list-unstyled"><a class="link-secondary fs-5 text-decoration-none" href="">Kids' Socks</a></li>
     </div>
 </ul>
</section>
<div class="footer__info">
 <div class="container footer__content">
         <div class="footer__info--text">
             <ul>
                 <li class="list-unstyled text-light fw-bold">FIND A STORE</li>
                 <li class="list-unstyled text-light fw-bold">BECOME A MEMBER</li>
                 <li class="list-unstyled text-light fw-bold">SIGN UP FOR EMAIL</li>
                 <li class="list-unstyled text-light fw-bold">Send Us Feedback</li>
             </ul>
             <ul>
                 <li class="list-unstyled text-light fw-bold">GET HELP</li>
                 <li class="list-unstyled text-light opacity-50">Order Status</li>
                 <li class="list-unstyled text-light opacity-50">Delivery</li>
                 <li class="list-unstyled text-light opacity-50">Returns</li>
                 <li class="list-unstyled text-light opacity-50">Payment Options</li>
                 <li class="list-unstyled text-light opacity-50">Contact Us</li>
             </ul>
             <ul>
                 <li class="list-unstyled text-light fw-bold">ABOUT NIKE</li>
                 <li class="list-unstyled text-light opacity-50">News</li>
                 <li class="list-unstyled text-light opacity-50">Careers</li>
                 <li class="list-unstyled text-light opacity-50">Investors</li>
                 <li class="list-unstyled text-light opacity-50">Sustainability</li>
             </ul>
         </div>
         <div class="footer__info--icons">
             <div class="icon--border">
                 <i class="fa-brands fa-twitter"></i>
             </div>
             <div class="icon--border">
                 <i class="fa-brands fa-facebook-f"></i>
             </div>
             <div class="icon--border">
                 <i class="fa-brands fa-youtube"></i>
             </div>
             <div class="icon--border">
                 <i class="fa-brands fa-instagram"></i>
             </div>
         </div>
 </div>
</div>
</footer>`
document.getElementById('homePage').innerHTML = homePageHTML;