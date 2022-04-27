const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com', {
        params:{
            apikey: 'cb4d7a2',
            s: searchTerm
        }
    });

    console.log(response.data);
}

const input = document.querySelector('input');

input.addEventListener('input', debounce(onInput, 500));