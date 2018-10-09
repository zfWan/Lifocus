package org.lifocus.Controller;


import org.lifocus.Dao.BookDao;
import org.lifocus.Domain.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BookControl {
    @Autowired
    BookDao bookDao;

    @GetMapping("/bookContent/{bookid}")
    public String bookContent(@PathVariable("bookid")String boo_id){
           int bookid = Integer.parseInt(boo_id);
           StringBuilder fin = new StringBuilder();
           if(bookid==1){
               for(int i = 1;i<=12;i++){
                   Book book = bookDao.FindContentById(i);
                   fin.append(book.getContent());
               }
               return fin.toString();
           }
           for(int i = 15;i<=35;i++){
               Book book = bookDao.FindContentById(i);
               fin.append(book.getContent());
           }
           return fin.toString();
    }

}
