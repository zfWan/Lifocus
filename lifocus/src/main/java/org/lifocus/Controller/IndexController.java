package org.lifocus.Controller;

import org.lifocus.Domain.*;
import org.lifocus.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin
public class IndexController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private TaskService taskService;

    public  String GetDate(){
        SimpleDateFormat myFmt1=new SimpleDateFormat("yyyy-MM-dd  hh:mm:ss");
        Date now=new Date();
        String rq=myFmt1.format(now);
        return rq;
    }

    @Autowired
    private BlogService blogService;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private CommentsService commentsService;

    //登陆验证
    @GetMapping("/{user_name}/{user_password}")
    public Account login(@PathVariable("user_name")String user_name,@PathVariable("user_password")String user_password){
//        Account account=new Account();
//        account=accountService.findByUsername(user_name,user_password);
//        HttpStatus status = account != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return accountService.findByUsernameAndPassword(user_name,user_password);
    }

    //账号注册
    @GetMapping("register/{user_name}/{user_password}")
    public String register(@PathVariable("user_name")String user_name,@PathVariable("user_password")String user_password){
        if (accountService.findByUsernameAndPassword(user_name,user_password)!=null)
            return "fail";
        else{
            accountService.insertAccount(user_name,user_password);
            return "success";
        }
    }

    @GetMapping("addTask/{user_name}/{task_name}/{task_costtime}")
    public void addTask(@PathVariable("user_name")String user_name,@PathVariable("task_name")String task_name,@PathVariable("task_costtime")String task_costtime){
        int user_id=accountService.findByUsername(user_name).getUser_id();
        Date date=new Date();
        Task task=new Task();
        task.setTaskId();
        task.setUserId(user_id);
        task.setTaskDate(date);
        task.setTaskName(task_name);
        String m=task_costtime.substring(0,2);
        int minute=Integer.parseInt(m)/60+1;
        task.setTaskCosttime(minute);
        taskService.insertTask(task);
    }

    @GetMapping("getTask/{user_name}")
    public List<Task> getTask(@PathVariable("user_name")String user_name){
        Account account=new Account();
        account=accountService.findByUsername(user_name);
        if (account==null){
            return null;
        }else{
            int user_id=account.getUser_id();
            return taskService.findTaskByUserid(user_id);
        }
    }

    @GetMapping("/{user_id}")
    public Account test(@PathVariable("user_id")int user_id){
        Account my =  accountService.findById(user_id);
        return  my;
    }

    @GetMapping("edit/{content}")
    public void Store(@PathVariable("content")String content){
        System.out.println(1);
        System.out.println(content);
    }

    @GetMapping("test")
    public List<Blog> Test(){
        List<Blog> blog = blogService.findBlog();
        Collections.sort(blog);
        List<Blog> real = new ArrayList<>();
        int k = Math.min(blog.size(),6);
        for(int i = 0;i<k;i++){
            real.add(blog.get(i));
        }
        return real;
    }

    @GetMapping("/hottest/{user_name}")
    public List<Blog> Test(@PathVariable("user_name")String user_name){
        int user_id=0;
        System.out.println(user_name);
        user_id=accountService.findIdByUsername(user_name);
        List<Article> articles=articleService.findArticleByUserId(user_id);
//        List<Blog> blog = blogService.findBlog(artid);
        List<Blog> blog=new ArrayList<>();
        for (int i=0;i<articles.size();i++){
            int x=(int)articles.get(i).getArticle_id();
            blog.add(blogService.findBlogById(x));
        }
        Collections.sort(blog);
        List<Blog> real = new ArrayList<>();
        int k = Math.min(blog.size(),6);
        for(int i = 0;i<k;i++){
            real.add(blog.get(i));
        }
        return real;
    }
    @GetMapping("/doit/{artid}")
    public List<Blog> doit(@PathVariable("artid")int artid){
        int user_id=articleService.findUserIdByArticleID(artid);
        String user_name=accountService.findById(user_id).getUser_name();
        user_id=accountService.findIdByUsername(user_name);
        List<Article> articles=articleService.findArticleByUserId(user_id);
//        List<Blog> blog = blogService.findBlog(artid);
        List<Blog> blog=new ArrayList<>();
        for (int i=0;i<articles.size();i++){
            int x=(int)articles.get(i).getArticle_id();
            blog.add(blogService.findBlogById(x));
        }
        Collections.sort(blog);
        List<Blog> real = new ArrayList<>();
        int k = Math.min(blog.size(),6);
        for(int i = 0;i<k;i++){
            real.add(blog.get(i));
        }
        return real;
    }

    @GetMapping("article/{article_id}")
    public List<Object> Find(@PathVariable("article_id")String arr_id){
        List<Object> ac = new ArrayList<>();
        Integer real = Integer.parseInt(arr_id);
        Article article = articleService.findArticleById(real);
        Integer user_id = articleService.findUserIdByArticleID(real);
        Account account = accountService.findById(user_id);
        Blog blog = blogService.findBlogById(real);
        ac.add(article);
        ac.add(account);
        ac.add(blog);
        return ac;
    }

    @GetMapping("/Commentss/{my1}/{my2}/{my3}")
    public void comment(@PathVariable("my1")String arrr_id,@PathVariable("my2")String content,@PathVariable("my3")String commName){
        int article_id =  Integer.parseInt(arrr_id);
        Article article = articleService.findArticleById(article_id);
        int user_id = article.getUser_id();
        Comments comments = new Comments();
        comments.setArticle_id(article_id);
        comments.setUser_id(user_id);
        comments.setComments_date(GetDate());
        comments.setComments_content(content);
        comments.setComments_id();
        comments.setComments_name(commName);
        commentsService.SaveComments(comments);
    }
    @GetMapping("/Comment/{article_id}")
    public List<Comments> Getcomment(@PathVariable("article_id")String article_id){
        int artid = Integer.parseInt(article_id);
        List<Comments> list= commentsService.findCommentsByArticleId(artid);
        return  list;
    }

    @GetMapping("/date/{article_id}")
    public List<Object> Getdate(@PathVariable("article_id")String arr_id){
        int article_id = Integer.parseInt(arr_id);
        int user_id = articleService.findUserIdByArticleID(article_id);
        Account account = accountService.findById(user_id);
        String user_name = account.getUser_name();
        List<Object> list = new ArrayList<>();
        List<Article> list1 =  articleService.findArticleByUserId(user_id);
        Map<Integer,Integer> store = new HashMap<Integer, Integer>();
        for(int i = 0;i<list1.size();i++){
            Article article = list1.get(i);
            String my = article.getArticle_date();
            String year = my.substring(0,4);
            String month = my.substring(5,7);
            Integer realyear = Integer.parseInt(year+month);
            if(!store.containsKey(realyear)){
                store.put(realyear,1);
            }
            else{
                Integer now = store.get(realyear);
                store.remove(realyear);
                store.put(realyear,now+1);
            }
        }
        Set<Integer> ks = store.keySet();
        Iterator<Integer> it = ks.iterator();
        List<Integer> sortlist = new ArrayList<>();
        while(it.hasNext()){
            Integer key = it.next();
            sortlist.add(key);
        }
        Collections.sort(sortlist);
        Collections.reverse(sortlist);
        for(int i = 0;i<sortlist.size();i++){
            Integer value = store.get(sortlist.get(i));
            list.add(sortlist.get(i));
            list.add(value);
        }
        list.add(user_name);
        return list;
    }



    @GetMapping("/Date/{user_name}")
    public List<Object> GetDate(@PathVariable("user_name")String arr_id){
//        int article_id = Integer.parseInt(arr_id);
        int user_id = accountService.findIdByUsername(arr_id);
        Account account = accountService.findById(user_id);
        String user_name = account.getUser_name();
        List<Object> list = new ArrayList<>();
        List<Article> list1 =  articleService.findArticleByUserId(user_id);
        Map<Integer,Integer> store = new HashMap<Integer, Integer>();
        for(int i = 0;i<list1.size();i++){
            Article article = list1.get(i);
            String my = article.getArticle_date();
            String year = my.substring(0,4);
            String month = my.substring(5,7);
            Integer realyear = Integer.parseInt(year+month);
            if(!store.containsKey(realyear)){
                store.put(realyear,1);
            }
            else{
                Integer now = store.get(realyear);
                store.remove(realyear);
                store.put(realyear,now+1);
            }
        }
        Set<Integer> ks = store.keySet();
        Iterator<Integer> it = ks.iterator();
        List<Integer> sortlist = new ArrayList<>();
        while(it.hasNext()){
            Integer key = it.next();
            sortlist.add(key);
        }
        Collections.sort(sortlist);
        Collections.reverse(sortlist);
        for(int i = 0;i<sortlist.size();i++){
            Integer value = store.get(sortlist.get(i));
            list.add(sortlist.get(i));
            list.add(value);
        }
        list.add(user_name);
        return list;
    }

    String []temp = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
    @GetMapping("/ListBlog/{user_name}/{month}/{year}")
    public List<Object> List(@PathVariable("user_name")String arrname,@PathVariable("month")String month,@PathVariable("year")String year){
        List<Object> list= new ArrayList<>();
        Integer now = accountService.findIdByUsername(arrname);
        List<Article> articleList = articleService.findArticleByUserId(now);
        int num = 0;
        for(int i = 0;i<articleList.size();i++){
            if(!month.equals("Impossible")){
                Article article = articleList.get(i);
                String datt = article.getArticle_date();
                String year1 = datt.substring(0,4);
                String month1 = datt.substring(5,7);

                Integer year2 = Integer.parseInt(year1);
                Integer month2 = Integer.parseInt(month1);

                Integer year3 = Integer.parseInt(year);
                System.out.println(month+"  "+year3);
                System.out.println(temp[month2-1]+" "+year2);
                if(!year3.equals(year2)||!temp[month2-1].equals(month))continue;
            }

            list.add(articleList.get(i));
            long mmy = articleList.get(i).getArticle_id();
            Blog blog = blogService.findBlogById((int)mmy);
            list.add(blog);
        }
        return list;

    }

    @GetMapping("/getTitleId/{name}")
    public int getTitleIdByName(@PathVariable("name") String name){
        return articleService.getTitleIdByName(name);
    }

    @GetMapping("/addNumber/{article_id}")
    public void addNumber(@PathVariable("article_id")String arti_id){
        int article_id=Integer.parseInt(arti_id);
        articleService.addNumber(article_id);
    }
}
