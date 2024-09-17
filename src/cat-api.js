const error = document.querySelector('.error')

//перший запит
function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    const API_KEY = 'live_qVMnKGr2HdlsR807IOCErOPauQsHEHnfe8oeOiRs1YEqeZSIyzW0Zk7fOKIeCJQA';

    return fetch(`${BASE_URL}?api_key=${API_KEY}&limit=100`)
        .then(resp => {
        //console.log('Результат запиту:', resp)
        // console.log('Результат запиту:', resp.json())
            if (!resp.ok) {
                error.hidden = false;
            throw new Error('resp.statusText')   //сетемо нову помилку по такій конструкції, використовуємо statusText(що прийшов)
        }
        return resp.json();
    })
}

export { fetchBreeds };
