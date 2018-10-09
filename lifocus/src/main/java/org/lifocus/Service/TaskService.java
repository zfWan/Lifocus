package org.lifocus.Service;

import org.lifocus.Domain.Task;

import java.util.Date;
import java.util.List;

public interface TaskService {
    void insertTask(Task task);
    List<Task> findTaskByUserid(int user_id);
}
