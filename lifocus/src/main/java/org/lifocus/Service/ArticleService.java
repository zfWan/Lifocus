package org.lifocus.Service;

import org.lifocus.Domain.Article;

import java.util.List;

public interface ArticleService {
       Article findArticleById(int id);
       void SaveArticle(Article article);
       List<Article> findArticleByUserId(int id);
       public Integer findUserIdByArticleID(int id);
       public int getTitleIdByName(String name);
       public void addNumber(int article_id);
//       public int findArticleIdByUserId(int id);
}
