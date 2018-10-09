package org.lifocus.Service;

import org.lifocus.Domain.Comments;

import java.util.List;

public interface CommentsService {
    public Comments findCommentsById(int id);
    public List<Comments> findCommentsByArticleId(int id1);
    public void SaveComments(Comments comments);
}
