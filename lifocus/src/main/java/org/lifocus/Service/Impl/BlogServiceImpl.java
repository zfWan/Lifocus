package org.lifocus.Service.Impl;

import org.lifocus.Dao.BlogRepository;
import org.lifocus.Domain.Blog;
import org.lifocus.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.xml.ws.Action;
import java.util.List;


@Service
public class BlogServiceImpl implements BlogService{
    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Blog findBlogById(int id){
        return blogRepository.findBlogById(id);
    }
    @Override
    public void SaveBlog(Blog blog){
        blogRepository.SaveBlog(blog);
    }

    @Override
    public List<Blog> findBlog(){
        return blogRepository.findBlog();
    }


}
