package com.alexdl3.test.novae.controllers.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.alexdl3.test.novae.data.models.User;
import com.alexdl3.test.novae.data.services.IUserService;


@Controller
@RequestMapping("/api/v1")
@ResponseBody
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private IUserService service;
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> getUsers(){
		return ResponseEntity.ok(service.getAllUsers());
	}
	
	@GetMapping("/user/{dni}")
	public ResponseEntity<User> getOneUser(@PathVariable Long dni){
		return Optional
				.ofNullable(service.getOneUser(dni))
				.map(user -> ResponseEntity.ok().body(user))
				.orElseGet( () -> ResponseEntity.notFound().build());
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> saveUser(@RequestBody User user){
		return ResponseEntity.ok(service.postOneUser(user));
	}
	
	@DeleteMapping("/user/{dni}")
	public ResponseEntity<User> deleteByDni(@PathVariable Long dni){
		return Optional
				.ofNullable(service.delOneUser(dni))
				.map(user -> ResponseEntity.ok().body(user))
				.orElseGet( () -> ResponseEntity.notFound().build());
	}
}
