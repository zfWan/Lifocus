package org.lifocus.Service.Impl;

import org.lifocus.Dao.CommentsDao;
import org.lifocus.Domain.Comments;
import org.lifocus.Service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsServiceImpl implements CommentsService{
       @Autowired
       public CommentsDao commentsDao;
       @Override
       public Comments findCommentsById(int id){
              return commentsDao.findCommentsById(id);
       }

       @Override
       public void SaveComments(Comments comments){
              commentsDao.SaveComments(comments);
       }

       @Override
       public List<Comments> findCommentsByArticleId(int id){
              return commentsDao.findCommentsByArticleId(id);
       }
}
