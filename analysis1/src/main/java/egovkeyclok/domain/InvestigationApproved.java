package egovkeyclok.domain;

import egovkeyclok.domain.*;
import egovkeyclok.infra.AbstractEvent;
import java.util.*;
import lombok.*;

@Data
@ToString
public class InvestigationApproved extends AbstractEvent {

    private String description;
    private Date date;
    private String name;
    private String 민원번호;
    private String status;
}
