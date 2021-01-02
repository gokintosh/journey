package com.gokul.journeybackend.journal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "te")
public class JourneyResource {


    @Autowired
    private JourneyHardCodedService journeyHardCodedService;


    @GetMapping("/users/{username}/journals")
    public List<Journal> getAllJournals(@PathVariable String username){
        return journeyHardCodedService.findAll();
    }


    @DeleteMapping("/users/{username}/journals/{id}")
    public ResponseEntity<Void> deleteJournal(@PathVariable String username,@PathVariable long id){
        Journal journal=journeyHardCodedService.deleteById(id);
        if(journal!=null){
            return ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }
}
