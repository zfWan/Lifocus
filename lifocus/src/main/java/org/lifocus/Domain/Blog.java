package org.lifocus.Domain;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
public class Blog implements  Comparable<Blog>{
    @Id // 主键
            long tot = 5;
    private Long id; // 用户的唯一标识

    //@NotEmpty(message = "标题不能为空")
    @Column(nullable = false, length = 50) // 映射为字段，值不能为空
    private String title;

    private String user_name;

    //@NotEmpty(message = "摘要不能为空")
    @Column(nullable = false) // 映射为字段，值不能为空
    private String summary;

    @Lob  // 大对象，映射 MySQL 的 Long Text 类型

    //@NotEmpty(message = "内容不能为空")
    @Column(nullable = false) // 映射为字段，值不能为空
    private String content;
    @Lob  // 大对象，映射 MySQL 的 Long Text 类型
    //@NotEmpty(message = "内容不能为空")
    @Column(nullable = false) // 映射为字段，值不能为空
    private String html_content; // 将 md 转为 html

    public int getPointNum() {
        return PointNum;
    }

    public void setPointNum(int pointNum) {
        PointNum = pointNum;
    }

    private int PointNum;

    public Long getId() {
        return id;
    }

    public void setId() {
        this.id = tot;
        tot++;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getContent() {
        return content;
    }

    public String getHtml_content() {
        return html_content;
    }

    public void setHtml_content(String html_content) {
        this.html_content = html_content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    @Override
    public int compareTo(Blog s){
        if(this.PointNum>s.PointNum)return 1;
        return -1;
    }


}
