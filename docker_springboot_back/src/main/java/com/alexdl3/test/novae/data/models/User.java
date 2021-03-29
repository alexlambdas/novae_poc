package com.alexdl3.test.novae.data.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="tb_user")
public class User {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Long dni;
	private String first_name_1;
	private String first_name_2;
	private String last_name_1;
	private String last_name_2;
	
	public User() {}
	
	public User(Long id, Long dni, String first_name_1, String first_name_2, String last_name_1, String last_name_2) {
		this.id = id;
		this.dni = dni;
		this.first_name_1 = first_name_1;
		this.first_name_2 = first_name_2;
		this.last_name_1 = last_name_1;
		this.last_name_2 = last_name_2;
		
	}
		
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDni() {
		return dni;
	}

	public void setDni(Long dni) {
		this.dni = dni;
	}

	public String getFirst_name_1() {
		return first_name_1;
	}

	public void setFirst_name_1(String first_name_1) {
		this.first_name_1 = first_name_1;
	}

	public String getFirst_name_2() {
		return first_name_2;
	}

	public void setFirst_name_2(String first_name_2) {
		this.first_name_2 = first_name_2;
	}

	public String getLast_name_1() {
		return last_name_1;
	}

	public void setLast_name_1(String last_name_1) {
		this.last_name_1 = last_name_1;
	}

	public String getLast_name_2() {
		return last_name_2;
	}

	public void setLast_name_2(String last_name_2) {
		this.last_name_2 = last_name_2;
	}
	
	@Override
	public String toString() {
		return "User [id=" + this.id + ", this.dni=" + dni + ", firstName1=" + this.first_name_1 + ", firstName2=" + this.first_name_2
				+ ", lastName1=" + this.last_name_1 + ", lastName2=" + this.last_name_2 + "]";
	}
	
}
