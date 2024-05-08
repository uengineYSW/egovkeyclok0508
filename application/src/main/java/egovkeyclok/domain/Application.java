package egovkeyclok.domain;

import egovkeyclok.ApplicationApplication;
import egovkeyclok.domain.Applied;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Application_table")
@Data
//<<< DDD / Aggregate Root
public class Application {

    @Id
    private String 민원번호;

    private String 민원내용;

    private String 진행상태;

    @PostPersist
    public void onPostPersist() {
        Applied applied = new Applied(this);
        applied.publishAfterCommit();
    }

    @PrePersist
    public void onPrePersist() {}

    public static ApplicationRepository repository() {
        ApplicationRepository applicationRepository = ApplicationApplication.applicationContext.getBean(
            ApplicationRepository.class
        );
        return applicationRepository;
    }
}
//>>> DDD / Aggregate Root
