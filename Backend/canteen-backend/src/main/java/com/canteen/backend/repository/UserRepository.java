package com.canteen.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.canteen.backend.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
}
