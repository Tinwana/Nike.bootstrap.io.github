
document.addEventListener('DOMContentLoaded',function(){
const link = ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f379761e-96bb-4afa-8d6f-55ec3102f535/pegasus-40-se-road-running-shoes-1jMJKm.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44313b89-d6db-475d-8498-98c3a024d516/pegasus-40-road-running-shoes-4TS8dd.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f1aff2e-3b7f-4ec9-8c6d-ea5790a29248/pegasus-turbo-next-nature-se-road-running-shoes-3xV3VW.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e2fc84a-c7d3-4d6a-a08d-2e2e90b28071/pegasus-40-road-running-shoes-ztffW8.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2cb90540-ae37-4b31-90ad-640987e21a6b/pegasus-40-road-running-shoes-0Z9lqN.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/740f828b-eba9-4ef1-8e7c-7f8ae4806b4e/react-pegasus-trail-4-se-trail-running-shoes-qQ8LZG.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/370a6fc5-7c2f-47e3-a5a2-fb29a80d3e65/pegasus-40-road-running-shoes-ztffW8.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8d836a3-bf74-499d-96f8-74b70ee5889f/air-zoom-pegasus-40-older-road-running-shoes-S0gQ5F.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31ff8b80-45a4-4032-b61d-b22fa7645118/react-pegasus-trail-4-se-trail-running-shoes-lGbXdr.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/219ffac4-7dcf-420c-933f-a3ed4d25388a/pegasus-40-road-running-shoes-Tp3XzJ.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/762dae57-203c-430b-b1ba-7c1b23f64d36/pegasus-40-road-running-shoes-3JpHzl.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3bcc85a-f7ce-42a3-8edd-ee210d121fd0/pegasus-flyease-se-easy-on-off-road-running-shoes-sQlc76.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38c5a166-5c8f-44ee-8968-b3b54192777f/pegasus-40-road-running-shoes-Tp3XzJ.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2cfcb6dd-1167-4036-9be6-58bf04f4af0f/pegasus-40-road-running-shoes-4TS8dd.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d2595f6-f0c5-4b68-beaf-eb327fbc11c7/pegasus-flyease-se-easy-on-off-road-running-shoes-cxWMNn.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00b525ac-e0ba-49cf-88dd-4635f0dd380d/air-zoom-pegasus-40-pr-older-road-running-shoes-pmFTP8.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e784cf2-1216-488d-a56f-45567b660512/air-zoom-pegasus-40-older-road-running-shoes-S0gQ5F.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70511b6a-3e8f-48bc-9753-1d70f5ed7ed5/pegasus-turbo-next-nature-se-road-running-shoes-tHT957.png"]
const colour = "1 Colour";
const des = ["Just In", "Promo Exclusion"]
const prices = ["3,829,000₫", "4,409,000₫", "4,109,000₫", "2,679,000₫", "3,519,000₫"];
const nike = ["Nike Pegasus 40 SE", "Nike Pegasus 40", "Nike Pegasus Turbo Next Nature SE", "Nike Pegasus 40 Premium", "Nike React Pegasus Trail 4 SE", "Nike Air Zoom Pegasus 40"];
const road = ["Men's Road Running Shoes", "Women's Road Running Shoes", "Men's Trail-Running Shoes", "Older Kids' Road Running Shoes"]
const loadBtn = document.querySelector('.load__btn');
function rand (num) {
    return Math.floor(Math.random()*num);
}
const imgSrc = [
     {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    },
    {
        link:link[rand(18)],
        description: {
            des1:des[rand(2)],
            des2:nike[rand(6)],
            des3:road[rand(4)],
            des4: colour,
            price:prices[rand(5)]
        }
    }
]
function renderHTML() {
    const pegasusShopHTML = imgSrc.map ( (img) => {
    return `<div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="w-100">
        <img class="w-100" src="${img.link}" alt="">
        <div class="mt-3">
            <p class="m-2 fs-5 text-danger">${img.description.des1}</p>
            <p class="m-2 fs-5 text-dark">${img.description.des2}</p>
            <p class="m-2 text-secondary">${img.description.des3}</p>
            <p class="m-2 text-secondary">1 ${img.description.des4}</p>
            <p class="m-2 text-dark">${img.description.price}</p>
        </div>
    </div>
</div>`
});
document.getElementById('pegasus__item').insertAdjacentHTML("beforeend",pegasusShopHTML.join(''));
}
renderHTML();
loadBtn.onclick = ()=> {
    renderHTML();
}
})