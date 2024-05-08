package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class ProcessingUpdated extends AbstractEvent {

    private String name;
    private Date date;

    public ProcessingUpdated(Processing aggregate) {
        super(aggregate);
    }

    public ProcessingUpdated() {
        super();
    }
}
//>>> DDD / Domain Event
