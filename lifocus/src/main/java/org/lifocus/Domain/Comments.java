package org.lifocus.Domain;

public class Comments {
    int id = 1;
    private int  comments_id;
    private int  user_id;
    private int article_id;
    private String comments_content;
    private String comments_date;
    private  String comments_name;

    public String getComments_name() {
        return comments_name;
    }

    public void setComments_name(String comments_name) {
        this.comments_name = comments_name;
    }

    public int getComments_id() {

        return comments_id;
    }

    public void setComments_id() {
        this.comments_id = id;
        id++;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getArticle_id() {
        return article_id;
    }

    public void setArticle_id(int article_id) {
        this.article_id = article_id;
    }

    public String getComments_content() {
        return comments_content;
    }

    public void setComments_content(String comments_content) {
        this.comments_content = comments_content;
    }

    public String getComments_date() {
        return comments_date;
    }

    public void setComments_date(String comments_date) {
        this.comments_date = comments_date;
    }
}
