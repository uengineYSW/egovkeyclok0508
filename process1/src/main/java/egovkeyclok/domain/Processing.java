package egovkeyclok.domain;

import egovkeyclok.Process1Application;
import egovkeyclok.domain.ProcessingDeleted;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Processing_table")
@Data
//<<< DDD / Aggregate Root
public class Processing {

    @Id
    private String name;

    private Date date;

    private String 민원번호;

    @PostPersist
    public void onPostPersist() {
        ProcessingDeleted processingDeleted = new ProcessingDeleted(this);
        processingDeleted.publishAfterCommit();
    }

    @PrePersist
    public void onPrePersist() {}

    public static ProcessingRepository repository() {
        ProcessingRepository processingRepository = Process1Application.applicationContext.getBean(
            ProcessingRepository.class
        );
        return processingRepository;
    }

    //<<< Clean Arch / Port Method
    public void createProcessing(
        CreateProcessingCommand createProcessingCommand
    ) {
        //implement business logic here:

        ProcessingCreated processingCreated = new ProcessingCreated(this);
        processingCreated.publishAfterCommit();
    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void updateProcessing(
        UpdateProcessingCommand updateProcessingCommand
    ) {
        //implement business logic here:

        ProcessingUpdated processingUpdated = new ProcessingUpdated(this);
        processingUpdated.publishAfterCommit();
    }
    //>>> Clean Arch / Port Method

}
//>>> DDD / Aggregate Root
