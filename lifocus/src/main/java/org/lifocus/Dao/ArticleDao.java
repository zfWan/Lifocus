package org.lifocus.Dao;

import org.lifocus.Domain.Article;
import org.lifocus.Domain.Blog;

import java.util.List;

public interface  ArticleDao {
    public Article findArticleById(int id);
    public void SaveArticle(Article article);
    public  List<Article> findArticleByUserId(int id);
    public int getTitleIdByName(String name);
    public Integer findUserIdByArticleID(int id);
    public int findArticleIdByUserId(int id);
    public void addNumber(int artilceId);
}
