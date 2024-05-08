package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class InvestigationDeleted extends AbstractEvent {

    private String name;

    public InvestigationDeleted(Investigation aggregate) {
        super(aggregate);
    }

    public InvestigationDeleted() {
        super();
    }
}
//>>> DDD / Domain Event
