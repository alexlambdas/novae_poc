package com.alexdl3.test.novae.data.services;

import java.util.List;
import com.alexdl3.test.novae.data.models.User;

public interface IUserService {
	public List<User> getAllUsers();
	public User postOneUser(User user);
	public User getOneUser(Long dni);
	public User delOneUser(Long dni);
}
