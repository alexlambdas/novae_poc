package com.alexdl3.test.novae.data.services;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alexdl3.test.novae.data.models.User;
import com.alexdl3.test.novae.data.repositories.UserRepository;

@Service
@Transactional
public class UserService  implements IUserService{
	
	@Autowired
	private UserRepository repository;

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}
	
	@Override
	public User postOneUser(User user) {
		// TODO Auto-generated method stub
		repository.save(user);
		return user;
	}

	@Override
	public User getOneUser(Long dni) {
		// TODO Auto-generated method stub
		return repository.findByDni(dni);
	}

	@Override
	public User delOneUser(Long dni) {
		// TODO Auto-generated method stub
		User user = repository.findByDni(dni);
		repository.removeByDni(dni);
		return user;
	}

}
