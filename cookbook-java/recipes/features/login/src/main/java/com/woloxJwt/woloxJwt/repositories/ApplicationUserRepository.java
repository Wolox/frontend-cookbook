package com.woloxJwt.woloxJwt.repositories;

import com.woloxJwt.woloxJwt.models.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
    ApplicationUser findByUsername(String username);
}
