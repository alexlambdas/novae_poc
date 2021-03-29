package com.alexdl3.test.novae.data.models;

public class UserNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public UserNotFoundException(Long dni) {
		// TODO Auto-generated constructor stub
		super("No se encontro el usuario con dni: " + dni);
	}
}
