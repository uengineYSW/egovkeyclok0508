package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class ProcessingDeleted extends AbstractEvent {

    private String name;

    public ProcessingDeleted(Processing aggregate) {
        super(aggregate);
    }

    public ProcessingDeleted() {
        super();
    }
}
//>>> DDD / Domain Event
