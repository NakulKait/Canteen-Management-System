package com.canteen.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.canteen.backend.model.User;
import com.canteen.backend.repository.UserRepository;

import com.canteen.backend.service.*;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserService implements IUserService {

    
    private UserRepository userRepository;
    private SequenceGeneratorService sequenceGenerator;

//    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(User user) {
        Optional<User> existingUserOpt = userRepository.findByEmail(user.getEmail());

        if (existingUserOpt.isPresent()) {
            User existingUser = existingUserOpt.get();
            existingUser.setFullName(user.getFullName());
            existingUser.setPassword(user.getPassword());
            existingUser.setRole(user.getRole());
            existingUser.setVerified(user.isVerified());
            return userRepository.save(existingUser);
        } else {
            user.setId(sequenceGenerator.generateSequence(User.SEQUENCE_NAME));
            return userRepository.save(user);
        }
    }




    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public boolean checkPassword(String rawPassword, String encodedPassword) {
        // Just compare plain text passwords directly (NOT SECURE)
        return rawPassword.equals(encodedPassword);
    }


}
