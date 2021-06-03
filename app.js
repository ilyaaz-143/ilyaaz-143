// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// accordionItemHeaders.forEach(accordionItemHeader => {
//   accordionItemHeader.addEventListener("click", event => {
//     accordionItemHeader.classList.toggle("active");
//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     if(accordionItemHeader.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     }
//     else {
//       accordionItemBody.style.maxHeight = 0;
//     }
    
//   });
// });


let get=fetch(`https://api.alquran.cloud/v1/quran/en.asad`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.data.surahs);
            let tittles=data.data.surahs;
            for(let i=0; i<tittles.length; i++){
                let ayahs=tittles[i].ayahs;
                let ciwan=tittles[i].name+"<br>"+tittles[i].englishName;
                let tt=document.createElement('div');
                tt.classList.add('accordion-item');
                let ciwans=`
                <div class="accordion-item-header">
                  ${ciwan}
                </div>
                `;
                let outerdiv=document.createElement('div')
                outerdiv.classList.add('accordion-item-body');
                let innerdiv=document.createElement('div');
                innerdiv.classList.add('accordion-item-body-content');
                outerdiv.appendChild(innerdiv);
                tt.innerHTML=ciwans;
                document.querySelector('.accordion').append(tt);
                document.querySelectorAll('.accordion-item').forEach(acc=>{
                    acc.append(outerdiv);
                })
                for(let x=0; x<ayahs.length; x++){
                    let ayah=document.createElement('h4');
                    ayah.innerHTML=ayahs[x].text+"	&hearts;";
                    document.querySelectorAll('.accordion-item-body-content').forEach(acc=>{
                        acc.append(ayah);
                    })
                    // console.log(ayahs[x])
                }   
        }
            const ddd = document.querySelectorAll(".accordion-item-header"); 
            ddd.forEach(dd=>{
                dd.addEventListener('click',()=>{
                    dd.classList.toggle("active");
                    const accordionItemBody = dd.nextElementSibling;
                    if(dd.classList.contains("active")) {
                      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                    }
                    else {
                      accordionItemBody.style.maxHeight = 0;
                    }
                    
                })
            })
        })

function newFunction(ayahs, x) {
    console.log(ayahs[x]);
}
