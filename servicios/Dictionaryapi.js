




export const getWordData = async(pais,palabra)=>{
    let API = 'https://api.dictionaryapi.dev/api/v2/entries/';

    let data = {}
    let url = `${API}${pais}/${palabra}`;

    console.log(url);

   return fetch(url)
        .then((response) => response.json())
        .then((json) => {

            return json;

        })
        .catch(error => console.error('Error:', error))
        
}
