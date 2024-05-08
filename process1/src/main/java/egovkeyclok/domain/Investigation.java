package egovkeyclok.domain;

import egovkeyclok.Process1Application;
import egovkeyclok.domain.InvestigationDeleted;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Investigation_table")
@Data
//<<< DDD / Aggregate Root
public class Investigation {

    @Id
    private String name;

    private String description;

    private Date date;

    private String 민원번호;

    private String status;

    @PostPersist
    public void onPostPersist() {
        InvestigationDeleted investigationDeleted = new InvestigationDeleted(
            this
        );
        investigationDeleted.publishAfterCommit();
    }

    @PrePersist
    public void onPrePersist() {}

    public static InvestigationRepository repository() {
        InvestigationRepository investigationRepository = Process1Application.applicationContext.getBean(
            InvestigationRepository.class
        );
        return investigationRepository;
    }

    //<<< Clean Arch / Port Method
    public void createInvestigation(
        CreateInvestigationCommand createInvestigationCommand
    ) {
        //implement business logic here:

        InvestigationCreated investigationCreated = new InvestigationCreated(
            this
        );
        investigationCreated.publishAfterCommit();
    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void updateInvestigation(
        UpdateInvestigationCommand updateInvestigationCommand
    ) {
        //implement business logic here:

        InvestigationApproved investigationApproved = new InvestigationApproved(
            this
        );
        investigationApproved.publishAfterCommit();
    }
    //>>> Clean Arch / Port Method

}
//>>> DDD / Aggregate Root
