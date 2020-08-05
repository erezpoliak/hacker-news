const urlStart = "https://hacker-news.firebaseio.com/v0/";
const urlEnd = ".json?print=pretty";

// fn returns the 20 first articles from the index and the type provided by the user
export async function getArticles(index, type) {
  const getArticlesIds = async (index, type) => {
    const fetchUrl = urlStart + type + urlEnd;
    try {
      const response = await fetch(fetchUrl);
      const jsoned = await response.json();
      const result = jsoned.slice(index, index + 20);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const ArticlesIds = await getArticlesIds(index, type);

  const ArticleArr = await Promise.all(
    ArticlesIds.map(async (id) => {
      //   const articleUrl = `${urlStart}/item/${id}/${urlEnd}`;
      //   try {
      //     const article = await fetch(articleUrl);
      //     const articleJsoned = await article.json();
      //     return articleJsoned;
      //   } catch (err) {
      //     console.log(err);
      //   }
      return getItem(id);
    })
  );

  return ArticleArr;
}

export async function getItem(itemId) {
  const fetchUrl = `${urlStart}item/${itemId}${urlEnd}`;
  try {
    const response = await fetch(fetchUrl);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
