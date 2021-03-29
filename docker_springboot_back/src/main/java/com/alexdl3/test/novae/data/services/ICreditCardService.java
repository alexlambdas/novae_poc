package com.alexdl3.test.novae.data.services;

import java.util.List;

import com.alexdl3.test.novae.data.models.CreditCard;

public interface ICreditCardService {
	public List<CreditCard> getAllCreditCards();
	public CreditCard postOneCreditCard(CreditCard c);
	public CreditCard getOneCreditCard(Long card_number);
	public CreditCard delOneCreditCard(Long card_number);
	public List<CreditCard> getCreditCardsByDni(Long dni);
}
