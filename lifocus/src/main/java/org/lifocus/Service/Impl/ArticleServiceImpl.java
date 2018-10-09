package org.lifocus.Service.Impl;

import org.lifocus.Dao.ArticleDao;
import org.lifocus.Dao.BlogRepository;
import org.lifocus.Domain.Article;
import org.lifocus.Service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService{
    @Autowired
    private  ArticleDao articleDao;
    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Article findArticleById(int id){
        return articleDao.findArticleById(id);
    }

    @Override
    public  void SaveArticle(Article article){
        articleDao.SaveArticle(article);
    }

    @Override
    public List<Article> findArticleByUserId(int id){
        return articleDao.findArticleByUserId(id);
    }

    @Override
    public Integer findUserIdByArticleID(int id){
        return articleDao.findUserIdByArticleID(id);
    }

    @Override
    public int getTitleIdByName(String name){return articleDao.getTitleIdByName(name);}

    @Override
    public void addNumber(int article_id){
        articleDao.addNumber(article_id);
        blogRepository.addBlogNum(article_id);
    }
//    @Override
//    public int findArticleIdByUserId(int id){return articleDao.findArticleIdByUserId(id);}
}
