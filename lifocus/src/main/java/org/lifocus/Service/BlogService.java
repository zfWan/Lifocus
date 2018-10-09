package org.lifocus.Service;

import org.lifocus.Domain.Blog;
import org.springframework.stereotype.Service;

import java.util.List;


public interface BlogService {
    Blog findBlogById(int id);
    void SaveBlog(Blog blog);
    List<Blog> findBlog();
}
