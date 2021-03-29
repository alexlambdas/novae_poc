package com.alexdl3.test.novae.data.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="tb_credit_card")
public class CreditCard {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Long card_number;
	private String card_type;
	private Long dni;
	
	public CreditCard(){}
	
	public CreditCard(Long card_number, String card_type, Long dni) {
		// TODO Auto-generated constructor stub
		this.card_number = card_number;
		this.card_type = card_type;
		this.dni = dni;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCard_number() {
		return card_number;
	}

	public void setCard_number(Long card_number) {
		this.card_number = card_number;
	}

	public String getCard_type() {
		return card_type;
	}

	public void setCard_type(String card_type) {
		this.card_type = card_type;
	}

	public Long getDni_user() {
		return dni;
	}

	public void setDni_user(Long dni) {
		this.dni = dni;
	}

	@Override
	public String toString() {
		return "CreditCard [id=" + id + ", card_number=" + card_number + ", card_type=" + card_type + ", dni_user="
				+ dni + "]";
	}
}
