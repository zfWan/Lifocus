package org.lifocus.Domain;

import java.util.Date;

public class Task {

    private int id =3;

    private Integer taskId;

    private Integer userId;

    private String taskName;

    private Date taskDate;

    private Integer taskCosttime;

    public Integer getTaskId() {
        return taskId;
    }

    public void setTaskId() {

        this.taskId = id;
        id++;

    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName == null ? null : taskName.trim();
    }

    public Date getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(Date taskDate) {
        this.taskDate = taskDate;
    }

    public Integer getTaskCosttime() {
        return taskCosttime;
    }

    public void setTaskCosttime(Integer taskCosttime) {
        this.taskCosttime = taskCosttime;
    }
}