


    const snkrsApp = {
        snkrsLink : ["https://static.nike.com/a/images/w_960,c_limit,f_auto/d9a8c5d1-0a91-40c7-87cc-2419a5c09e08/behind-the-design-air-jordan-1-next-chapter-part-2.jpg", "https://static.nike.com/a/images/w_960,c_limit,f_auto/282bccb4-6701-4c82-bf01-2ff77d65a1ac/behind-the-design-air-jordan-1-next-chapter-part-1.jpg", "https://static.nike.com/a/images/w_960,c_limit,f_auto/6b36f8c3-774e-4c07-b3f5-094e769031bf/behind-the-design-kobe-4-protro-mambacita.jpg", "https://static.nike.com/a/images/w_960,c_limit,f_auto/2812d741-9f13-45f7-b633-15307b725a91/the-drop-off-korea.jpg", "https://static.nike.com/a/images/w_960,c_limit,f_auto/00427e9a-b73d-4f58-a5b0-b9aa20eff337/street-snkrs-sneaker-politics.png", "https://static.nike.com/a/images/w_960,c_limit,f_auto/1a720103-6a1b-4d59-be84-4289b8e8ff36/snkrs-style-nike-kwondo-1-x-peaceminusone.jpg", "https://static.nike.com/a/images/w_960,c_limit,f_auto/c77c845a-ffd1-4778-87d0-c90ca16923b9/snkrs-style-air-max-1-86-og.jpg", "https://static.nike.com/a/images/w_960,c_limit,f_auto/53ae4001-9dd6-4867-beb6-7d03825de56d/snkrs-style-air-max-1-87-corduroy.jpg","https://static.nike.com/a/images/w_960,c_limit,f_auto/b368219f-b684-45bc-85f5-fe0f647eb583/snkrs-style-women%E2%80%99s-air-max-1-%E2%80%9887-safari.jpg","https://static.nike.com/a/images/w_960,c_limit,f_auto/fbeb0f15-5bc9-4bb2-b72d-92be72c083cd/street-snkrs.png", "https://static.nike.com/a/images/w_960,c_limit,f_auto/669b9ecd-b6c4-406b-b8c1-79c27937e605/street-snkrs-milan.jpg", "https://static.nike.com/a/images/w_960,c_limit,f_auto/b476729a-f8dc-461d-b250-a975dc8158e2/air-force-1-colour-of-the-month-baltimore.jpg"],
        rand: function (num) {
            return Math.floor(Math.random()*num);
        },
        renderSNKRSItem: function () {
            const snkrsItem = this.snkrsLink.map(img => {
                return `<div class="col-lg-4 col-md-6 col-12 mb-3 d-flex flex-column align-items-center gap-3">
                <img src="${this.snkrsLink[this.rand(12)]}" alt="" class="cursor-pointer w-100 snkrs__img">
                <button class="btn btn-dark rounded-5 px-3 py-2">Learn more</button>
            </div>`
            })
            document.getElementById('snkrs__item').insertAdjacentHTML("beforeend",snkrsItem.join(''));
        },
        handleEvent: function() {
            const loadBtn = document.querySelector('.load__btn');
            const snkrsImgs = [...document.querySelectorAll(".snkrs__img")];
            const lightBox = document.createElement('div');
                lightBox.id = "light-box"
                document.body.append(lightBox);
            const img = document.createElement('img')
                    img.className = "rounded-3"
                    img.style.zIndex = "1001"
                    img.style.width = "400px";
                    img.style.height = "auto";
            loadBtn.onclick = ()=> {
                this.renderSNKRSItem();
            }
            snkrsImgs.forEach(snkrs__img => {
                snkrs__img.onclick = function() {
                    img.src = snkrs__img.src;
                    lightBox.classList.add("active");
                    if(lightBox.firstChild){
                        lightBox.removeChild(this.firstChild);
                    }
                    lightBox.appendChild(img);
                }
                lightBox.onclick = function(e) {
                    if(e.target !== e.currentTarget) return;
                        lightBox.classList.remove("active");
            
                }
            
            })
        },
        start: function() {
            this.renderSNKRSItem();
            this.handleEvent();
        }
        
    }
    snkrsApp.start();
    
    