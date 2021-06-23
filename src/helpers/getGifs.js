 export const getGifs = async (category) => {
  const url =
  `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=hdC0uwYn3YKEf7ZHUxwbsWvJqmwEXiis`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return gifs;
  };