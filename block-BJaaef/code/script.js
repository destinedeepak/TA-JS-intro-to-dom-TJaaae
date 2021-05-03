
let section = document.querySelector('section');

got.houses.forEach(house=>{
    house.people.forEach(person =>{
        // console.log(person)
        let article = document.createElement('article');
        article.classList.add("article" ,"flex-30");

        let divOuter = document.createElement('div');
        divOuter.classList.add('flex', 'flex-start');

        let divInner = document.createElement('div');
        divInner.classList.add('image-container');
        let img = document.createElement('img');
        img.src = person.image;
        divInner.append(img); 

        let h2 = document.createElement('h2');
        h2.innerText = person.name ;

        divOuter.append(divInner, h2);
        
        let p = document.createElement('p');
        p.innerText = person.description;

        let a = document.createElement('a');
        a.classList.add('btn');
        a.innerText = "Learn More!"

        article.append(divOuter, p, a)
        
        section.append(article)
        
    })
})