package org.lifocus.Service.Impl;

import org.lifocus.Dao.TaskMapper;
import org.lifocus.Domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.lifocus.Service.TaskService;
import org.springframework.stereotype.Service;

//import java.util.Date;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskMapper taskMapper;

    @Override
    public void insertTask(Task task) {
        taskMapper.insertTask(task);
    }
    public List<Task> findTaskByUserid(int user_id){
        return taskMapper.findTaskByUserid(user_id);
    }
}
