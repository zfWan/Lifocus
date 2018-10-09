package org.lifocus.Service.Impl;

import org.apache.ibatis.annotations.Param;
import org.lifocus.Dao.AccountDao;
import org.lifocus.Domain.Account;
import org.lifocus.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    private  AccountDao accountDao;

//    @Override
//    public Account findById(int id){
//         return accountDao.findById(id);
//    }

    @Override
    public Account findById(int id){
        return accountDao.findById(id);
    }
    @Override
    public Account findByUsernameAndPassword(String user_name,String user_password){
        return accountDao.findByUsernameAndPassword(user_name,user_password);
    }

    public void insertAccount(String user_name,String user_password){
        accountDao.insertAccount(user_name,user_password);
    }

    public  Account findByUsername(String user_name){
       return accountDao.findByUsername(user_name);
    }

    @Override
    public  Integer findIdByUsername(String username){
        return accountDao.findIdByUsername(username);
    }
}
