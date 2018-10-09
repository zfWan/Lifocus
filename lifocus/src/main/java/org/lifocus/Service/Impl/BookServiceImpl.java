package org.lifocus.Service.Impl;

import org.lifocus.Dao.BookDao;
import org.lifocus.Domain.Book;
import org.lifocus.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService {
      @Autowired
      private BookDao bookDao;
      @Override
      public void InsertBook(Book book){
             bookDao.InsertBook(book);
      }
      @Override
      public Book FindContentById(int id){
            return bookDao.FindContentById(id);
      }
}
