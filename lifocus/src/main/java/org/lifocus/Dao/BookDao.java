package org.lifocus.Dao;

import org.lifocus.Domain.Book;

public interface BookDao {
       public void InsertBook(Book book);
       public Book FindContentById(int id);
}
