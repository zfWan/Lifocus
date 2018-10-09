package org.lifocus.Controller;


import org.lifocus.Dao.BlogRepository;
import org.lifocus.Domain.Account;
import org.lifocus.Domain.Article;
import org.lifocus.Domain.Blog;
import org.lifocus.Domain.Comments;
import org.lifocus.Service.AccountService;
import org.lifocus.Service.ArticleService;
import org.lifocus.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class EditorController {


    public  String GetDate(){
        SimpleDateFormat myFmt1=new SimpleDateFormat("yyyy-MM-dd  hh:mm:ss");
        Date now=new Date();
        String rq=myFmt1.format(now);
        return rq;
    }

    private static String UPLOADED_FOLDER = "D://untitled//";
    @Autowired
    public BlogService blogService;
    @Autowired
    public AccountService accountService;
    @Autowired
    public ArticleService articleService;

    @RequestMapping("edit")
    public String   editor(){
        return "simple";
    }

    @RequestMapping("index")
    public String   index(){
        return "index";
    }
    @RequestMapping("submit")
    @ResponseBody
    public void  submit(Blog blog){

        blog.setId();
        System.out.println(blog.getContent());

        System.out.println(blog.getHtml_content());

        System.out.println(blog.getUser_name());

        String user_name=blog.getUser_name();
        int user_id=accountService.findIdByUsername(user_name);
        Account my = accountService.findById(user_id);
        List<Article> list = my.getList();
        Article article = new Article();
        article.setUser_id(my.getUser_id());
        article.setArticle_id(blog.getId());
        article.setArticle_html(blog.getHtml_content());
        double numbs=blog.getContent().length()*0.05;
        blog.setSummary(blog.getHtml_content().substring(0,(int)numbs));
       // blog.setSummary(blog.getHtml_content());
        article.setArticle_date(GetDate());

        articleService.SaveArticle(article);
        blogService.SaveBlog(blog);
    }

    @RequestMapping("wxcontent")
    @ResponseBody
    public  Blog wxcontent(){
        Blog blog =   blogService.findBlogById(1);
        System.out.println(blog.getHtml_content());
        return  blog;
    }
    //处理文件上传
    @RequestMapping(value="/uploadimg")
    public @ResponseBody Map<String,Object> demo(@RequestParam(value = "editormd-image-file", required = false) MultipartFile file, HttpServletRequest request) {
        Map<String,Object> resultMap = new HashMap<String,Object>();
        System.out.println(request.getContextPath());
        String realPath = UPLOADED_FOLDER;
        String fileName = file.getOriginalFilename();
        System.out.println(fileName);
/*        File targetFile = new File(realPath, fileName);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }*/
        //保存
        try {
            /*            file.transferTo(targetFile);*/
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
            resultMap.put("success", 1);
            resultMap.put("message", "上传成功！");
            resultMap.put("url",UPLOADED_FOLDER+fileName);
        } catch (Exception e) {
            resultMap.put("success", 0);
            resultMap.put("message", "上传失败！");
            e.printStackTrace();
        }
        System.out.println(resultMap.get("success"));
        return resultMap;
    }


}
