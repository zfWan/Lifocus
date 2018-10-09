package org.lifocus.Dao;


import org.apache.ibatis.annotations.Param;
import org.lifocus.Domain.Account;

public interface AccountDao {

    Account findById(int id);
    Account findByUsernameAndPassword(String  user_name,String user_password);
    void insertAccount(String user_name,String user_password);
    Account findByUsername(String user_name);
    int findIdByUsername(String username);
}
