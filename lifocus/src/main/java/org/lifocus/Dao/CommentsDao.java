package org.lifocus.Dao;

import org.lifocus.Domain.Comments;

import java.util.List;

public interface CommentsDao {
       public Comments findCommentsById(int id);
       public List<Comments> findCommentsByArticleId(int id);
       public void SaveComments(Comments comments);
}
