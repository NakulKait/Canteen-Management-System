package com.canteen.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Serve files under /images/** from the Desktop folder
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:C:\\Users\\devip\\Downloads\\BackgroundImages");
    }
}
