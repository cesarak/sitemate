import api from './api';

export interface iNews {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  source: string;
  date: string;
}

export function searchNews(query: string): Promise<iNews[]> {
  return api
    .get(`/everything?q=${query}&apiKey=183daca270264bad86fc5b72972fb82a`)
    .then(retData => {
      if (retData.data?.articles) {
        const articles = retData.data.articles;
        var retArray: iNews[] = [];
        articles.forEach((each: any) => {
          const auxEachNews: iNews = {
            title: each.title,
            description: each.description,
            url: each.url,
            imageUrl: each.urlToImage,
            source: each.source.name,
            date: each.publishedAt,
          };
          retArray.push(auxEachNews);
        });
        return Promise.resolve(retArray);
      } else {
        return Promise.resolve([] as iNews[]);
      }
    })
    .catch(err => {
      console.log(`Error getting news - ${JSON.stringify(err)}`);
      return Promise.reject([] as iNews[]);
    });
}
