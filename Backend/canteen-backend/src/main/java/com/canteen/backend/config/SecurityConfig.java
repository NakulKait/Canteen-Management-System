package com.canteen.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	 @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http
	            .csrf(csrf -> csrf.disable()) // Disable CSRF for Postman testing
	            .authorizeHttpRequests(auth -> auth
//	            		.requestMatchers(HttpMethod.POST, "/register", "/login","/verify-otp").permitAll()
//	            		.requestMatchers(HttpMethod.GET, "/").permitAll()
//	            		 .requestMatchers(
//	                             "/v3/api-docs/**",
//	                             "/swagger-ui/**",
//	                             "/swagger-ui.html"
//	                         ).permitAll()

	                //.anyRequest().authenticated() // Everything else needs login
	            		.anyRequest().permitAll()
	            );
	        return http.build();
	    }

}
