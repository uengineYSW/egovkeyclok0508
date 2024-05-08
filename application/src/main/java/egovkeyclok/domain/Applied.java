package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class Applied extends AbstractEvent {

    private String 민원번호;
    private String 민원내용;

    public Applied(Application aggregate) {
        super(aggregate);
    }

    public Applied() {
        super();
    }
}
//>>> DDD / Domain Event
