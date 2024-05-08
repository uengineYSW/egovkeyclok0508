package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class ProcessingCreated extends AbstractEvent {

    private String name;
    private Date date;

    public ProcessingCreated(Processing aggregate) {
        super(aggregate);
    }

    public ProcessingCreated() {
        super();
    }
}
//>>> DDD / Domain Event
