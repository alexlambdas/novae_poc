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
import com.alexdl3.test.novae.data.models.CreditCard;
import com.alexdl3.test.novae.data.services.ICreditCardService;



@Controller
@RequestMapping("/api/v1")
@ResponseBody
@CrossOrigin(origins = "*")
public class CreditCardController {
	
	@Autowired
	ICreditCardService service;
	
	@GetMapping("/card")
	public ResponseEntity<List<CreditCard>> getCreditCards(){
		return ResponseEntity.ok(service.getAllCreditCards());
	}
	
	@GetMapping("/card/{card_number}")
	public ResponseEntity<CreditCard> getOneCreditCard(@PathVariable Long card_number){
		return Optional
				.ofNullable(service.getOneCreditCard(card_number))
				.map(card -> ResponseEntity.ok().body(card))
				.orElseGet( () -> ResponseEntity.notFound().build());
	}
	
	@GetMapping("/card/dni/{dni}")
	public ResponseEntity<List<CreditCard>> getCreditCardsByDni(@PathVariable Long dni){
		return ResponseEntity.ok(service.getCreditCardsByDni(dni));
	}
	
	@PostMapping("/card")
	public ResponseEntity<CreditCard> saveCreditCard(@RequestBody CreditCard card){
		return ResponseEntity.ok(service.postOneCreditCard(card));
	}
	
	@DeleteMapping("/card/{card_number}")
	public ResponseEntity<CreditCard> deleteByCreditCardNumber(@PathVariable Long card_number){
		return Optional
				.ofNullable(service.delOneCreditCard(card_number))
				.map(card -> ResponseEntity.ok().body(card))
				.orElseGet( () -> ResponseEntity.notFound().build());
	}
}
