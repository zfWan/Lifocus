package org.lifocus.Service;

import org.lifocus.Domain.Book;

public interface BookService {
    public void InsertBook(Book book);
    public Book FindContentById(int id);
}
