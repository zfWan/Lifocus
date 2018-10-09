package org.lifocus.Domain;

public class Article {
    private long article_id;
    private int user_id;
    private String article_html;
    private String article_date;

    public long getArticle_id() {
        return article_id;
    }

    public void setArticle_id(long article_id) {
        this.article_id = article_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getArticle_html() {
        return article_html;
    }

    public void setArticle_html(String article_html) {
        this.article_html = article_html;
    }

    public String getArticle_date() {
        return article_date;
    }

    public void setArticle_date(String article_date) {
        this.article_date = article_date;
    }
}
