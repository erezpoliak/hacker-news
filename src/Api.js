const urlStart = "https://hacker-news.firebaseio.com/v0/";
const urlEnd = ".json?print=pretty";

// fn returns the first top 20 articles from the index provided
export async function getTopArticles(index) {
  const getTopArticlesIds = async (index) => {
    const topStoriesUrl = `${urlStart}topstories${urlEnd}`;
    try {
      const response = await fetch(topStoriesUrl);
      const jsoned = await response.json();
      const result = jsoned.slice(index, index + 19);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const topArticlesIds = await getTopArticlesIds(index);

  const topArticleArr = await Promise.all(
    topArticlesIds.map(async (id) => {
      const articleUrl = `${urlStart}/item/${id}/${urlEnd}`;
      try {
        const article = await fetch(articleUrl);
        const articleJsoned = await article.json();
        return articleJsoned;
      } catch (err) {
        console.log(err);
      }
    })
  );

  return topArticleArr;
}
