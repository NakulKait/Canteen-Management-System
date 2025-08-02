package com.canteen.backend.controller;

import com.canteen.backend.dto.MenuItemDto;
import com.canteen.backend.model.MenuItem;
import com.canteen.backend.service.MenuItemService;

import org.springframework.web.multipart.MultipartFile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;


@RestController
@RequestMapping("/MenuItems")
@CrossOrigin(origins = "*")

public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @PostMapping(value = "/add", consumes = "multipart/form-data")
    public ResponseEntity<?> addFoodItem(
        @RequestParam("name") String name,
        @RequestParam("description") String description,
        @RequestParam("price") double price,
        @RequestParam("category") String category,
        @RequestParam("available") boolean available,
        @RequestParam("isSpecial") boolean isSpecial, 
        @RequestParam(value = "image", required = false) MultipartFile image,
        @RequestParam("itemType") String itemType
    ) {
        String imageUrl = "";
        if (image != null && !image.isEmpty()) {
            try {

            	String uploadDir = "C:\\Users\\devip\\Downloads\\BackgroundImages";


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
        dto.setSpecial(isSpecial);
        dto.setAvailable(available);
        dto.setItemType(itemType);

        return ResponseEntity.ok(menuItemService.addFoodItem(dto));
    }
    
    @GetMapping("/getItems")
    public ResponseEntity<?> getAllItems() {
        return ResponseEntity.ok(menuItemService.getMenuItems());
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateMenuItem(
            @PathVariable String id,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") double price,
            @RequestParam("category") String category,
            @RequestParam("available") boolean available,
            @RequestParam("isSpecial") boolean isSpecial,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        String imageUrl = "";
        if (image != null && !image.isEmpty()) {
            try {
                String uploadDir = "C:/Users/ASUS/OneDrive/Desktop/BackendImages";
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
        dto.setSpecial(isSpecial);
        dto.setAvailable(available);

        return ResponseEntity.ok(menuItemService.updateMenuItem(id, dto));
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteMenuItem(@PathVariable String id) {
        return ResponseEntity.ok(menuItemService.deleteMenuItem(id));
    }




}
