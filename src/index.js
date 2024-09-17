//console.log('JS-Homework-10_repeat')
//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t

import {fetchBreeds} from "./cat-api"

const search = document.querySelector('.js-search')
const catInfo = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')

search.addEventListener('change', onSearch);


// //перший запит
// function fetchBreeds() {
//     const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
//     const API_KEY = 'live_qVMnKGr2HdlsR807IOCErOPauQsHEHnfe8oeOiRs1YEqeZSIyzW0Zk7fOKIeCJQA';

//     return fetch(`${BASE_URL}?api_key=${API_KEY}&limit=100`)
//     .then(resp => {
//         //console.log('Результат запиту:', resp.json())
//         if(!resp.ok){
//             throw new Error('resp.statusText')   //сетемо нову помилку по такій конструкції, використовуємо statusText(що прийшов)
//         }
//         return resp.json();
//     })
// }

//запит для select-options
fetchBreeds()
    .then((data) => {search.insertAdjacentHTML('beforeend', createOptions(data)) })
    .catch(err => console.log(err));

//зробили вибір породи
function createOptions(arr) {
    console.log('arrForOptions:', arr)
    return arr.map(({ id, name }) => `
        <option value="${id}">${name}</option>
    `).join('')
}

function onSearch(evt) {
    //console.log('searchEvt', evt.currentTarget.value)
    const id = evt.currentTarget.value;
    loader.hidden = false;
catInfo.innerHTML = '';
    //запит для cat-info
    fetchBreeds()
    .then((data) => (findSearchCat(data, id)))
    .catch(err => console.log(err)); 

}

//знаходимо обраного кота з усього масиву котів
function findSearchCat(arr, idCat) {
    
    // console.log('arr:', arr)
    //  console.log('id:', id);
    const findCat = arr.find(({ id }) => id === idCat);
     console.log('infoSearchCatt:', findCat)
    console.log(findCat.name)

    catInfo.innerHTML = (createMarkupCatInfo(findCat));//розмітка (інформація про кота)
    loader.hidden = true;
}
function createMarkupCatInfo({name = 'cat', description, temperament, image: {url  = "https://cdn2.thecatapi.com/images/oGefY4YoG.jpg"}}) {
    
    return `
    <img class="cat-info_img" src="${url}" alt="${name}" width=300>
    <div class="cat-info_box">
        <h2 class="cat-info_title">${name}</h2>
        <p class="cat-info_descriptio">${description}</p>
        <p><span class="cat-info_nature">Temperament:</span> ${temperament}</p>
    </div>
    `
}