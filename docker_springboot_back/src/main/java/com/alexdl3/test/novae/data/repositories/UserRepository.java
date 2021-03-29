package com.alexdl3.test.novae.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.alexdl3.test.novae.data.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("select u from tb_user u where u.dni = :dni")
	User findByDni(@Param("dni") Long dni);
	
	@Modifying
	@Query("delete from tb_user u where u.dni = :dni")
	void removeByDni(@Param("dni") Long dni);
}
