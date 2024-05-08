package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class InvestigationCreated extends AbstractEvent {

    private String name;
    private String description;
    private Date date;

    public InvestigationCreated(Investigation aggregate) {
        super(aggregate);
    }

    public InvestigationCreated() {
        super();
    }
}
//>>> DDD / Domain Event
