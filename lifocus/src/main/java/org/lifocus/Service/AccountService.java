package org.lifocus.Service;

import org.lifocus.Domain.Account;

public interface AccountService {
    Account findById(int id);
    Account findByUsernameAndPassword(String user_name,String user_password);
    void insertAccount(String user_name,String user_password);
    Account findByUsername(String user_name);
    Integer findIdByUsername(String username);
}
