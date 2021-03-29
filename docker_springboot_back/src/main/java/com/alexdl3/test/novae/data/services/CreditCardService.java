package com.alexdl3.test.novae.data.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alexdl3.test.novae.data.models.CreditCard;
import com.alexdl3.test.novae.data.repositories.CreditCardRepository;

@Service
@Transactional
public class CreditCardService implements ICreditCardService{
	
	@Autowired
	CreditCardRepository repository;

	@Override
	public List<CreditCard> getAllCreditCards() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public CreditCard postOneCreditCard(CreditCard c) {
		// TODO Auto-generated method stub
		repository.save(c);
		return c;
	}

	@Override
	public CreditCard getOneCreditCard(Long card_number) {
		// TODO Auto-generated method stub
		return repository.findByCardNumber(card_number);
	}

	@Override
	public CreditCard delOneCreditCard(Long card_number) {
		// TODO Auto-generated method stub
		CreditCard card = repository.findByCardNumber(card_number);
		repository.removeByCardNumber(card_number);
		return card;
	}

	@Override
	public List<CreditCard> getCreditCardsByDni(Long dni) {
		// TODO Auto-generated method stub
		return repository.findByDni(dni);
	}

}
