package com.alexdl3.test.novae.data.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.alexdl3.test.novae.data.models.CreditCard;


public interface CreditCardRepository extends JpaRepository<CreditCard, Long>{
	
	@Query("select c from tb_credit_card c where c.card_number = :card_number")
	CreditCard findByCardNumber(@Param("card_number") Long card_number);
	
	@Query("select c from tb_credit_card c where c.dni = :dni")
	List<CreditCard> findByDni(@Param("dni") Long dni);
	
	@Modifying
	@Query("delete from tb_credit_card c where c.card_number = :card_number")
	void removeByCardNumber(@Param("card_number") Long card_number);
	
}
