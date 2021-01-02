package com.gokul.journeybackend.journal;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
public class JourneyHardCodedService {
    private static List<Journal> journals=new ArrayList();
    private static int idCounter=0;


    static{
        journals.add(new Journal(++idCounter,"gokulnair","learn Reactjs and angular",new Date(),false));
        journals.add(new Journal(++idCounter,"ramansingh","learn SpringBoot",new Date(),true));
        journals.add(new Journal(++idCounter,"paulrunner","learn MicroServices",new Date(),false));
    }

    public List<Journal> findAll(){
        return journals;
    }

    public Journal deleteById(Long id){
        Journal journal=findById(id);
        if(journal==null) return null;
        if(journals.remove(journal)){
            return journal;
        }
        return null;
    }

    public Journal findById(Long id) {
        for(Journal journal:journals){
            if(journal.getId()==id){
                return journal;
            }
        }
        return  null;
    }
}
