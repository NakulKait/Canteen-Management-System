package com.canteen.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "users")
public class User {

    @Id
    private String id;  // MongoDB uses String ObjectId by default
    private String fullName;
    private String email;
    private String role;
    private String password;
}
