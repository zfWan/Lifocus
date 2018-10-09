package org.lifocus.Dao;

import java.util.List;
import org.lifocus.Domain.Task;

public interface TaskMapper {
    int deleteByPrimaryKey(Integer taskId);

    int insert(Task record);

    Task selectByPrimaryKey(Integer taskId);

    List<Task> selectAll();

    int updateByPrimaryKey(Task record);

    void insertTask(Task task);

    List<Task> findTaskByUserid(int user_id);
}