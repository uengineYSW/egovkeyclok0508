package egovkeyclok.domain;

import egovkeyclok.Analysis1Application;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Analysis1_table")
@Data
//<<< DDD / Aggregate Root
public class Analysis1 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private Date date;

    private String status;

    public static Analysis1Repository repository() {
        Analysis1Repository analysis1Repository = Analysis1Application.applicationContext.getBean(
            Analysis1Repository.class
        );
        return analysis1Repository;
    }

    //<<< Clean Arch / Port Method
    public static void 데이터수집(InvestigationApproved investigationApproved) {
        //implement business logic here:

        /** Example 1:  new item 
        Analysis1 analysis1 = new Analysis1();
        repository().save(analysis1);

        */

        /** Example 2:  finding and process
        
        repository().findById(investigationApproved.get???()).ifPresent(analysis1->{
            
            analysis1 // do something
            repository().save(analysis1);


         });
        */

    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public static void 데이터수집(InvestigationDeleted investigationDeleted) {
        //implement business logic here:

        /** Example 1:  new item 
        Analysis1 analysis1 = new Analysis1();
        repository().save(analysis1);

        */

        /** Example 2:  finding and process
        
        repository().findById(investigationDeleted.get???()).ifPresent(analysis1->{
            
            analysis1 // do something
            repository().save(analysis1);


         });
        */

    }
    //>>> Clean Arch / Port Method

}
//>>> DDD / Aggregate Root
