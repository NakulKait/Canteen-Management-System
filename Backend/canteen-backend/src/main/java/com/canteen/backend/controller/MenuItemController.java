package com.canteen.backend.controller;

import com.canteen.backend.dto.MenuItemDto;
import com.canteen.backend.service.MenuItemService;

import org.springframework.web.multipart.MultipartFile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;


@RestController
@RequestMapping("/MenuItems")
@CrossOrigin(origins = "http://localhost:5173")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @PostMapping(value = "/add", consumes = "multipart/form-data")
    public ResponseEntity<String> addFoodItem(
        @RequestParam("name") String name,
        @RequestParam("description") String description,
        @RequestParam("price") double price,
        @RequestParam("category") String category,
        @RequestParam("available") boolean available,
        @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        String imageUrl = "";

        if (image != null && !image.isEmpty()) {
            try {
                String uploadDir = "src/main/resources/static/images/";
                String filename = image.getOriginalFilename();
                Path uploadPath = Paths.get(uploadDir);

                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }

                Path filePath = uploadPath.resolve(filename);
                Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                imageUrl = "/images/" + filename;
            } catch (IOException e) {
                return ResponseEntity.status(500).body("Image upload failed");
            }
        }

        MenuItemDto dto = new MenuItemDto();
        dto.setName(name);
        dto.setDescription(description);
        dto.setPrice(price);
        dto.setCategory(category);
        dto.setImageUrl(imageUrl);
        dto.setSpecial(available);

        return ResponseEntity.ok(menuItemService.addFoodItem(dto));
    }

}
