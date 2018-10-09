package org.lifocus.Dao;

import org.lifocus.Domain.Blog;

import java.util.List;

public interface BlogRepository{
    public Blog findBlogById(int id);
    public void SaveBlog(Blog blog);
    public List<Blog> findBlog();
    public void addBlogNum(int id);
}
