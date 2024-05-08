package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class InvestigationApproved extends AbstractEvent {

    private String description;
    private Date date;
    private String name;
    private String 민원번호;
    private String status;

    public InvestigationApproved(Investigation aggregate) {
        super(aggregate);
    }

    public InvestigationApproved() {
        super();
    }
}
//>>> DDD / Domain Event
